const express = require('express')
const controller = require('../controllers/artists')
const router = express.Router()

router.post('/', controller.create)
router.get('/', controller.getArtist)
router.put('/', controller.putArtistByName)
router.delete('/', controller.deleteArtistByName) // реализовать

module.exports = router