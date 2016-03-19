import fetch from 'isomorphic-fetch';

const request = (url, method, body)=>{
  let headers= new Headers();
  headers.append('Content-Type', 'application/json');
  fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
    cache: 'default'
  });
}

module.exports = {
  get: (url)=>{
    return fetch(url);
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
