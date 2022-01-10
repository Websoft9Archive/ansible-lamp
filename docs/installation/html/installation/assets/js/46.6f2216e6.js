(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{428:function(e,t,r){"use strict";r.r(t);var s=r(54),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"resourcespace"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#resourcespace"}},[e._v("#")]),e._v(" ResourceSpace")]),e._v(" "),r("p",[e._v("本文档可供使用了 "),r("strong",[e._v("ResourceSpace 镜像")]),e._v(" 用户参考，也可以供准备在 "),r("strong",[e._v("LAMP 镜像")]),e._v(" 上自行部署 ResourceSpace 参考。")]),e._v(" "),r("p",[e._v("ResourceSpace（resourcespace.com）是全球是优秀的开源数字资产管理系统（Digital Assets Management），使用PHP+MySQL开发，主要用于集中式、协作化的管理企业的图片、视频、音频和文档等数字资产，完成基于Web，易于搜索，支持数百种文件格式的预览和相互转换，支持视频和音频文件的在线播放。是企业的设计部门和设计公司的效率工具。"),r("a",{attrs:{href:"https://www.resourcespace.com/trial",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方演示地址"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"准备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[e._v("#")]),e._v(" 准备")]),e._v(" "),r("p",[e._v("在开始 ResourceSpace 的安装部署之前，建议完成如下事情：")]),e._v(" "),r("ul",[r("li",[e._v("浏览器访问："),r("em",[e._v("http://公网ip/9panel")]),e._v(" ，快速了解镜像的使用")]),e._v(" "),r("li",[e._v("查看镜像环境参数，包括："),r("strong",[e._v("目录路径、版本、数据库、虚拟主机配置文件等")]),e._v(" （"),r("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/stack-components.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("马上查看"),r("OutboundLink")],1),e._v("）")])]),e._v(" "),r("h2",{attrs:{id:"resourcespace-安装到服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#resourcespace-安装到服务器"}},[e._v("#")]),e._v(" ResourceSpace 安装到服务器")]),e._v(" "),r("p",[r("strong",[e._v("如果你使用的是 "),r("em",[e._v("ResourceSpace 镜像")]),e._v("，本节请忽略，直接阅读【ResourceSpace 初始化安装向导】")])]),e._v(" "),r("p",[e._v("如果你使用的是 LAMP 镜像，请先将 ResourceSpace 安装到服务器，操作步骤如下：")]),e._v(" "),r("ol",[r("li",[e._v("通过域名控制台完成解析域名（增加一个A记录指向服务器IP），并测试是否成功")]),e._v(" "),r("li",[e._v("通过 "),r("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/admin-mysql.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("phpMyAdmin 登录 MySQL"),r("OutboundLink")],1),e._v("，为 ResourceSpace 系统增加一个数据库，假如名称为："),r("code",[e._v("resourceSpace")])]),e._v(" "),r("li",[e._v("到 ResourceSpace 官方"),r("a",{attrs:{href:"https://www.resourcespace.com/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载源码"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("参考"),r("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/solution-deployment.html#%E5%AE%89%E8%A3%85%E7%AC%AC%E4%BA%8C%E4%B8%AA%E7%BD%91%E7%AB%99",target:"_blank",rel:"noopener noreferrer"}},[e._v("《如何在 LAMP 上增加网站》"),r("OutboundLink")],1),e._v(" ，将 ResourceSpace 安装到服务器的 "),r("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LAMP"),r("OutboundLink")],1),e._v(" 环境中")])]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"resourcespace-初始化安装向导"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#resourcespace-初始化安装向导"}},[e._v("#")]),e._v(" ResourceSpace 初始化安装向导")]),e._v(" "),r("ol",[r("li",[e._v("本地浏览器访问："),r("em",[e._v("http://域名")]),e._v(" 或 "),r("em",[e._v("http://公网IP")]),e._v(" 进入安装向导（首选域名访问方式）\n"),r("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/resourcespace/resourcespace-installcheck-websoft9.png",alt:""}})]),e._v(" "),r("li",[e._v("选择语言，系统会自动检查是否符合安装条件")]),e._v(" "),r("li",[e._v("填写数据库配置信息（"),r("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/stack-accounts.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("查看数据库账号密码"),r("OutboundLink")],1),e._v("）\n"),r("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/resourcespace/resourcespace-installconfig-websoft9.png",alt:""}})]),e._v(" "),r("li",[e._v("点击“开始安装”")]),e._v(" "),r("li",[e._v("安装完成后会看到反馈\n"),r("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/resourcespace/resourcespace-installsuccessful-websoft9.png",alt:""}})]),e._v(" "),r("li",[e._v("访问后台地址：http://公网IP地址/login.php\n"),r("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/resourcespace/resourcespace-login-websoft9.png",alt:""}}),e._v("*")]),e._v(" "),r("li",[e._v("登录后，开始体验后台\n"),r("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/resourcespace/resourcespace-panel-websoft9.png",alt:""}})])]),e._v(" "),r("h2",{attrs:{id:"常见问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[e._v("#")]),e._v(" 常见问题")]),e._v(" "),r("h4",{attrs:{id:"resourcespace-默认是否可以编辑-office-文档"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#resourcespace-默认是否可以编辑-office-文档"}},[e._v("#")]),e._v(" ResourceSpace 默认是否可以编辑 Office 文档？")]),e._v(" "),r("p",[e._v("不可以")])])}),[],!1,null,null,null);t.default=o.exports}}]);