var mongoose = require('mongoose');
var GroceryItem = require('./models/GroceryItem');

mongoose.connect('mongodb://darrius:password@ds061395.mlab.com:61395/hero', function(){
  console.log('Database connected!');
  //drop data
  //mongoose.connection.db.dropDatabase();
});
