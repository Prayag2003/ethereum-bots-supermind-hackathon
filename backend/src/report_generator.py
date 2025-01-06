import openai
import json
import os
from loguru import logger

# Load OpenAI API Key
openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_analysis_report(post_type, analysis, query):
    """Generate a natural language report using GPT."""

    logger.info("Starting report generation for post type: {}", post_type)
    logger.info(f"Query: {query}")

    prompt = (
        f"You are an AI assistant specialized in data analysis."
        f"Analyze the following data for the post type '{post_type}' and generate a report:\n"
        f""" 
        Table Columns:
            - Platform (text)
            - Post_ID (UUID)
            - Post_Type (text)
            - Post_Content (text)
            - Post_Timestamp (timestamp)
            - Likes (int)
            - Comments (int)
            - Shares (int)
            - Impressions (int)
            - Reach (int)
            - Engagement_Rate (float)
            - Date (date)
            - Time_of_Day (text)
        """
        f"{json.dumps(analysis, indent=2)}\n"
        f"User Query: {query}\n"
        "Provide insights in a concise and professional tone."
    )

    # logger.debug("Generated prompt: {}", prompt)

    try:
        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a data analyst."},
                {"role": "user", "content": prompt}
            ]
        )
        logger.info("Report generation successful")
        return response.choices[0].message.content

    except Exception as e:
        logger.error("Unexpected error: {}", e)
        return None
