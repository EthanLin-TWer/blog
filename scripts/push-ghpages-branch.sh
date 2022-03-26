#!/usr/bin/env bash

npm run deploy:react

## force push local built /dist to origin gh-pages
git push origin `git subtree split --prefix=dist`:gh-pages --no-verify --force

## clean-up dist folder in local
rm -rf dist
