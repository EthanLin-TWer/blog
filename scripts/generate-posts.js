const path = require('path')
const { generatePosts } = require('../src/util/posts-generator')
const { saveToFile } = require('../src/util/fs')

const posts = generatePosts()
const outputPath = path.resolve(__dirname, '../api/posts.json')

saveToFile(JSON.stringify(posts, null, 2), outputPath)
console.log(`Generated ${posts.length} posts to ${outputPath}`)
