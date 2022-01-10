(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{413:function(t,e,o){"use strict";o.r(e);var f=o(54),s=Object(f.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"dzzoffice"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dzzoffice"}},[t._v("#")]),t._v(" DzzOffice")]),t._v(" "),o("p",[t._v("本文档可供使用了 "),o("strong",[t._v("DzzOffice 镜像")]),t._v(" 用户参考，也可以供准备在 "),o("strong",[t._v("LAMP 镜像")]),t._v(" 上自行部署 DzzOffice 参考。")]),t._v(" "),o("p",[t._v("DzzOffice是一套开源办公套件，适用于企业、团队搭建自己的 类似“Google企业应用套件”、“微软Office365”的企业协同办公平台。"),o("a",{attrs:{href:"http://demo.dzzoffice.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方演示"),o("OutboundLink")],1)]),t._v(" "),o("h2",{attrs:{id:"准备"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),o("p",[t._v("在开始 DzzOffice 的安装部署之前，建议完成如下事情：")]),t._v(" "),o("ul",[o("li",[t._v("浏览器访问："),o("em",[t._v("http://公网ip/9panel")]),t._v(" ，快速了解镜像的使用")]),t._v(" "),o("li",[t._v("查看镜像环境参数，包括："),o("strong",[t._v("目录路径、版本、数据库、虚拟主机配置文件等")]),t._v(" （"),o("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/stack-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("马上查看"),o("OutboundLink")],1),t._v("）")])]),t._v(" "),o("h2",{attrs:{id:"dzzoffice-安装到服务器"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dzzoffice-安装到服务器"}},[t._v("#")]),t._v(" DzzOffice 安装到服务器")]),t._v(" "),o("p",[o("strong",[t._v("如果你使用的是 "),o("em",[t._v("DzzOffice 镜像")]),t._v("，本节请忽略，直接阅读下一节 【DzzOffice 初始化安装向导】")])]),t._v(" "),o("p",[t._v("如果你使用的是 LAMP 镜像，请先将 DzzOffice 安装到服务器，操作步骤如下：")]),t._v(" "),o("ol",[o("li",[t._v("通过域名控制台完成解析域名（增加一个A记录指向服务器IP），并测试是否成功")]),t._v(" "),o("li",[t._v("通过 "),o("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/admin-mysql.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("phpMyAdmin 登录 MySQL"),o("OutboundLink")],1),t._v("，为 DzzOffice 系统增加一个数据库，假如名称为："),o("code",[t._v("dzzoffice")])]),t._v(" "),o("li",[t._v("到 DzzOffice 官方"),o("a",{attrs:{href:"https://github.com/zyx0814/dzzoffice/releases/",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载源码"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("参考"),o("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/solution-deployment.html#%E5%AE%89%E8%A3%85%E7%AC%AC%E4%BA%8C%E4%B8%AA%E7%BD%91%E7%AB%99",target:"_blank",rel:"noopener noreferrer"}},[t._v("《如何在 LAMP 上增加网站》"),o("OutboundLink")],1),t._v(" ，将 DzzOffice 安装到服务器的 "),o("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LAMP"),o("OutboundLink")],1),t._v(" 环境中")])]),t._v(" "),o("hr"),t._v(" "),o("h2",{attrs:{id:"dzzoffice-初始化安装向导"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dzzoffice-初始化安装向导"}},[t._v("#")]),t._v(" DzzOffice 初始化安装向导")]),t._v(" "),o("ol",[o("li",[t._v("本地浏览器访问："),o("em",[t._v("http://域名")]),t._v(" 或 "),o("em",[t._v("http://公网IP")]),t._v(" 进入安装向导（首选域名访问方式）\n"),o("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/dzzoffice/dzzoffice-install-1-websoft9.png",alt:"dzzoffice-install-websoft9"}})]),t._v(" "),o("li",[t._v("确保环境检查和权限检查通过；\n"),o("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/dzzoffice/dzzoffice-install-2-websoft9.png",alt:"dzzoffice-install-websoft9"}}),t._v(" "),o("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/dzzoffice/dzzoffice-install-3-websoft9.png",alt:"dzzoffice-install-websoft9"}})]),t._v(" "),o("li",[t._v("输入数据库连接信息（"),o("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/stack-accounts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看数据库账号密码"),o("OutboundLink")],1),t._v("）\n"),o("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/dzzoffice/dzzoffice-install-4-websoft9.png",alt:"dzzoffice-install-websoft9"}})]),t._v(" "),o("li",[t._v("输入管理员账户名和密码，点击下一步即可完成安装；\n"),o("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/dzzoffice/dzzoffice-install-5-websoft9.png",alt:"dzzoffice-install-websoft9"}})])]),t._v(" "),o("h2",{attrs:{id:"常见问题"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),o("h4",{attrs:{id:"dzzoffice-如何安装应用"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dzzoffice-如何安装应用"}},[t._v("#")]),t._v(" DzzOffice 如何安装应用？")]),t._v(" "),o("ol",[o("li",[t._v("管理 -》 应用市场 -》 在应用市场内找到对应应用，单击一键安装；")]),t._v(" "),o("li",[t._v("管理 -》 应用市场 -》 已安装 中 点击启用按钮 启用此应用")])]),t._v(" "),o("h4",{attrs:{id:"dzzoffice-如何实现在线预览和编辑"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dzzoffice-如何实现在线预览和编辑"}},[t._v("#")]),t._v(" DzzOffice 如何实现在线预览和编辑")]),t._v(" "),o("ol",[o("li",[t._v("管理 -》 应用市场 -》 在应用市场内找到 “onlyoffice” 应用 点击 一键安装，安装完后，你可以通过http://ip:9002地址来测试onlyoffice是否安装成功，成功后进入下一步设置")]),t._v(" "),o("li",[t._v("管理 -》 应用市场 -》 已安装 中 点击设置按钮 进入设置页面\n"),o("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/dzzoffice/dzzoffice-preview-1-websoft9.png",alt:"dzzoffice-install-websoft9"}}),t._v(" "),o("blockquote",[o("p",[t._v("这里填写您的文档服务器的地址：如文档服务器地址为 http://192.168.0.2 文档服务器端口为：9002 那么 这里的地址应该是：\nhttp://192.168.0.2:9002。")])])]),t._v(" "),o("li",[t._v("管理 -》 应用市场 -》 已安装 中 点击启用按钮 启用此应用")]),t._v(" "),o("li",[t._v("网盘内点击文档类文件 就可以使用 onlyoffice 来编辑文档了")])]),t._v(" "),o("blockquote",[o("p",[t._v("文档服务器可以自行搭建，或者使用 websoft9 提供的 "),o("a",{attrs:{href:"https://apps.websoft9.com/onlyoffice",target:"_blank",rel:"noopener noreferrer"}},[t._v("onlyoffice 文档部署包"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);