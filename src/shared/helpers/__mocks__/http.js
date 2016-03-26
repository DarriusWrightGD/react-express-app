//var exports = jest.genMockFromModule('./../restHelper.js');

exports.get = (url)=>{
  var success = new Promise((resolve)=>{
    return new Promise(()=> {
      return {
        json: ()=> {
          return []
        }
      }
    })
  });

  return success;
};
