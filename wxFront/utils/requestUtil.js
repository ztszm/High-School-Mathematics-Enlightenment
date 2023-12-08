const BASE_URL = "http://localhost:8088/";
const post = function(serviceName,param,callback){
  wx.request({
    url: BASE_URL+serviceName,
    method:'POST',
    header: {
      'content-type': 'application/json',
    },
    date:JSON.stringify(param),
    success:function(rep){
      callback(rep.data)
    }
  })
};

module.exports = {
  post: post,
}