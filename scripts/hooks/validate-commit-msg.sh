#!/usr/bin/env bash

chorePrefix="🔧chore"
refactorPrefix="♻️refactor"
testPrefix="✅test"
featurePrefix="✨feature"
fixPrefix="🐛fix"
docsPrefix="📚docs"
performancePrefix="🚀performance"
todoPrefix="📝todo"
stylePrefix="🎨style"
debugPrefix="🐛debug"
postPrefix="🌞post"
draftPrefix="㊙draft"
githubIssueNumber="\#[0-9]{1,5}"

commitMessage=$(cat $1)
validTechFormat="^(Revert[[:space:]]|\[(${githubIssueNumber}|TECH)\][[:space:]](${chorePrefix}|${refactorPrefix}|${testPrefix}|${featurePrefix}|${fixPrefix}|${docsPrefix}|${performancePrefix}|${todoPrefix}|${stylePrefix}|${debugPrefix}):[[:space:]].*)"
validWritingFormat="^(Revert[[:space:]]|(${postPrefix}|${draftPrefix}):[[:space:]].*)"

if [[ ! ${commitMessage} =~ $validTechFormat ]] && [[ ! ${commitMessage} =~ $validWritingFormat ]];
then
  echo "提交信息不合规范，请参考以下提交规则："
  echo ""
  echo "🔨💡🔐 技术类提交 🔪🔫💣"
  echo "  1. 提交信息应以 Github issue 卡号开头，使用尖括号 [] 括起，卡号可为1-5位数；如没有 issue 对应，使用 [TECH] 开头；"
  echo "  2. 卡号后必须带一空格"
  echo "  3. 空格后必须带提交描述，描述类型必须为以下其中一种: ${chorePrefix}, ${refactorPrefix}, ${testPrefix}, ${featurePrefix}, ${fixPrefix}, ${docsPrefix}, ${performancePrefix}, ${todoPrefix}, ${stylePrefix}, ${debugPrefix}"
  echo "  4. 提交描述后必须带一冒号"
  echo "  5. 冒号后必须带一空格"
  echo "  6. 之后提交信息任写，要求提交信息总共在70个字符内"
  echo ""
  echo "📘📕📗 文章类提交 📔📙📓"
  echo "  1. 如为发布或修改已发布文章，以 ${postPrefix}: 开头；"
  echo "  2. 如为草稿或修改草稿文章，以 ${draftPrefix}: 开头；"
  echo "  3. 之后提交信息任写，要求提交信息总共在70个字符内"
  echo ""
  echo "合法的提交信息可参考以下几例："
  echo ""
  echo "[#206] ${chorePrefix}: introduce husky for pre-commit linting"
  echo "[#206] ${featurePrefix}: implement PostDetail in a ES6 class manner"
  echo "[TECH] ${testPrefix}: use parameterized testing to simplify timeUtil.test.js"
  echo "${postPrefix}: translate Developers Should Abandon Agile"
  echo "${draftPrefix}: initial thought on frontend unit testing"
  exit 1
fi;


messageLength=`echo "${commitMessage}" | head -1 | cat | wc -m | tr -d "[[:space:]]"`
if [[ ${messageLength} -gt 75 ]];
then
  echo ""
  echo "😢😢😢 提交信息长度必须在70个字符之内。当前提交信息长度为：${messageLength} 😢😢😢"
  exit 1
fi

echo "👏👏👏 提交信息格式验证通过 👏👏👏";
exit 0
