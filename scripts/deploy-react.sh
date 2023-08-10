#!/usr/bin/env bash

# clean-up
rm -rf dist
mkdir -p dist

# build dist
npm run build:react

# copy all necessary files to /dist for deployment to gh-pages branch
cp -r _images dist/
cp -r _drafts dist/
cp -r _posts dist/
cp -r api dist/
cp favicon.ico dist/favicon.ico
cp CNAME dist/CNAME
