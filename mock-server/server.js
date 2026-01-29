const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const path = require('path')
const fs = require('fs')

server.use(middlewares)

// Custom route for posts list
server.get('/api/posts.json', (req, res) => {
  const postsPath = path.resolve(__dirname, '../api/posts.json')
  fs.readFile(postsPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading posts.json:', err)
      return res.status(500).json({ error: 'Internal Server Error' })
    }
    try {
      const jsonData = JSON.parse(data)
      res.json(jsonData)
    } catch (parseErr) {
      console.error('Error parsing posts.json:', parseErr)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  })
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

// Use default router for other things if needed (though we're handling everything custom now)
// const router = jsonServer.router('mock-server/db.json')
// server.use(router)

server.listen(4000, () => {
  console.log('JSON Server is running on port 4000')
})
