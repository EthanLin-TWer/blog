#!/usr/bin/env bash

headSHA=$(git rev-parse HEAD)

# todo: this doesn't work well when: 1) no stash when pushing, 2) no stash when popped
# stash changes
#git add .
#git stash push

# clean-up
rm -rf dist
git worktree remove -f dist
git branch -D gh-pages
mkdir dist

# prepare dist/ and build
git worktree add dist gh-pages
## removes everything except hidden files like .git/
find dist -not -path '*/\.*' -delete
npm run build:react

# copy all necessary files to /dist for deployment to gh-pages branch
cp -r _posts dist/
cp -r _images dist/
cp -r api dist/
cp favicon.ico dist/favicon.ico
cp CNAME dist/CNAME

## force push local built /dist to origin gh-pages
cd dist || return
git add .
git commit -m "🤖 Deploying to gh-pages from master ${headSHA:0:8}" --no-verify
git push --force --no-verify origin gh-pages
cd ..

## clean-up
rm -rf dist
git worktree remove -f dist
git branch -D gh-pages

# pop stashed changes
#git stash pop
