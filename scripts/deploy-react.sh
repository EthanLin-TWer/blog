#!/usr/bin/env bash

# clean-up
rm -rf dist
rm -rf src/react/dist
mkdir -p dist

# build dist
npm run build:react

# copy all necessary files to /dist for deployment to gh-pages branch
mv src/react/dist/** dist/
cp -r _drafts dist/
cp -r _posts dist/
cp -r api dist/
cp CNAME dist/CNAME
