# 更多...

下面每一个方案，都经过实践证明行之有效，希望能够对你有帮助

## 域名绑定

当服务器上只有一个网站时，不做域名绑定也可以访问网站。但从安全和维护考量，**域名绑定**不可省却。

以示例网站为例，域名绑定操作步骤如下：

1. 确保域名解析已经生效  
2. 使用 WinSCP 等工具登录云服务器
3. 修改 [Apache虚拟机主机配置文件](/zh/stack-components.md#apache)，将其中的 **ServerName** 项的值修改为你的域名
   ```text
   <VirtualHost *:80>
   ServerName www.mydomain.com # 此处修改为你的域名
   DocumentRoot "/data/wwwroot/mysite2"
   ...
   ```
4. 保存配置文件，重启 [Apache 服务](/zh/admin-services.md#apache)


## 配置 Apache 使用不同端口访问网站

当服务有多个网站，但不想通过域名访问，可以配置 Apache 使用不同的端口访问不同的网站,步骤如下：

1. 确保在安全组中已放通相应端口
2. 使用 WinSCP 等工具登录云服务器
3. 修改 [Apache虚拟机主机配置文件](/zh/stack-components.md#apache)，修改虚拟主机 ** VirtualHost ** 端口号
   
   ```text
   <VirtualHost *:81>
    ServerName wordpress.example.com
    #ServerAlias example.com
    DocumentRoot "/data/wwwroot/web1"
    ErrorLog "logs/wordpress-error_log"
    CustomLog "logs/wordpress-access_log" common
    <Directory "/data/wwwroot/web1">
        Options Indexes FollowSymlinks
        AllowOverride All
        Require all granted
    </Directory>
   </VirtualHost>

   <VirtualHost *:82>
    ServerName wordpress.example.com
    #ServerAlias example.com
    DocumentRoot "/data/wwwroot/web2"
    ErrorLog "logs/wordpress-error_log"
    CustomLog "logs/wordpress-access_log" common
    <Directory "/data/wwwroot/web2">
        Options Indexes FollowSymlinks
        AllowOverride All
        Require all granted
    </Directory>
   </VirtualHost>
   
   ```

4. 保存配置文件，在 Apache 主配置文件 httpd.conf 中监听对应端口
   
   ```text
   #Listen 12.34.56.78:80
   Listen 80
   Listen 81
   Listen 82
  
   ```

5. 重启 [Apache 服务](/zh/admin-services.md#apache)


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

## Apache模块

安装模块之前，先查看当前已安装的所有模块，然后再决定是否安装，最后将已安装模块启用或停止。

### 查看

通过 `apachectl -M` 命令可以查看已经安装的所有Apache模块。  

### 安装

安装模块有yum/apt在线安装和apxs源码编译安装两种方式，其中在线安装非常简单：

#### 在线安装

例如：准备在CentOS上安装 `mod_ssl` 模块:

1. 搜索 mod_ssl 是否存在

   ```
   sudo yum search mod_ssl
   ============================= N/S matched: mod_ssl =============================
   mod_ssl.x86_64 : SSL/TLS module for the Apache HTTP Server
   ```

2. 搜索结果提示有一个 mod_ssl.x86_64 可用，接下来运行安装命令
   ```
   sudo yum install mod_ssl
   ```
3. 等待自动安装，直至安装完成

#### 源码编译安装

如果在线搜索找不到所需的 Module, 就需要通过源码编译安装的方式安装新的模块。主要步骤如下：

1. 下载 Apache 源码到 /opt 目录，并解压之
   ```
   cd /opt
   wget https://codeload.github.com/shivaas/mod_evasive/zip/master
   unzip master
   ```
2. 以安装 mod_evasive-master 模块为例，我们找到其所在的目录，然后运行编译命令, 重启Apache服务
   ```
   cd mod_evasive-master
   apxs -i -c -a mod_evasive24.c
   systemctl restart apache
   ```
3. 通过`apachectl` 命令查看，mod_evasive 已经启用
   ```
   apachectl -M | grep evasive
   evasive24_module (shared)

   ```

> 以上的源码编译安装方案来源于[此处](https://www.hugeserver.com/kb/install-enable-mod_evasive-apache-module-centos7/)

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

## PHP文件解析方式变更

LAMP 默认使用php-fpm服务来解析PHP文件，如果想用mod_php解析PHP文件，请参照下面步骤：

1. 使用 SFTP 工具修改 */etc/httpd/conf.d/php.conf* （如果该目录下有php.conf的备份文件，直接复制内容到php.conf）
```
#
# The following lines prevent .user.ini files from being viewed by Web clients.
#
<Files ".user.ini">
    <IfModule mod_authz_core.c>
        Require all denied
    </IfModule>
    <IfModule !mod_authz_core.c>
        Order allow,deny
        Deny from all
        Satisfy All
    </IfModule>
</Files>

#
# Allow php to handle Multiviews
#
AddType text/html .php

#
# Add index.php to the list of files that will be served as directory
# indexes.
#
DirectoryIndex index.php

# mod_php options
<IfModule  mod_php7.c>
    #
    # Cause the PHP interpreter to handle files with a .php extension.
    #
    <FilesMatch \.(php|phar)$>
        SetHandler application/x-httpd-php
    </FilesMatch>

    #
    # Uncomment the following lines to allow PHP to pretty-print .phps
    # files as PHP source code:
    #
    #<FilesMatch \.phps$>
    #    SetHandler application/x-httpd-php-source
    #</FilesMatch>

    #
    # Apache specific PHP configuration options
    # those can be override in each configured vhost
    #
    php_value session.save_handler "files"
    php_value session.save_path    "/var/lib/php/session"
    php_value soap.wsdl_cache_dir  "/var/lib/php/wsdlcache"

    #php_value opcache.file_cache   "/var/lib/php/opcache"
</IfModule>
```

2. 停止 [PHP-FPM 服务](/zh/admin-services.md#PHP-FPM)

3. 保存并重启 [Apache 服务](/zh/admin-services.md#apache)

## PHP版本变更

请参考 [《PHP版本管理专题》](https://support.websoft9.com/docs/linux/zh/lang-php.html#版本升级)

## PHP安装扩展

请参考 [《PHP扩展管理专题》](https://support.websoft9.com/docs/linux/zh/lang-php.html#扩展)
