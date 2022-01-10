(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{425:function(t,o,s){"use strict";s.r(o);var e=s(54),r=Object(e.a)({},(function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"pydio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pydio"}},[t._v("#")]),t._v(" Pydio")]),t._v(" "),s("p",[t._v("本文档可供使用了 "),s("strong",[t._v("Pydio 镜像")]),t._v(" 用户参考，也可以供准备在 "),s("strong",[t._v("LAMP 镜像")]),t._v(" 上自行部署 Pydio 参考。")]),t._v(" "),s("p",[t._v("Pydio（pydio.com）是一个功能强大在线文件管理系统（ECM），采用PHP+MySQL开发，用于构建自托管的企业网盘和云存储系统，支持多用户的文档协作、分享、设备同步。功能全面，包括：文档管理、用户管理、权限管理，甚至还有能够恢复删除的文件等功能，开源版支持的设备APP非常全面，包括：IOS、Android、Windows、OSX、Linux五个客户端同步APP。")]),t._v(" "),s("h2",{attrs:{id:"pydio演示-截图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pydio演示-截图"}},[t._v("#")]),t._v(" Pydio演示（截图）")]),t._v(" "),s("p",[t._v("Pydio官网提供了演示环境，您可以直接访问演示地址体验")]),t._v(" "),s("ul",[s("li",[t._v("演示地址：https://pydio.typeform.com/to/AUvlCj")])]),t._v(" "),s("blockquote",[s("p",[t._v("免责说明：此处仅提供KodCloud官方的演示地址，不保证与Websoft9镜像功能完全一致，若演示过程中若需要填写个人资料、提交调研问题、获取Cookie等，这些都是官方行为，由此产生的安全问题与我司无关。若您在演示中进行了付费，即表明您愿意接受官方提供的付费服务，由此产生的可能存在的商业纠纷与我们司无关。")])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("以下为Pydio的主要功能截图")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("登录后默认界面\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/pydio/pydio-adminui-websoft9.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("多用户管理\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/pydio/pydio-addusers-websoft9.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("私人空间与公共空间\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/pydio/pydio-workspace-websoft9.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("插件扩展\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/pydio/pydio-plugins-websoft9.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("一键在线升级\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/pydio/pydio-upgrade-websoft9.png",alt:""}})])])]),t._v(" "),s("h2",{attrs:{id:"准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),s("p",[t._v("在开始 Pydio 的安装部署之前，建议完成如下事情：")]),t._v(" "),s("ul",[s("li",[t._v("浏览器访问："),s("em",[t._v("http://公网ip/9panel")]),t._v(" ，快速了解镜像的使用")]),t._v(" "),s("li",[t._v("查看镜像环境参数，包括："),s("strong",[t._v("目录路径、版本、数据库、虚拟主机配置文件等")]),t._v(" （"),s("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/stack-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("马上查看"),s("OutboundLink")],1),t._v("）")])]),t._v(" "),s("h2",{attrs:{id:"pydio-安装到服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pydio-安装到服务器"}},[t._v("#")]),t._v(" Pydio 安装到服务器")]),t._v(" "),s("p",[s("strong",[t._v("如果你使用的是 "),s("em",[t._v("Pydio 镜像")]),t._v("，本节请忽略，直接阅读下一节 【Pydio 初始化安装向导】")])]),t._v(" "),s("p",[t._v("如果你使用的是 LAMP 镜像，请先将 Pydio 安装到服务器，操作步骤如下：")]),t._v(" "),s("ol",[s("li",[t._v("通过域名控制台完成解析域名（增加一个A记录指向服务器IP），并测试是否成功")]),t._v(" "),s("li",[t._v("通过 "),s("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/admin-mysql.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("phpMyAdmin 登录 MySQL"),s("OutboundLink")],1),t._v("，为 Pydio 系统增加一个数据库，假如名称为："),s("code",[t._v("pydio")])]),t._v(" "),s("li",[t._v("到 Pydio 官方"),s("a",{attrs:{href:"https://pydio.com/en/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载源码"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("参考"),s("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/solution-deployment.html#%E5%AE%89%E8%A3%85%E7%AC%AC%E4%BA%8C%E4%B8%AA%E7%BD%91%E7%AB%99",target:"_blank",rel:"noopener noreferrer"}},[t._v("《如何在 LAMP 上增加网站》"),s("OutboundLink")],1),t._v(" ，将 Pydio 安装到服务器的 "),s("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LAMP"),s("OutboundLink")],1),t._v(" 环境中")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"pydio-初始化安装向导"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pydio-初始化安装向导"}},[t._v("#")]),t._v(" Pydio 初始化安装向导")]),t._v(" "),s("ol",[s("li",[t._v("本地浏览器访问："),s("em",[t._v("http://域名")]),t._v(" 或 "),s("em",[t._v("http://公网IP")]),t._v(" 进入安装向导（首选域名访问方式）")]),t._v(" "),s("li",[t._v('选择语言，点击"Start Wizard"\n'),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/pydio/pydio-install001-websoft9.png",alt:""}})]),t._v(" "),s("li",[t._v("设置管理员账号，进入下一步\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/pydio/pydio-install002-websoft9.png",alt:""}})]),t._v(" "),s("li",[t._v("选择Mysql数据库，填写数据库信息（"),s("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/stack-accounts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看数据库账号密码"),s("OutboundLink")],1),t._v("），点击“test db connection”进入下一步\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/pydio/pydio-install003-websoft9.png",alt:""}})]),t._v(" "),s("li",[t._v("进入高级设置，设置默认语言为“简体中文”，点击“Install Pydio”，开始安装\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/pydio/pydio-install004-websoft9.png",alt:""}})]),t._v(" "),s("li",[t._v("安装完成后，登录后台\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/pydio/pydio-login-websoft9.png",alt:""}})]),t._v(" "),s("li",[t._v("后台界面\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/pydio/pydio-bk-websoft9.png",alt:""}})])]),t._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("h4",{attrs:{id:"pydio-是否提供移动端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pydio-是否提供移动端"}},[t._v("#")]),t._v(" Pydio 是否提供移动端")]),t._v(" "),s("p",[t._v("提供了移动端，"),s("a",{attrs:{href:"https://pydio.com/en/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"pydio-默认是否可以编辑-office-文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pydio-默认是否可以编辑-office-文档"}},[t._v("#")]),t._v(" Pydio 默认是否可以编辑 Office 文档？")]),t._v(" "),s("p",[t._v("不可以，需要自行配置文档预览服务器")])])}),[],!1,null,null,null);o.default=r.exports}}]);