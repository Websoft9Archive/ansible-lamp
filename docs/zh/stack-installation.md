# 初始化安装

在云服务器上部署 LAMP 预装包之后，请参考下面的步骤快速入门。

## 准备

1. 在云控制台获取您的 **服务器公网IP地址** 
2. 在云控制台安全组中，检查 **Inbound（入）规则** 下的 **TCP:80** 端口是否开启
3. 若想用域名访问 LAMP，请先到 **域名控制台** 完成一个域名解析

## 测试可用性

1. 使用本地 Chrome 或 Firefox 浏览器访问网址：*http://Internet IP/9panel*, 就进入引导页面9Panel
   ![9panel](https://libs.websoft9.com/Websoft9/DocsPicture/zh/9panel/9panelmain-websoft9.png)

2. 通过 9Panel 可以快速了解镜像基本情况，管理数据库，找到帮助文档，寻求人工支持

## 登录数据库

LAMP 预装包中内置 MySQL 及可视化数据库管理工具 `phpMyadmin` ，[登录MySQL](/zh/admin-mysql.md) 管理用户和数据库

![9panel](https://libs.websoft9.com/Websoft9/DocsPicture/zh/9panel/9panel-mysql-websoft9.png)

## 安装网站

LAMP 可以用来部署多个 PHP 网站，[马上开始吧](/zh/solution-deployment.md)

## 常见问题

#### 浏览器打开 http://公网IP地址/9panel，无法访问（白屏没有结果）？

您的服务器对应的安全组80端口没有开启（入规则），导致浏览器无法访问到服务器的任何内容

#### 9Panel 是什么？

[9Panel](https://github.com/Websoft9/9panel)是 Websoft9 公司镜像的开源组件之一，支持中英文显示，部分镜像内置了9Panel. 它是集合数据库管理、文档和支持服务的引导页面，是镜像快速入门的向导工具。基于Bootstrap+vue.js开发，几乎不会占用系统资源，也不会对系统文件进行任何修改。
