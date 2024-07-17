import joblib
from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Allow requests from any origin

# Load your pickled model
try:
    model = joblib.load('model.pkl')
except Exception as e:
    print("Error loading the model:", e)
    # Handle the error as needed
 # Corrected path to model

# Define a route to handle chatbot requests
@app.route('/api/chatbot')
def chatbot():
    # Access user input from query parameter 'input'
    user_input = request.args.get('input')  # Assuming input is passed as a query parameter

    # Check if user input is provided
    if user_input is not None:
        # Code to use the loaded model for inference
        response = model.predict([user_input])  # Adjust as per your model's requirements

        # Return the response with CORS headers
        response_data = jsonify({'response': response})
        response_data.headers.add('Access-Control-Allow-Origin', '*')
        response_data.headers.add('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE')
        response_data.headers.add('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Origin, Authorization')
        return response_data
    else:
        # Return a 400 Bad Request error if no input is provided
        return jsonify({'error': 'No input provided'}), 400

if __name__ == '__main__':
    app.run(debug=True)
