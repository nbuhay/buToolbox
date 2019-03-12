from flask import Flask, request, jsonify
from datetime import datetime
from socket import gethostname, gethostbyname
app = Flask(__name__)
port=8080

@app.route("/")
def hello():
  date = datetime.now()
  hostname = gethostbyname(gethostname())
  client = request.remote_addr

  resPayload = {
    'date': date,
    'hostname': hostname,
    'client': client,
    'msg': 'Hello World from Python Flask!'
  }
  
  print '{}: hostname {}: client {}'.format(date, hostname, client)
  return jsonify(resPayload)
  
if __name__ == "__main__":
  app.run(host='0.0.0.0', port=port)