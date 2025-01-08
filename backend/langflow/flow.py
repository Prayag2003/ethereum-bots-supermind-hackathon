from langflow.load import run_flow_from_json
TWEAKS = {
  "AstraDBToolComponent-RQtju": {
    "api_endpoint": "https://17c5e668-9c86-4f44-854d-f91214c12991-us-east-2.apps.astra.datastax.com",
    "collection_name": "sample_collection",
    "namespace": "new_key",
    "number_of_results": 5,
    "projection_attributes": "*",
    "static_filters": {},
    "token": "ASTRA_DB_APPLICATION_TOKEN",
    "tool_description": "efe",
    "tool_name": "fa",
    "tool_params": {}
  },
  "ParseData-wIIv8": {
    "sep": "\n",
    "template": "{data}"
  },
  "OpenAIModel-lX4cP": {
    "api_key": "",
    "input_value": "",
    "json_mode": False,
    "max_tokens": None,
    "model_kwargs": {},
    "model_name": "gpt-3.5-turbo",
    "openai_api_base": "",
    "output_schema": {},
    "seed": 1,
    "stream": False,
    "system_message": "",
    "temperature": 0.1
  },
  "TextInput-8LNhR": {
    "input_value": "Return the list of individual sum of all the numerical field."
  },
  "FilterData-rsMVM": {
    "filter_criteria": [
      "\"Platform\", \"Post_Type\", \"Date\", \"Engagement_Rate\""
    ]
  },
  "TextOutput-JMSgs": {
    "input_value": ""
  },
  "ChatOutput-wYj2l": {
    "background_color": "",
    "chat_icon": "",
    "data_template": "{text}",
    "input_value": "",
    "sender": "Machine",
    "sender_name": "AI",
    "session_id": "",
    "should_store_message": True,
    "text_color": ""
  }
}

result = run_flow_from_json(flow="Untitled document (1).json",
                            session_id="", # provide a session id if you want to use session state
                            fallback_to_env_vars=True, # False by default
                            tweaks=TWEAKS)