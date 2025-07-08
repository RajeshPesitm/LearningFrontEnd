#!/bin/bash

# List of dependencies to check
dependencies=(
  "@emotion/react"
  "@emotion/styled"
  "@mui/material"
  "react"
  "react-dom"
  "react-router-dom"
  "@eslint/js"
  "@types/react"
  "@types/react-dom"
  "@vitejs/plugin-react"
  "eslint"
  "eslint-plugin-react-hooks"
  "eslint-plugin-react-refresh"
  "globals"
  "vite"
)

# Loop through each dependency and check if it's installed
for dep in "${dependencies[@]}"; do
  # Check if the dependency exists in node_modules
  if npm ls "$dep" --depth=0 &> /dev/null; then
    echo "$dep is installed."
  else
    echo "$dep is NOT installed."
  fi
done

