const { Router } = require('express')
const {
  index,
  add,
  save,
  edit,
  saveEdit,
  deleteBlog,
} = require('../controller/blog')

const router = Router()

router.get('/', index)
router.get('/add', add)
router.post('/save', save)
router.get('/edit/:id', edit)
router.post('/saveEdit/:id', saveEdit)
router.get('/delete/:id', deleteBlog)

module.exports = router
