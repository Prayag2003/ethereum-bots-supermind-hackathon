from fastapi import FastAPI, HTTPException, Request
from enum import Enum
from pydantic import BaseModel
from data_handler import fetch_data_from_astra_db
from analysis import analyze_post_type
from report_generator import generate_analysis_report
from loguru import logger
from dotenv import load_dotenv
import pandas as pd
from mangum import Mangum

from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI()
handler = Mangum(app)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://vercel.com/prayag2003s-projects/ethereum-bots-supermind-hackathon"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PostType(Enum):
    Video = "Video"
    Image = "Image"
    Link = "Link"

class AnalysisRequest(BaseModel):
    post_type: PostType
    query: str

@app.get("/")
async def root():
    return {"message": "Welcome to the Ethereum Bots Supermind Hackathon API!"}

@app.post("/query")
async def analyze_data(request: AnalysisRequest):
    try:
        logger.info("=== Starting new analysis request ===")
        logger.info(f"Processing request - Post type: {request.post_type.value}, Query: {request.query}")
        
        logger.info("Fetching data from Astra DB...")
        data = fetch_data_from_astra_db()
        
        if not isinstance(data, pd.DataFrame):
            logger.error("Fetched data is not a DataFrame.")
            return {"error": "Unexpected data format received from database."}, 500

        # Check if the DataFrame is empty
        if data.empty:
            logger.warning("Fetched data is empty.")
            return {"message": "No data available for analysis."}

        logger.debug(f"Fetched data size: {len(data)} records")

        logger.info(f"Starting analysis for post type: {request.post_type.value}")
        analysis_metrics = analyze_post_type(data, request.post_type.value)

        if isinstance(analysis_metrics, str):
            logger.info(f"Analysis returned message: {analysis_metrics}")
            return {"message": analysis_metrics}

        logger.debug(f"Analysis metrics: {analysis_metrics}")

        logger.info("Generating analysis report...")
        report = generate_analysis_report(request.post_type.value, analysis_metrics, request.query)
        logger.info("Analysis report generated successfully")
        logger.debug(f"Generated report: {report}")
        
        return {"report": report}
        
    except Exception as e:
        logger.error(f"Error processing request: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="An error occurred while processing the request.")

# if __name__ == "__main__":
#     import uvicorn
#     logger.info("Starting FastAPI server...")
#     uvicorn.run(app, host="0.0.0.0", port=8000)
