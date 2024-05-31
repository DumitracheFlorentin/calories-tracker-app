const express = require('express')
const router = express.Router()
const reviewController = require('../controllers/review')

router.post('/', reviewController.add)
router.get('/', reviewController.get)

module.exports = router
