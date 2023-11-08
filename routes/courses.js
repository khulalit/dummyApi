const express = require('express');
const router = express.Router();
const data= require('../db/Data.json');

/* GET users listing. */
router.get('/', function (req, res, next) {
    // const limit = 10;
    let page = +req.query.page;
    if(!page) page = 1;

    let limit = +req.query.limit;
    if(!limit) limit = 10;

    console.log(limit, page)

    res.json({result: data.slice((page-1)*limit,page*limit), total: data.length, page: page, limit: 10});
});

router.put('/markComplete', function (req, res, next) {
    const courseId = req.body.courseId;

    console.log(courseId)
    res.json({message: 'done'});
});

router.get('/search', function (req, res, next) {
    let query = req.query.q;
    if(!query) query = '';

    const limit = 10;
    let page = req.query.page;
    if(!page) page = 1;
    res.json({result: data.filter(ele=>ele.name.toLowerCase().includes(query.toLowerCase())|| ele.instructor.toLowerCase().includes(query.toLowerCase())).slice((page-1)*limit,page*limit), total: data.length, page: page, limit: limit});
});

module.exports = router;
