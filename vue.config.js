module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch'); //prefetch 삭제
  },
  devServer: {
    proxy: 'http://localhost:7078'
  }
}