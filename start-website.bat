@echo off
title AuctionFlow Live Platform
echo ===================================================
echo 🏛️ Starting AuctionFlow Web Platform...
echo ===================================================
echo Opening browser at http://localhost:3000 ...
start "" http://localhost:3000
node server.js
pause
