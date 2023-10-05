const path = require('path')
let blog = []
let i = 1

const index = (req, res) => {
  res.send(blog)
}

const add = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add.html'))
}

const save = (req, res) => {
  const title = req.body.title
  const content = req.body.content

  const newBlogPost = {
    id: i++,
    title: title,
    content: content,
  }

  blog.push(newBlogPost)

  res.send(title + ' ' + content)
}

const edit = (req, res) => {
  const editId = Number(req.params.id)
  const found = blog.find((item) => {
    return item.id == editId
  })
  res.send(`
    <form action="/saveEdit/${found.id}" method="post">
      <input type="text" value="${found.title}" name="title" /><br />
      <input type="text" value="${found.content}" name="content" /><br />
      <button type="submit">Submit</button>
    </form>
  `)
}

const saveEdit = (req, res) => {
  const editId = Number(req.params.id)
  const found = blog.find((item) => {
    return item.id == editId
  })
  found.title = req.body.title
  found.content = req.body.content
  res.send(found)
}

const deleteBlog = (req, res) => {
  const delId = Number(req.params.id)
  blog = blog.filter((item) => item.id !== delId)
  res.send('deleted')
}

module.exports = { index, add, save, edit, saveEdit, deleteBlog }
