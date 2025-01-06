import os
import pandas as pd
from cassandra.cluster import Cluster
from cassandra.auth import PlainTextAuthProvider
from loguru import logger
import logging

# Enable Cassandra debug logging
logging.getLogger('cassandra').setLevel(logging.DEBUG)

def connect_to_astra_db():
    """Establish connection to Astra DB with enhanced error handling."""
    try:
        secure_bundle_path = os.getenv("ASTRA_DB_SECURE_CONNECT_BUNDLE")
        if not secure_bundle_path:
            raise ValueError("Secure bundle path not provided")
            
        # logger.info(f"Bundle path: {secure_bundle_path}")
        # logger.info(f"Keyspace: {os.getenv('ASTRA_DB_KEYSPACE')}")
        
        auth_provider = PlainTextAuthProvider(
            os.getenv("ASTRA_DB_CLIENT_ID"),
            os.getenv("ASTRA_DB_CLIENT_SECRET")
        )
        
        cloud_config = {
            "secure_connect_bundle": secure_bundle_path
        }
        
        cluster = Cluster(cloud=cloud_config, auth_provider=auth_provider)
        session = cluster.connect()
        
        # Verify keyspace exists
        keyspaces = session.execute("SELECT keyspace_name FROM system_schema.keyspaces")
        keyspace = os.getenv("ASTRA_DB_KEYSPACE")
        if keyspace not in [row.keyspace_name for row in keyspaces]:
            raise ValueError(f"Keyspace {keyspace} not found")
            
        session.set_keyspace(keyspace)
        logger.info(f"Connected to keyspace: {keyspace}")
        
        return session
        
    except Exception as e:
        logger.error(f"Failed to connect to Astra DB: {str(e)}")
        raise

def fetch_data_from_astra_db(table=None):
    """Fetch data from specified Astra DB table."""
    try:
        session = connect_to_astra_db()
        table = table or os.getenv('ASTRA_DB_TABLE')
        
        if not table:
            raise ValueError("Table name not provided")
            
        query = f"SELECT * FROM {table};"
        # logger.info(f"Executing query: {query}")
        
        rows = session.execute(query)
        df = pd.DataFrame(rows)
        
        logger.info(f"Retrieved {len(df)} rows from {table}")
        return df
        
    except Exception as e:
        logger.error(f"Failed to fetch data: {str(e)}")
        raise
    finally:
        if 'session' in locals():
            session.shutdown()
            logger.info("Database session closed")