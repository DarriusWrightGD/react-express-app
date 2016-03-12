var items = [
  {name: 'Ice Cream'},
  {name: 'Waffles'},
  {name: 'Candy', purchased: true},
  {name: 'Snarks'}
];

function sendOk(res){
  res.sendStatus(200);
}

module.exports = function(app){
  app.route('/api/items')
  .get(function(req,res){
    res.send(items);
  })
  .post(function(req,res){
    var item = req.body;
    items.push(item);
    sendOk(res);
  })
  .delete(function(req,res){
    var item = req.body;
    items = items.filter((i)=>{
      return i.name != item.name;
    });
    sendOk(res);
  })
  .put(function(req,res){
    var item = req.body;

    items.forEach(function(currentItem,i){
      if(currentItem.name === item.name){
        items[i] = item;
      }
    });
    sendOk(res);
  });
}
