const Artist = require('../models/Artists')
const errorHandler = require('../tools/errorHandler')

module.exports.getArtist = async function (req, res) {
    if (req.query.name) {
        try {
            const artist = await Artist.findOne({name: req.query.name})
            if (artist) {
                res.status(200).json({artist})
                //res.status(201).json({message: req.query.name})
            } else {
                res.status(409).json({
                    message: `This artist (${req.query.name}) not found`,
                })
            }
        } catch (e) {
            errorHandler(res, e)
        }
    } else {
        try {
            const artists = await Artist.find({})
            res.status(200).json(artists)

        } catch (e) {
            errorHandler(res, e)
        }
        res.json({message: 'artists'})
    }

    try {
        const artists = await Artist.find({})
        res.status(200).json(artists)

    } catch (e) {
        errorHandler(res, e)
    }
    res.json({message: 'artists'})
}

module.exports.create = async function (req, res) {
    const artist = await Artist.findOne({name: req.body.name})
    if (artist) {
        res.status(409).json({
            message: `This artist (${req.body.name}) already exist`,
        })
    } else {
        const artist = new Artist({
            name: req.body.name,
            style: req.body.style,
            country: req.body.country
        })
        try {
            artist.save()
            res.status(201).json({
                message: 'Artist created'
            })
        } catch (e) {
            errorHandler(res, e)
        }
    }
}

module.exports.putArtistByName = async function(req, res) {
    if (req.query.name) {
        try {
            const artist = await Artist.findOne({name: req.query.name})
            if (artist) {
                artist.name = req.body.name
                artist.style = req.body.style
                artist.country = req.body.country
                artist.save()
                res.status(200).json(artist)

            } else {
                res.status(409).json({
                    message: `This artist (${req.query.name}) not found`,
                })
            }
        } catch (e) {
            errorHandler(res, e)
        }
        res.json({message: 'artists'})
    } else {
        res.status(409).json({
            message: `Required param "name" not found`,
        })
    }

    try {
        const artists = await Artist.find({})
        res.status(200).json(artists)

    } catch (e) {
        errorHandler(res, e)
    }
    res.json({message: 'artists'})
}

module.exports.deleteArtistByName = async function(req, res) {
    if (req.query.name) {
        try {
            const artist = await Artist.findOne({name: req.query.name})
            if (artist) {
                artist.delete()
                res.status(200).json({
                    message: `Artist ${req.query.name} was deleted`
                })

            } else {
                res.status(409).json({
                    message: `This artist (${req.query.name}) not found`,
                })
            }
        } catch (e) {
            errorHandler(res, e)
        }
        res.json({message: 'artists'})
    } else {
        res.status(409).json({
            message: `Required param "name" not found`,
        })
    }

    try {
        const artists = await Artist.find({})
        res.status(200).json(artists)

    } catch (e) {
        errorHandler(res, e)
    }
    res.json({message: 'artists'})
}