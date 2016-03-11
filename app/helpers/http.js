import $ from 'jquery';

module.exports = {
  get: (url)=>{
    return new Promise(function(success, error){
      $.ajax({
        url,
        dataType:'json',
        success,
        error
      })
    });
  },
  post: (url, data)=>{
    return new Promise((success, error)=>{
      $.ajax({
        url,
        dataType:'json',
        success,
        error
      })
    })
  }
}
