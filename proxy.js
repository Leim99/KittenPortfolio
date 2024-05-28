const proxy = {};
proxy["/api"] = {
  target: "https://staff-api.hzyxshop.com/",
  // target: "http://192.168.20.194:15001/",
  ws: true, // 如果要代理 websockets，配置这个参数
  secure: false, // 如果是https接口，需要配置这个参数
  changeOrigin: true, // 是否跨域
  pathRewrite: {
    '^/api': '/'
  }
};

module.exports = proxy;
