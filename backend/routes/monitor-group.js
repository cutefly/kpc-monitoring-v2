var express = require('express');
var router = express.Router();
var groups = require('../data/monitor-group.json');

router.get('/', function (req, res, next) {
    res.send(groups);
});

router.get('/:seq', function (req, res, next) {
    var seq = parseInt(req.params.seq, 10)
    var group = groups.filter(function(group) {
        return group.seq === seq
    });
    res.send(group)
});

module.exports = router;