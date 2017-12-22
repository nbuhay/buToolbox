from flask import Flask, request, jsonify
from flask_api import status
import os
app = Flask(__name__)

port = int(os.getenv('PORT', 5000))
index = os.getenv('CF_INSTANCE_INDEX')

@app.route("/status")
def health():
  return "CF Flask app is healthy!", status.HTTP_200_OK

if __name__ == "__main__":
  app.debug = True
  app.run(host='0.0.0.0', port=port)