var express = require('express');
var router = express.Router();
const data = require('../db/Data.json');

function getTheCoursesByStudent(email){
  let courses = [];
  for(let course in data){
    for(let student in data[course].students){
      if(data[course].students[student].email === email)
        courses.push(data[course]);
    }
  }
  return courses;
}
/* GET users listing. */
router.get('/dashboard', function(req, res, next) {
  const email = req.query.email;
  if(!email){ 
    res.status(422).send("Email is missing.") 
    return;
  }

  console.log(email)
  res.json(getTheCoursesByStudent(email));
});

module.exports = router;
