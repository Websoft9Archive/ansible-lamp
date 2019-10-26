# phpwind

本文档可供使用了 **phpwind 镜像** 用户参考，也可以供准备在 **LAMP 镜像** 上自行部署 phpwind 参考。

phpwind（phpwind.com）是全球知名的开源PHP论坛软件之一。使用了标准的论坛结构和模式，充分根据用户的使用习惯而设计，简单易用。支持MySQL、PostgreSQL、SQLite三种数据库。经过10几年的发展，拥有完善的开发者生态，有数百万站点使用，主题、插件资源非常丰富。

## 准备

在开始 phpwind 的安装部署之前，建议完成如下事情：

* 浏览器访问：*http://公网ip/9panel* ，快速了解镜像的使用
* 查看镜像环境参数，包括：**目录路径、版本、数据库、虚拟主机配置文件等** （[马上查看](https://support.websoft9.com/docs/lamp/zh/stack-components.html)）

## phpwind 安装到服务器

**如果你使用的是 *phpwind 镜像*，本节请忽略，直接阅读下一节 【phpwind 初始化安装向导】**

如果你使用的是 LAMP 镜像，请先将 phpwind 安装到服务器，操作步骤如下：

1. 通过域名控制台完成解析域名（增加一个A记录指向服务器IP），并测试是否成功
2. 通过 [phpMyAdmin 登录 MySQL](https://support.websoft9.com/docs/lamp/zh/admin-mysql.html)，为 phpwind 系统增加一个数据库，假如名称为：`phpwind`
3. 到 phpwind 官方[下载源码](https://bbs.aliyun.com/read/566749.html)
2. 参考[《如何在 LAMP 上增加网站》](https://support.websoft9.com/docs/lamp/zh/solution-deployment.html#安装第二个网站) ，将 phpwind 安装到服务器的 [LAMP](https://support.websoft9.com/docs/lamp/zh/) 环境中

---

## phpwind 初始化安装向导

1. 本地浏览器访问：*http://域名* 或 *http://公网IP* 进入安装向导（首选域名访问方式）
 ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/phpwind/phpwind-installaccept-websoft9.png)
2. 接受协议之后系统进入环境检测步骤
 ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/phpwind/phpwind-installcheck-websoft9.png)
3. 进入配置数据库和设置管理员账号界面（[查看数据库账号密码](https://support.websoft9.com/docs/lamp/zh/stack-accounts.html)）
 ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/phpwind/phpwind-installdbadmin-websoft9.png)
4. 填写完成后，点击“创建数据”，系统进入安装中 ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/phpwind/phpwind-installing-websoft9.png)
5. 安装完成后，根据提示进入系统后台，体验系统的完整功能

## 常见问题

#### PHPWind如何发送邮件\
PHPWind可以通过设置SMTP来实现发送邮件的功能，具体设置步骤如下：
  
1. 以管理员身份登录到网站后台，点击**全局**，切换到**电子邮件**页面；  
2. 邮件发送选择开启；  
3. 输入SMTP服务器的地址，注意：前面的ssl://一定不能够省略 
4. 输入SMTP服务器的端口号；
5. 输入发件人的邮箱地址，必须和**验证用户名**的邮箱地址保持一致；
6. SMTP用户身份验证选择开启；  
7. 输入提供SMTP服务的邮箱地址；
8. 输入该邮箱地址的SMTP服务授权码或密码；
9. 提交；
  ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/phpwind/phpwind-smtp-1-websoft9.png)  
10. 切换到**电子邮件检测**页面，,输入测试用的收件人邮箱地址，点击提交，若收到了测试邮件，则证明SMTP设置正确，phpWind已经发送邮件了。
  ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/phpwind/phpwind-smtp-2-websoft9.png) 