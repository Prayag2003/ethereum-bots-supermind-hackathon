from loguru import logger

def analyze_post_type(data, post_type):
    """Analyze metrics for a specific post type.""" 

    logger.info("Data: ", data)

    # logger.info(f"Analyzing data for post type: {post_type}")
    if post_type not in data["Post_Type"].unique():
        return f"No data available for post type: {post_type}"

    filtered_data = data[data["Post_Type"] == post_type]
    other_data = data[data["Post_Type"] != post_type]

    # print("Filtered Data: ", filtered_data) 
    # print("Other Data: ", other_data)
    metrics = ["Likes", "Comments", "Shares", "Impressions", "Reach","Engagement_Rate"]
    analysis_metrics = {}

    for metric in metrics:
        analysis_metrics[metric] = {
            "selected_avg": filtered_data[metric].mean(),
            "others_avg": other_data[metric].mean(),
        }

    for metric, values in analysis_metrics.items():
        values["percentage_difference"] = (
            (values["selected_avg"] - values["others_avg"]) / values["others_avg"] * 100
        )

    return analysis_metrics
