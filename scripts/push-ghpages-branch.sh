#!/usr/bin/env bash

npm run deploy:react
git push origin `git subtree split --prefix=dist`:gh-pages --no-verify --force

