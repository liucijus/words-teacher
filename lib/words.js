const router = require('express').Router()

router.get('/words', (req, res) => res.json({words: []}))

module.exports = router
