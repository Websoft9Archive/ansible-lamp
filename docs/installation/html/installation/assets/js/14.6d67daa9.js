(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{396:function(t,a,s){"use strict";s.r(a);var e=s(54),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mantisbt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mantisbt"}},[t._v("#")]),t._v(" MantisBT")]),t._v(" "),s("h1",{attrs:{id:"mantisbt-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mantisbt-2"}},[t._v("#")]),t._v(" MantisBT")]),t._v(" "),s("p",[t._v("本文档可供使用了 "),s("strong",[t._v("MantisBT 镜像")]),t._v(" 用户参考，也可以供准备在 "),s("strong",[t._v("LAMP 镜像")]),t._v(" 上自行部署 MantisBT 参考。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://mantisbt.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("MantisBT"),s("OutboundLink")],1),t._v(" 是一个基于PHP技术的轻量级的开源问题（缺陷）跟踪系统，具有项目管理及问题跟踪功能，实现了简单性和功能性之间的微妙平衡，简单易用，易安装，适团队协作使用。")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://mantisbt.org/demo.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方演示"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),s("p",[t._v("在开始 MantisBT 的安装部署之前，建议完成如下事情：")]),t._v(" "),s("ul",[s("li",[t._v("浏览器访问："),s("em",[t._v("http://公网ip/9panel")]),t._v(" ，快速了解镜像的使用")]),t._v(" "),s("li",[t._v("查看镜像环境参数，包括："),s("strong",[t._v("目录路径、版本、数据库、虚拟主机配置文件等")]),t._v(" （"),s("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/stack-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("马上查看"),s("OutboundLink")],1),t._v("）")])]),t._v(" "),s("h2",{attrs:{id:"mantisbt-安装到服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mantisbt-安装到服务器"}},[t._v("#")]),t._v(" MantisBT 安装到服务器")]),t._v(" "),s("p",[s("strong",[t._v("如果你使用的是 "),s("em",[t._v("MantisBT 镜像")]),t._v("，本节请忽略，直接阅读下一节 【MantisBT 初始化安装向导】")])]),t._v(" "),s("p",[t._v("如果你使用的是 LAMP 镜像，请先将 MantisBT 安装到服务器，操作步骤如下：")]),t._v(" "),s("ol",[s("li",[t._v("通过域名控制台完成解析域名（增加一个A记录指向服务器IP），并测试是否成功")]),t._v(" "),s("li",[t._v("通过 "),s("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/admin-mysql.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("phpMyAdmin 登录 MySQL"),s("OutboundLink")],1),t._v("，为 MantisBT 系统增加一个数据库，假如名称为："),s("code",[t._v("MantisBT")])]),t._v(" "),s("li",[t._v("到 MantisBT 官方"),s("a",{attrs:{href:"https://www.vtiger.com/open-source-crm",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载源码"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("参考"),s("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/solution-deployment.html#%E5%AE%89%E8%A3%85%E7%AC%AC%E4%BA%8C%E4%B8%AA%E7%BD%91%E7%AB%99",target:"_blank",rel:"noopener noreferrer"}},[t._v("《如何在 LAMP 上增加网站》"),s("OutboundLink")],1),t._v(" ，将 MantisBT 安装到服务器的 "),s("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LAMP"),s("OutboundLink")],1),t._v(" 环境中")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"mantisbt-初始化安装向导"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mantisbt-初始化安装向导"}},[t._v("#")]),t._v(" MantisBT 初始化安装向导")]),t._v(" "),s("ol",[s("li",[t._v("本地浏览器访问："),s("em",[t._v("http://域名")]),t._v(" 或 "),s("em",[t._v("http://公网IP")]),t._v(" 进入安装向导（首选域名访问方式）")]),t._v(" "),s("li",[t._v("系统自动完成许可协议、环境检测之后，进入配置数据库界面（"),s("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/stack-accounts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看数据库账号密码"),s("OutboundLink")],1),t._v("）。填写数据库信息后，点击“Install/Upgrade Database”，开始安装\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/mantisbt/mantisbt-install001-websoft9.png",alt:""}})]),t._v(" "),s("li",[t._v("系统安装成功，系统提示，点击“Continue”进入下一步\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/mantisbt/mantisbt-install002-websoft.png",alt:""}})]),t._v(" "),s("li",[t._v("进入后台登录（Mantis的默认管理员的用户名为administrator密码为root。）\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/mantisbt/mantisbt-login-websoft9.png",alt:""}}),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/mantisbt/mantisbt-loginpw-websoft9.png",alt:""}})]),t._v(" "),s("li",[t._v("开始体验后台（系统默认会建议您修改管理员密码）\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/mantisbt/mantisbt-backend-websoft9.png",alt:""}})])]),t._v(" "),s("blockquote",[s("p",[t._v("需要了解更多 MantisBT 的使用，请参考官方文档："),s("a",{attrs:{href:"http://www.mantisbt.org/documentation.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("MantisBT Documentation"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("h4",{attrs:{id:"浏览器打开ip地址-无法访问-mantisbt-白屏没有结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器打开ip地址-无法访问-mantisbt-白屏没有结果"}},[t._v("#")]),t._v(" 浏览器打开IP地址，无法访问 MantisBT（白屏没有结果）？")]),t._v(" "),s("p",[t._v("您的服务器对应的安全组80端口没有开启（入规则），导致浏览器无法访问到服务器的任何内容")]),t._v(" "),s("h4",{attrs:{id:"本部署包采用的哪个数据库来存储-mantisbt-数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本部署包采用的哪个数据库来存储-mantisbt-数据"}},[t._v("#")]),t._v(" 本部署包采用的哪个数据库来存储 MantisBT 数据？")]),t._v(" "),s("p",[t._v("部署包内置 MySQL")]),t._v(" "),s("h4",{attrs:{id:"是否可以采用云厂商提供的-rds-来存储-mantisbt-数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#是否可以采用云厂商提供的-rds-来存储-mantisbt-数据"}},[t._v("#")]),t._v(" 是否可以采用云厂商提供的 RDS 来存储 MantisBT 数据？")]),t._v(" "),s("p",[t._v("可以")]),t._v(" "),s("h4",{attrs:{id:"mantisbt邮件配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mantisbt邮件配置"}},[t._v("#")]),t._v(" mantisbt邮件配置")]),t._v(" "),s("p",[t._v("下面以163邮箱为例进行配置说明")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("使用 WinSCP 连接服务器")])]),t._v(" "),s("li",[s("p",[t._v("编辑配置文件："),s("em",[t._v("/data/wwwroot/default/mantisb/config_defaults_inc.php")])])]),t._v(" "),s("li",[s("p",[t._v("找到以下参数并修改为如下所示(其中第2，3项修改为用户自己的邮箱地址和密码)：\n"),s("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/mantisbt/mantisbt-smtp-websoft9.png",alt:""}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\t    $g_enable_email_notification = ON ;  \n \t$g_phpMailer_method = PHPMAILER_METHOD_SMTP - SMTP; \n \t$g_smtp_host = smtp.163.com;  \n \t$g_smtp_username = yourname@163.com;  \n \t$g_smtp_password = yourpassword;  \n \t$g_smtp_connection_mode = ssl  \n \t$g_smtp_port = 465;  \n \t$g_webmaster_email = 'yourname@163.com';  \n \t$g_from_email = 'yourname@163.com';  \n \t$g_return_path_email = 'yourname@163.com';   \n")])])])]),t._v(" "),s("li",[s("p",[t._v("运行修改权限命令")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("chown -R apache: /data/wwwroot\n")])])])]),t._v(" "),s("li",[s("p",[t._v("重启httpd服务")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("systemctl restart httpd\n")])])])]),t._v(" "),s("li",[s("p",[t._v("进入MantisBT，通过注册账号或修改密码的方式验证邮件是否可以发送")])])]),t._v(" "),s("blockquote",[s("p",[t._v("实践论证，MantisBT不支持免费版QQ邮箱，但支持企业版QQ邮箱下")])])])}),[],!1,null,null,null);a.default=r.exports}}]);