const themeConfig = require('./config/theme/')

module.exports = {
  title: "dream",
  description: '人的梦想是永远都不会结束的。',
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/jquery-3.5.1.min.js"
    }],
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/snow.js"
    }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart', 'go-top'] 
}  