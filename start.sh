#!/bin/bash
pkill -f python
python server.py &
sleep 2
cloudflared tunnel --url http://localhost:5000

