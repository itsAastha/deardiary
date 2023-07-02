from transformers import Conversation, pipeline

# Set up the conversational pipeline
conversational_pipeline = pipeline("conversational")

# Start a conversation
conversation = Conversation()

# Add user input to the conversation
user_input = "Hello, how are you?"
conversation.add_user_input(user_input)

# Generate model response
model_response = conversational_pipeline(conversation)

# Get the generated response
response = model_response[0]["generated_text"]

print("Model: ", response)
