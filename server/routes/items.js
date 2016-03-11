var items = [
  {name: 'Ice Cream'},
  {name: 'Waffles'},
  {name: 'Candy', purchased: true},
  {name: 'Snarks'}
];

module.exports = function(app){
  app.route('/api/items')
  .get(function(req,res){
    res.send(items);
  })
  .post(function(req,res){
    var item = req.body();
    items.push(item);
  });
}
