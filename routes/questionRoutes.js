const express = require('express')
const router = express.Router()
const {getQuestion, postQuestion, deleteQuestion, getTagQuestion}=require('../controller/questionController')
// Registration
router.post('/question', postQuestion)
router.get('/question', getQuestion)
router.delete('/question', deleteQuestion)
router.get('/tagquestion', getTagQuestion)

module.exports = router