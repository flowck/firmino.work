#!/bin/sh

# Remove current build folder
rm -rf blog

# Navigate to source folder
cd src

# Generate static files
hexo generate

# Move the generated folder to the build folder
mv public ../blog

echo "Build is complete"

