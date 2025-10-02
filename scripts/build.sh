#!/bin/bash

# Quick_T Build Script
echo "🚀 Building Quick_T Transport Management System..."

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Build client
echo "🎨 Building client application..."
cd client
npm install
npm run build
cd ..

# Build server
echo "⚙️  Building server application..."
cd server
npm install
npm run build
cd ..

echo "✅ Build completed successfully!"
echo "📁 Client build: ./client/build"
echo "📁 Server build: ./server/dist"