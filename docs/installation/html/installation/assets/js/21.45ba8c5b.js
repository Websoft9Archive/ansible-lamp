(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{403:function(t,e,a){"use strict";a.r(e);var h=a(54),s=Object(h.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"chanzhi-禅知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chanzhi-禅知"}},[t._v("#")]),t._v(" Chanzhi（禅知）")]),t._v(" "),a("p",[t._v("本文档可供使用了 "),a("strong",[t._v("Chanzhi 镜像")]),t._v(" 用户参考，也可以供准备在 "),a("strong",[t._v("LAMP 镜像")]),t._v(" 上自行部署 Chanzhi 参考。")]),t._v(" "),a("p",[t._v("蝉知门户系统（chanzhiEPS）是一款开源免费的企业门户系统，企业建站系统，CMS系统。它专为企业营销设计，功能专业全面，内置了文章发布、会员管理、论坛评论、产品展示、在线销售、客服跟踪等功能。以ZPL协议发布，真开源，真免费。注重SEO，注重营销，支持移动设备。界面简洁大方，使用简单方便，功能专业强大。")]),t._v(" "),a("h2",{attrs:{id:"准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),a("p",[t._v("在开始 Chanzhi 的安装部署之前，建议完成如下事情：")]),t._v(" "),a("ul",[a("li",[t._v("本地浏览器访问："),a("em",[t._v("http://公网ip/9panel")]),t._v(" ，快速了解镜像的使用")]),t._v(" "),a("li",[t._v("查看镜像环境参数，包括："),a("strong",[t._v("目录路径、版本、数据库、虚拟主机配置文件等")]),t._v(" （"),a("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/stack-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("马上查看"),a("OutboundLink")],1),t._v("）")])]),t._v(" "),a("h2",{attrs:{id:"chanzhi-安装到服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chanzhi-安装到服务器"}},[t._v("#")]),t._v(" Chanzhi 安装到服务器")]),t._v(" "),a("p",[a("strong",[t._v("如果你使用的是 "),a("em",[t._v("Chanzhi 镜像")]),t._v("，本节请忽略，直接阅读下一节 【Chanzhi 初始化安装向导】")])]),t._v(" "),a("p",[t._v("如果你使用的是 LAMP 镜像，请先将 Chanzhi 安装到服务器，操作步骤如下：")]),t._v(" "),a("ol",[a("li",[t._v("通过域名控制台完成解析域名（增加一个A记录指向服务器IP），并测试是否成功")]),t._v(" "),a("li",[t._v("通过 "),a("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/admin-mysql.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("phpMyAdmin 登录 MySQL"),a("OutboundLink")],1),t._v("，为 Chanzhi 系统增加一个数据库，假如名称为："),a("code",[t._v("chanzhieps")])]),t._v(" "),a("li",[t._v("到 Chanzhi 官方"),a("a",{attrs:{href:"https://www.chanzhi.org/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载源码"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("参考"),a("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/solution-deployment.html#%E5%AE%89%E8%A3%85%E7%AC%AC%E4%BA%8C%E4%B8%AA%E7%BD%91%E7%AB%99",target:"_blank",rel:"noopener noreferrer"}},[t._v("《如何在 LAMP 上增加网站》"),a("OutboundLink")],1),t._v(" ，将 chanzhi 安装到服务器的 "),a("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LAMP"),a("OutboundLink")],1),t._v(" 环境中")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"chanzhi-初始化安装向导"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chanzhi-初始化安装向导"}},[t._v("#")]),t._v(" Chanzhi 初始化安装向导")]),t._v(" "),a("ol",[a("li",[t._v("本地浏览器访问："),a("em",[t._v("http://域名")]),t._v(" 或 "),a("em",[t._v("http://公网IP")]),t._v(" 进入安装向导（首选域名访问方式）\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/chanzhieps/chanzhi-startpage-websoft9.png",alt:""}})]),t._v(" "),a("li",[t._v("通过许可协议，安装进入环境检测步骤，点击“下一步”\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/chanzhieps/chanzhi-check-websoft9.png",alt:""}})]),t._v(" "),a("li",[t._v("进入配置数据库界面（"),a("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/stack-accounts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看数据库账号密码"),a("OutboundLink")],1),t._v("）\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/chanzhieps/chanzhi-dbconf-websoft9.png",alt:""}})]),t._v(" "),a("li",[t._v("设置管理员账号，牢记之，点击“保存”\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/chanzhieps/chanzhi-adminconf-websoft9.png",alt:""}})]),t._v(" "),a("li",[t._v("系统安装成功，进入后台登录\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/chanzhieps/chanzhi-login-websoft9.png",alt:""}})]),t._v(" "),a("li",[t._v("开始体验后台\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/chanzhieps/chanzhi-backend-websoft9.png",alt:""}})]),t._v(" "),a("li",[t._v("禅知的功能使用，请参考"),a("a",{attrs:{href:"http://www.chanzhi.org/book/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方教程"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")])])}),[],!1,null,null,null);e.default=s.exports}}]);