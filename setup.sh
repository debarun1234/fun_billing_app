#!/bin/bash
# Setup and run script for DeBaRuN's Billing System

echo "🍛 Welcome to DeBaRuN's Billing System Setup 🍛"
echo "================================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "✅ Dependencies installed successfully!"
echo ""
echo "🚀 Starting development server..."
echo ""
echo "📍 Open your browser at: http://localhost:3000"
echo ""
echo "💡 Press Ctrl+C to stop the server"
echo ""

npm run dev
