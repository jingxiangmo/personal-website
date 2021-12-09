#!/bin/bash

# if there's an error, exit the script
set -e

# commit and push to github take arugment as the commit message
git add .
git commit -m "$1"
git push

# deploy script for the webapp
echo "Deploying the project..."
npm run deploy

# goto website link
echo "Opening the website..."
open https://www.jingxiangmo.com