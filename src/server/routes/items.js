var GroceryItem = require('./../models/GroceryItem');

function sendOk(res){
  res.sendStatus(200);
}

module.exports = function(app){
  app.route('/api/items')
  .get(function(req,res){
    GroceryItem.find(function(error, items){
      res.send(items);
    });
  })
  .post(function(req,res){
    var item = req.body;
    var groceryItem = new GroceryItem(item);
    groceryItem.save(function(error,data){
      sendOk(res);
    });
  });

  app.route('/api/items/:id')
  .delete(function(req,res){
    GroceryItem.find({
      _id: req.params.id
    }).remove().exec();
    sendOk(res)
  })
  .put(function(req,res){
    GroceryItem.findOne({
      _id: req.params.id
    }, function(error,doc){
      for(var key in req.body){
        doc[key] = req.body[key];
      };
      doc.save();
      sendOk(res);
    });
  });
}
