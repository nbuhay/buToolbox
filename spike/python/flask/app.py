from flask import Flask
from datetime import datetime
from socket import gethostname, gethostbyname
app = Flask(__name__)
port=8080

@app.route("/")
def hello():
  print gethostbyname(gethostname())
  return str(datetime.now()) + ": " + gethostname() + ": Hello World from Python Flask!"
  
if __name__ == "__main__":
  app.run(host='0.0.0.0', port=port)