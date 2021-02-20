var express = require('express');
var router = express.Router();
const order = require('../sql/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  order.find({},(err,data)=>{
    if(err){
      console.log(err)
    }
    console.log(data)
    res.render('order', {
      index:3,
      data:data
    });
  })
  
});


//user   删除操作
router.get("/delete", function (req, res, next) {
  //get来的数据在req.query.id
  // const id = req.query.id;
  console.log(req.query);

  user.deleteOne({ _id: req.query._id }, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.redirect("/order");
  });
});

module.exports = router;

