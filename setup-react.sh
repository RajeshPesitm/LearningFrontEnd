#!/bin/bash

# 1. Install Node.js and npm if not installed
sudo apt update
sudo apt install -y curl
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify
node -v
npm -v

# 2. Create the project directory
mkdir react-frontend
cd react-frontend

# 3. Initialize React with Vite (for fast dev)
npm create vite@latest . -- --template react

# 4. Install React Router
npm install react-router-dom

# 5. Install basic UI library (optional, e.g., MUI)
npm install @mui/material @emotion/react @emotion/styled

# 6. Create directories
mkdir -p src/components/layouts
mkdir -p src/components/forms
mkdir -p src/components/pages
mkdir -p src/context
mkdir -p src/services
