const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    createProxyMiddleware(
      '/api1',
      {
      target: 'http://localhost:5000', // 转发给谁
      changeOrigin: true,  // 默认是false, 去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
      pathRewrite: {'^/api1': ''}
     }
    ),
    createProxyMiddleware(
      '/api2',
      {
      target: 'http://localhost:5001', // 转发给谁
      changeOrigin: true,  // 默认是false, 去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
      pathRewrite: {'^/api2': ''}
     }
    )
  )
}