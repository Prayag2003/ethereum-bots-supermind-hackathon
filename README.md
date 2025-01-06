# SuperMind

## Overview

Supermind_updated is a backend project designed to provide robust and scalable solutions for managing and processing data efficiently.

## Features

- RESTful API endpoints
- User authentication and authorization
- Data validation and error handling
- Integration with third-party services
- Comprehensive logging and monitoring

## Installation

1. Clone the repository:
      ```bash
      git clone https://github.com/Prayag2003/ethereum-bots-supermind-hackathon
      ```
2. Navigate to the project directory:
      ```bash
      cd ethereum-bots-supermind-hackathon
      ```
3. Install dependencies:
      ```bash
      cd backend
      python -m venv .venv
      ```
4. Activate the virtual environment:
      ```bash
        For Windows: source .venv/Scripts/activate
        For MacOS/Linux: source .venv/bin/activate
      ```

## Usage

1. Start the development server:
   Inside the Backend folder, run the following command:
      ```bash
      cd /src
      python main.py
      ```
2. Access the API at `http://localhost:8000/query`

### Parameters

**JSON Body:**

```json
{
	"post_type": "Video",
	"query": "What is the increase in number of likes of images than videos?"
}
```

### Response

```json
{
	"report": "Based on the data provided, the average number of Likes for videos is 524.26, while the average number of Likes for images is 456.85. This results in a percentage difference of 14.76%, indicating that videos receive, on average, 14.76% more Likes compared to images.\n\nInsights:\n- Videos tend to receive a higher average number of Likes compared to images, with a noticeable difference of 14.76%.\n- This suggests that the audience is more engaged with video content, as indicated by the higher average Likes for videos.\n- To enhance engagement further, focusing on video content creation and optimization may be beneficial, given the higher Engagement Rate for videos as well.\n\nOverall, videos appear to be more effective in garnering Likes and engagement compared to images, highlighting the importance of incorporating video content strategies in social media posts."
}
```
