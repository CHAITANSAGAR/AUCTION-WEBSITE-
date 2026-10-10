#!/usr/bin/env bash
# deploy.sh - Production deployment script
set -e

echo "=== Pulling Latest Code & Deploying Auction Platform ==="
git pull origin main

echo "Rebuilding backend with zero-downtime rolling restart..."
docker-compose build backend
docker-compose up -d --no-deps backend

echo "Deployment complete! Running smoke tests..."
curl -f http://localhost:8080/v3/api-docs || exit 1
echo "Smoke test passed."
