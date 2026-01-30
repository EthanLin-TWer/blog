const jsonServer = require('json-server')
const path = require('path')
const fs = require('fs')
const { generatePosts } = require('../src/util/posts-generator')

const server = jsonServer.create()
const middlewares = jsonServer.defaults()

server.use(middlewares)

// Custom route for posts list
server.get('/api/posts.json', (req, res) => {
  try {
    const posts = generatePosts()
    res.json(posts)
  } catch (err) {
    console.error('Error generating posts:', err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

// Custom route for blog post details
server.get('/_posts/:filename', (req, res) => {
  const { filename } = req.params
  const filePath = path.resolve(__dirname, '../_posts', filename)

  if (!filePath.startsWith(path.resolve(__dirname, '../_posts'))) {
    return res.status(403).send('Forbidden')
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return res.status(404).send('Post not found')
      }
      console.error('Error reading post file:', err)
      return res.status(500).send('Internal Server Error')
    }
    res.set('Content-Type', 'text/plain; charset=utf-8')
    res.send(data)
  })
})

server.listen(4000, () => {
  console.log('JSON Server is running on port 4000')
})
