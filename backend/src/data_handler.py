import os
import pandas as pd
from cassandra.cluster import Cluster
from cassandra.auth import PlainTextAuthProvider
from loguru import logger
import logging

# Enable Cassandra debug logging
logging.getLogger('cassandra').setLevel(logging.DEBUG)


class AstraDBConnection:
    """Singleton class to manage Astra DB connection."""
    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls, *args, **kwargs)
            cls._instance._initialize_connection()
        return cls._instance

    def _initialize_connection(self):
        """Initialize the Astra DB connection."""
        try:
            secure_bundle_path = "src/secure-connect-new-db.zip"
            if not secure_bundle_path:
                raise ValueError("Secure bundle path not provided")
            
            auth_provider = PlainTextAuthProvider(
                os.getenv("ASTRA_DB_CLIENT_ID"),
                os.getenv("ASTRA_DB_CLIENT_SECRET")
            )
            cloud_config = {
                "secure_connect_bundle": secure_bundle_path
            }
            self.cluster = Cluster(cloud=cloud_config, auth_provider=auth_provider)
            self.session = self.cluster.connect()
            
            # Set the keyspace
            keyspace = os.getenv("ASTRA_DB_KEYSPACE")
            if not keyspace:
                raise ValueError("Keyspace name not provided")
            
            keyspaces = self.session.execute("SELECT keyspace_name FROM system_schema.keyspaces")
            if keyspace not in [row.keyspace_name for row in keyspaces]:
                raise ValueError(f"Keyspace {keyspace} not found")
            
            self.session.set_keyspace(keyspace)
            logger.info(f"Connected to keyspace: {keyspace}")
        except Exception as e:
            logger.error(f"Failed to initialize Astra DB connection: {str(e)}")
            raise

    def get_session(self):
        """Retrieve the Cassandra session."""
        return self.session

    def shutdown(self):
        """Shutdown the Cassandra session and cluster."""
        if hasattr(self, 'session') and self.session:
            self.session.shutdown()
            logger.info("Astra DB session closed.")
        if hasattr(self, 'cluster') and self.cluster:
            self.cluster.shutdown()
            logger.info("Astra DB cluster closed.")


def fetch_data_from_astra_db(table=None):
    """Fetch data from specified Astra DB table using Singleton connection."""
    try:
        db_instance = AstraDBConnection()
        session = db_instance.get_session()
        table = table or os.getenv("ASTRA_DB_TABLE")
        
        if not table:
            raise ValueError("Table name not provided")
        
        query = f"SELECT * FROM {table};"
        logger.info(f"Executing query: {query}")
        
        rows = session.execute(query)
        df = pd.DataFrame(rows)
        
        logger.info(f"Retrieved {len(df)} rows from table {table}")
        return df
    except Exception as e:
        logger.error(f"Failed to fetch data: {str(e)}")
        raise
