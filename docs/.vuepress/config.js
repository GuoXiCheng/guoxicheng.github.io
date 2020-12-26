const themeConfig = require('./config/theme/')

module.exports = {
  title: "午后南杂",
  description: 'Enjoy when you can, and endure when you must.',
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart', 'go-top'] 
}  