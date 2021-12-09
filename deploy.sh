#!/bin/bash


# if there's an error, exit the script
set -e

# deploy script for the webapp
npm run deploy

# commit changes
git add .

# push to github
git push origin master

