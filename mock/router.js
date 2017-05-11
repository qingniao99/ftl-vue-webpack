var express = require('express');
var router = express.Router();


var fs = require('fs');
var api = require('./api');


router.get(api.bannerList, function (req, res, next) {
  //console.log(req.query.page);
  res.json({
    title:666666,
    desc:233333
  })
});


module.exports = router;
