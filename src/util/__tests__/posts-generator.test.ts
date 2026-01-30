import path from 'path'
const { generatePosts } = require('../posts-generator')

describe('posts-generator', () => {
  it('should accept a custom postsDir', () => {
    const fixturePostsDir = path.resolve(__dirname, 'fixtures/posts')
    const posts = generatePosts(fixturePostsDir)

    expect(posts).toHaveLength(2)
    expect(posts).toEqual([
      {
        id: '/learning/deliberate-practice/2025/12/18/my-learning-methodology',
        title: '我的学习方法论——知与行、天赋与刻意练习',
        summary:
          '实践是一切认识活动的基础。脱离了社会实践、不接受社会实践检验的认识和思想没有意义。而作为有效的获取直接经验的实践方法，就是刻意练习。',
        category: 'learningdeliberate-practice',
        tags: '',
        url: '/learning/deliberate-practice/2025/12/18/my-learning-methodology.html',
        path: '_posts/2025-12-18-my-learning-methodology.md',
        date: '2025-12-18 00:00:00 +0000',
        createdDate: '2025/12/18',
      },
      {
        id: '/2025/04/10/scrum-team-efficiency-in-ai-era',
        title: 'AI时代提效指南',
        summary:
          '结构化的AI软件开发方法论 + 缩小Scrum团队规模 + 全栈工程师。',
        category: '',
        tags: 'ai-generation, efficiency, scrum',
        url: '/2025/04/10/scrum-team-efficiency-in-ai-era.html',
        path: '_posts/2025-04-10-scrum-team-efficiency-in-ai-era.md',
        date: '2025-04-10 00:00:00 +0000',
        createdDate: '2025/04/10',
      },
    ])
  })
})
