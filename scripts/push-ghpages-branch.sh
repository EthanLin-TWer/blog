#!/usr/bin/env bash

# clean-up
rm -rf dist

# prepare dist/ and build
git worktree add dist gh-pages
npm run build:react

# copy all necessary files to /dist for deployment to gh-pages branch
cp -r _drafts dist/
cp -r _posts dist/
cp -r api dist/
cp favicon.ico dist/favicon.ico
cp CNAME dist/CNAME

## force push local built /dist to origin gh-pages
cd dist
git add .
git commit -m "Deploying to gh-pages from master ${$(git rev-parse HEAD):0:8}"
git push --force --no-verify origin
git push --force --no-verify origin gh-pages

## clean-up dist folder in local
rm -rf dist
