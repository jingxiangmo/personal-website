#!/bin/bash

# if there's an error, exit the script
set -e

# If $1 is empty, return an error message
if [ -z "$1" ]; then
  echo "ERROR: Usage: deploy.sh <commit message>"
  exit 1
fi

echo "============================================================"
echo "Deploying the project..."
echo "============================================================"
echo 
# deploy script for the webapp
npm run deploy


echo 
echo "=========================================================="
echo "Committing and pushing to github..."
echo "=========================================================="
echo
echo "Commit message> $1"
echo 

# commit and push to github take argument as the commit message
git add .
git commit -m "$1"
git push

echo 
echo "=========================================================="
echo "Deployment complete."
echo "=========================================================="
echo 

# website url
echo "Website url: https://www.jingxiangmo.com"
echo 