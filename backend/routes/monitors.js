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

router.post('/', function (req, res, next) {
    console.log(JSON.stringify(req.body))
    monitor = JSON.parse(JSON.stringify(req.body))
    monitor.seq = 21
    console.log(JSON.stringify(monitor))
    res.status(201).send(monitor)
});

router.put('/:seq', function (req, res, next) {
    var seq = parseInt(req.params.seq, 10)
    console.log(JSON.stringify(req.body))
    monitor = JSON.parse(JSON.stringify(req.body))
    res.send(monitor)
});

router.delete('/:seq', function (req, res, next) {
    var seq = parseInt(req.params.seq, 10)
    var monitor = monitors.filter(function(monitor) {
        return monitor.seq === seq
    });
    res.send()
});

module.exports = router;