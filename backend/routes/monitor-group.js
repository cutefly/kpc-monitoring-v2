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
    res.send(group[0])
});

router.post('/', function (req, res, next) {
    console.log(JSON.stringify(req.body))
    group = JSON.parse(JSON.stringify(req.body))
    group.seq = 5
    console.log(JSON.stringify(group))
    res.status(201).send(group)
});

router.put('/:seq', function (req, res, next) {
    var seq = parseInt(req.params.seq, 10)
    console.log(JSON.stringify(req.body))
    group = JSON.parse(JSON.stringify(req.body))
    res.send(group)
});

router.delete('/:seq', function (req, res, next) {
    var seq = parseInt(req.params.seq, 10)
    var group = groups.filter(function(group) {
        return group.seq === seq
    });
    res.send()
});

module.exports = router;