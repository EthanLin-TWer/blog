#!/usr/bin/env bash

predictingPrefixOfLastCommit=$(git log -n 1 --format=%s%b | cat | cut -d ' ' -f1)
content=$(cat $1)

echo "${predictingPrefixOfLastCommit}
${content}" > $1
