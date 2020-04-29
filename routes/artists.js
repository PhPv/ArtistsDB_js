const express = require('express')
const controller = require('../controllers/artists')
const router = express.Router()

router.post('/create.artist', controller.create)
router.get('/getArtist', controller.getArtist) // сделать список из имён отсортированных
router.put('/putArtists', controller.putArtistByName)
router.delete('/deleteArtist', controller.deleteArtistByName)

module.exports = router