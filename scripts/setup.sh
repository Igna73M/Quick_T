#!/bin/bash

# Quick_T Setup Script
echo "🎯 Setting up Quick_T Transport Management System..."

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p logs
mkdir -p uploads
mkdir -p temp

# Copy environment file
if [ ! -f .env ]; then
    echo "📋 Creating environment file..."
    cp .env.example .env
    echo "⚠️  Please update .env file with your configuration"
fi

# Install dependencies
echo "📦 Installing all dependencies..."
npm run install:all

# Initialize database (if using MongoDB)
echo "🗄️  Database setup..."
echo "Please ensure your database is running and configured in .env"

echo "✅ Setup completed!"
echo ""
echo "Next steps:"
echo "1. Update .env file with your configuration"
echo "2. Start your database (MongoDB)"
echo "3. Run 'npm run dev' to start development servers"