const organizationPage = require('./crane/organization-portrait/index')
module.exports = {
  // i18n 配置
  name: 'zhonghe',
  // 屏幕默认尺寸, 所有页面都继承该值，页面可单独设置
  size: [1920, 1080],
  requestSettings: {
    baseURL: '',
  },
  modules: {
    '@byzanteam/vis-components': {
      version: 'latest',
      style: {
        type: 'normal',
        path: 'dist/index.css',
      },
    },
    '@byzanteam/graphite': {
      version: 'latest',
    },
    '@byzanteam/carbonium': {
      version: 'latest',
      style: {
        type: 'normal',
        path: 'dist/carbonium.css',
      },
    },
    'element-ui': {
      version: 'latest',
      style: {
        type: 'normal',
        path: 'lib/theme-chalk/index.css',
      },
    },
    'iview': {
      version: 'latest',
      style: {
        type: 'normal',
        path: 'dist/styles/iview.css',
      },
    },
  },
  // 页面
  pages: [
    organizationPage,
  ],
}
