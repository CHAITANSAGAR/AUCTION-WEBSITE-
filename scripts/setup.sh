#!/usr/bin/env bash
# setup.sh - Initial Auction Platform Setup Script
set -e

echo "=== Initializing Auction Platform Environment ==="

if ! command -v docker &> /dev/null; then
    echo "Error: docker is required but not installed."
    exit 1
fi

echo "1. Checking environment variables..."
if [ ! -f .env ]; then
    cp .env.example .env
    echo "Created .env from .env.example"
fi

echo "2. Building Spring Boot Backend and Spinning Docker Containers..."
docker-compose up -d --build

echo "3. Waiting for MySQL Database healthy state..."
sleep 10

echo "4. Running database health check..."
docker-compose exec mysql mysqladmin ping -h localhost -u root -prootpassword

echo "=== Auction Platform successfully deployed! ==="
echo "Web Portal: http://localhost:80"
echo "REST API & Swagger: http://localhost:8080/swagger-ui.html"
