import $ from 'jquery';

const request = (url, type, data)=>{
  return new Promise((success, error)=>{
    $.ajax({
      url,
      type,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success,
      error
    });
  });
}

module.exports = {
  get: (url)=>{
    console.log('fetch', fetch);
    return fetch(url);
    //return $.get(url);
  },
  post: (url, data)=>{
    return request(url, 'POST', data);
  },
  delete: (url, data)=>{
    return request(url,'DELETE', data);
  },
  put: (url, data)=>{
    return request(url, 'PUT', data);
  }
}
