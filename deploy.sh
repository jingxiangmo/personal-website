#!/bin/bash

# if there's an error, exit the script
set -e

# build the project
echo "Building the project..."
npm run build

# deploy script for the webapp
echo "Deploying the project..."
npm run deploy

# goto website link
