var exports = jest.genMockFromModule('./../restHelper.js');

exports.get.mockImplementation((a)=>{
  var sucess = new Promise(function(resolve){
    return new Promise(function(){
      {
        json: ()=>{
          return []
        }
      }
    })
  })

  return success;
});

module.exports = exports;
