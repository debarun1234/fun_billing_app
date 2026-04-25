@echo off
REM Setup and run script for DeBaRuN's Billing System (Windows)

echo.
echo 🍛 Welcome to DeBaRuN's Billing System Setup 🍛
echo ================================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org
    pause
    exit /b 1
)

echo ✅ Node.js version:
node --version
echo ✅ npm version:
npm --version
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo ✅ Dependencies installed successfully!
echo.
echo 🚀 Starting development server...
echo.
echo 📍 Open your browser at: http://localhost:3000
echo.
echo 💡 Press Ctrl+C to stop the server
echo.

call npm run dev
pause
