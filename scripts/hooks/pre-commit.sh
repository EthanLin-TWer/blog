#!/usr/bin/env bash

findCommittingFiles() {
  declare -a committingFiles=($(git diff --staged --name-only | cat))
  local pathPattern=$1

  for file in "${committingFiles[@]}"
  do
    echo ${file}
  done | grep ${pathPattern}
}

findCommittingDrafts() {
  findCommittingFiles '_drafts/'
}

findCommittingPosts() {
  findCommittingFiles '_posts/'
}


abortWhenTryingToCommitMoreThanOneDraft() {
  declare -a committingDrafts=($(findCommittingDrafts))
  local committingDraftsCount=${#committingDrafts[@]}

  if [[ ${committingDraftsCount} -gt 1 ]];
  then
    echo ""
    echo "❗❗❗ 一次提交仅允许提交一篇草稿文章，而你竟想一次提交 ${committingDraftsCount} 篇 ❗❗❗"
    echo "$(findCommittingDrafts)"
    echo ""

    exit 1
  fi
}

abortWhenTryingToCommitMoreThanOnePost() {
  declare -a committingPosts=($(findCommittingPosts))
  local committingPostsCount=${#committingPosts[@]}

  if [[ ${committingPostsCount} -gt 1 ]];
  then
    echo ""
    echo "❗❗❗ 一次提交仅允许提交一篇文章，而你竟想一次提交 ${committingPostsCount} 篇 ❗❗❗"
    echo "$(findCommittingPosts)"
    echo ""

    exit 1
  fi
}

isTechnicalCommit() {
  declare -a committingFiles=($(git diff --staged --name-only | cat))
  for file in "${committingFiles[@]}"
  do
    if [[ ! ${file} =~ "_posts/" ]] && [[ ! ${file} =~ "_drafts/" ]]; then
      return 0
    fi
  done

  return 1
}

abortWhenSanityCheckFailsForTechnicalCommits() {
  if isTechnicalCommit; then
    npm run sanity
  fi
}

abortWhenTryingToCommitMoreThanOneDraft
abortWhenTryingToCommitMoreThanOnePost
abortWhenSanityCheckFailsForTechnicalCommits
