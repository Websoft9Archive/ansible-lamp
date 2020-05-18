# 更多...

下面每一个方案，都经过实践证明行之有效，希望能够对你有帮助

## 域名绑定

当服务器上只有一个网站时，不做域名绑定也可以访问网站。但从安全和维护考量，**域名绑定**不可省却。

以示例网站为例，域名绑定操作步骤如下：

1. 确保域名解析已经生效  
2. 使用 WinSCP 等工具登录云服务器
2. 修改 [Apache虚拟机主机配置文件](/zh/stack-components.md#apache)，将其中的 **ServerName** 项的值修改为你的域名
   ```text
   <VirtualHost *:80>
   ServerName www.mydomain.com # 此处修改为你的域名
   DocumentRoot "/data/wwwroot/mysite2"
   ...
   ```
3. 保存配置文件，重启 [Apache 服务](/zh/admin-services.md#apache)


## 使用 Apache 伪静态

使用 Apache 伪静态有三个步骤：

1.  打开 [Apache模块配置文件](/zh/stack-components.md#apache)，检查 Rewrite 模块是否启用（LAMP 环境默认已经开启 Rewirte）
2.  保证 [Apache 虚拟主机配置文件](/zh/stack-components.md#apache)中 VirtualHost 配置段中增加 AllowOverride All
3.  给需要使用伪静态的网站的根目录中增加.htaccess文件，并在其中配置伪静态规则


## 设置Apache并发连接数

有大量访问的时候速度很慢，或403错误后反复刷新才能访问等问题，可能是性能造成的。  

一方面，需要提高服务器配置，另外一方面需要通过修改Apache并发参数以提升性能：

1. 登录服务器后运行命令`httpd -V`，查询当前Apache的NPM工作模式
   ```
   httpd -V
   AH00558: httpd: Could not reliably determine the server's fully qualified domain name
   Server version: Apache/2.4.6 (CentOS)
   Server built:   Aug  8 2019 11:41:18
   Server's Module Magic Number: 20120211:24
   Server loaded:  APR 1.4.8, APR-UTIL 1.5.2
   Compiled using: APR 1.4.8, APR-UTIL 1.5.2
   Architecture:   64-bit
   Server MPM:     prefork
     threaded:     no
       forked:     yes (variable process count)
   ```
2. 修改 */etc/httpd/conf/httpd.conf*，根据服务器配置的承载能力修改并发相关参数。比如：MaxClients 设置为2000，就可以处理2000个并发请求
   ```
   <IfModule prefork.c>
      StartServers        5
      MinSpareServers     5
      MaxSpareServers     10
      MaxClients          256
      MaxRequestsPerChild 3000
   </IfModule>
   ```

## 重置 MySQL 密码

1. 远程连接到服务器，
2. 运行一下命令，按提示输入新密码即可
   ```
   sudo git clone https://github.com/Websoft9/linux.git; cd linux/Mysql_ResetPasswd_Script;sudo sh reset_mysql_password.sh
   ```

## 修改 php.ini

在使用PHP网站的时候，你可能会碰到需要修改：上传文件大小、内存限制等参数。这个时候，就需要通过修改 `php.ini` 来实现

1. 使用 SFTP 工具修改 */etc/php.ini* 
```
# File upload limit
post_max_size = 16M
upload_max_filesize = 16M

# Max Execution Time
max_execution_time = 90

# Memory Limit
memory_limit – Minimum: 256M
```
2. 保存并重启 [Apache 服务](/zh/admin-services.md#apache)

## PHP版本变更

请参考 [《PHP版本管理专题》](https://support.websoft9.com/docs/linux/zh/lang-php.html#版本升级)

## PHP安装扩展

请参考 [《PHP扩展管理专题》](https://support.websoft9.com/docs/linux/zh/lang-php.html#扩展)
