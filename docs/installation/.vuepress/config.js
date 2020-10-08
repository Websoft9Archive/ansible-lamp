module.exports = {

//针对不同项目，需要修改的参数有：base,title,description,repo以及nav,sidebar 文件夹下的导航js文件

base: '/docs/lamp/installation/',
dest: 'html/installation',

head: [
  ['link', { rel: 'icon', href: '/favcon.ico' }]
],

//vuepress多语言，区别于主题多语言
locales: {
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'PHP Apps Installations',
      description: 'You can get the Installation of opensource applications & CMS based on LAMP from this documentation powered by Websoft9.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'PHP 开源应用安装示例（集）',
      description: '本文档由Websoft9提供，汇总了数十个基于LAMP环境的主流开源PHP网站应用安装教程'
    }
},

themeConfig: {
	 
	//Basic configuration
	displayAllHeaders: false, // 默认值：false
  activeHeaderLinks: true, // 默认值：true
  displayAllHeaders: false, // 默认值：false
  sidebar: 'auto', // 默认值：false

  //Github 
  repo: 'Websoft9/ansible-lamp',
  editLinks: true,
  docsDir: 'docs/installation',
  docsBranch: 'main',

  //主题多语言
  locales: {
    '/': {
      label: 'English',
      selectText: 'Languages',
      editLinkText: 'Edit this page on GitHub',
      lastUpdated: 'Last Updated',
      serviceWorker: {
         updatePopup: {
         message: "New content is available.",
         buttonText: "Refresh"
          }
        },
  
    //top-menu
    nav: require('./nav/en'),
    //left-menu
    sidebar:require('./sidebar/en'),
  },  
  
  '/zh/': {
    label: '中文',
    selectText: '语言',
    editLinkText: '在Github上编辑',
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: {
        message: "此文档有可用的更新",
        buttonText: "刷新"
      }
    },
  
    //页眉
    nav: require('./nav/zh'),
    //侧边栏导航
    sidebar: require('./sidebar/zh'),
  
  },
  
},   
}
}