# CLAUDE.md

Project-level instructions for Claude Code.

## Commit Message Rules

Rules enforced by `.husky/commit-msg`. Max **70 characters**.

```
🌞post: <description>                         ← published post
㊙draft: <description>                        ← draft
[TASK-N] <emoji><type>: <description>         ← N is 1–3 digits
[TECH] <emoji><type>: <description>           ← no associated task
```

Types: ✨`feature` 🐛`fix` 🔧`chore` ♻️`refactor` ✅`test` 📚`docs` 🚀`performance` 🎨`style` 📝`todo` 🐛`debug`

Examples:
```
🌞post: translate Developers Should Abandon Agile
㊙draft: initial thought on frontend unit testing
[TECH] 🔧chore: update CNAME to my new domain
[TASK-1] ✨feature: implement PostDetail in a ES6 class manner
```
