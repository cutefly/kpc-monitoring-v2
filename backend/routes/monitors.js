var express = require('express');
var router = express.Router();
var monitors = require('../data/monitors.json');

router.get('/', function (req, res, next) {
    res.send(monitors);
});

router.get('/:seq', function (req, res, next) {
    var seq = parseInt(req.params.seq, 10)
    var monitor = monitors.filter(function(monitor) {
        return monitor.seq === seq
    });
    res.send(monitor)
});

module.exports = router;