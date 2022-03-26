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
local headSHA=$(git rev-parse HEAD)
git add . --force
git commit -m "🤖 Deploying to gh-pages from master ${headSHA:0:8}" --no-verify
git push --force --no-verify origin gh-pages

## clean-up
git worktree remove dist
rm -rf dist
