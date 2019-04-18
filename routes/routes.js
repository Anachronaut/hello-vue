var express = require('express')
var router = express.Router()

router.get('/',function(req, res, next) {
  res.json({'message': 'Ahoy mateys!'})
})

module.exports = router
