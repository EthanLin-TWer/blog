#!/usr/bin/env bash

headSHA=$(git rev-parse HEAD)

# clean-up
rm -rf dist
git worktree remove -f dist
git branch -D gh-pages

# prepare dist/ and build
git worktree add --track -b gh-pages dist origin/gh-pages
npm run build:react

# copy all necessary files to /dist for deployment to gh-pages branch
cp -r _posts dist/
cp -r api dist/
cp favicon.ico dist/favicon.ico
cp CNAME dist/CNAME

## force push local built /dist to origin gh-pages
cd dist
git add . --force
git commit -m "🤖 Deploying to gh-pages from master ${headSHA:0:8}" --no-verify
git push --force --no-verify origin gh-pages
cd ..

## clean-up
rm -rf dist
git branch -D gh-pages
git worktree remove -f dist
