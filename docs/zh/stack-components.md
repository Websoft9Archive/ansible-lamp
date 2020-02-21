# 参数

LAMP 预装包包含 LAMP 运行所需一序列支撑软件（简称为“组件”），下面列出主要组件名称、安装路径、配置文件地址、端口、版本等重要的信息。

## 路径

### 网站目录

根目录： *LAMP 环境中，你的网站代码存放位置是没有限制的，因此没有根目录的说法*  
网站存放目录（建议）： */data/wwwroot*  
示例网站目录： */data/wwwroot/www.example.com*  

> 通过 *http://公网IP地址* 访问的就是示例网站 

### Apache

Apache 虚拟主机配置文件：*/etc/httpd/conf.d/vhost.conf*  
Apache 主配置文件： */etc/httpd/conf/httpd.conf*  
Apache 日志文件： */var/log/httpd*  
Apache 模块配置文件： */etc/httpd/conf.modules.d/00-base.conf*

**vhost.conf** 默认存在一个 [VirtualHost（虚拟主机）](https://support.websoft9.com/docs/linux/zh/webs-apache.html#虚拟主机) 配置项，对应的就是 **示例网站**
```
<VirtualHost *:80>
ServerName www.mydomain.com
ServerAlias other.mydomain.com
DocumentRoot "/data/wwwroot/www.example.com"
ErrorLog "/var/log/httpd/www.mydomain.com_error_apache.log"
CustomLog "/var/log/httpd/www.mydomain.com_apache.log" common
<Directory "/data/wwwroot/www.example.com">
Options Indexes FollowSymlinks
AllowOverride All
Require all granted
</Directory>
</VirtualHost>
```

> 有多少个网站，就需要在 vhost.conf 中增加同等数量的 VirtualHost 配置项

### PHP

PHP 配置文件： */etc/php.ini*  
PHP Modules 配置文件目录： */etc/php.d*
```
# 默认已安装的 PHP Modules
Core  date  libxml  openssl  pcre  zlib  filter  hash  Reflection  SPL  session  standard  apache2handler  
bcmath  bz2  calendar  ctype  curl  dom  mbstring  fileinfo  ftp  gd  gettext  gmp  iconv  
imap  intl  json  ldap  exif  mcrypt  mysqlnd  odbc  PDO  Phar  posix  recode  shmop  
SimpleXML  snmp  soap  sockets  sqlite3  sysvmsg  sysvsem  sysvshm  tokenizer  xml  xmlwriter  xsl  mysqli  
pdo_dblib  pdo_mysql  PDO_ODBC  pdo_sqlite  wddx  xmlreader  xmlrpc  igbinary  imagick  zip  redis  Zend OPcache  
```

### MYSQL

MySQL 安装路径: */usr/local/mysql*  
MySQL 数据文件 */data/mysql*  
MySQL 配置文件: */etc/my.cnf*    
MySQL 可视化管理地址: *http://服务器公网IP/phpmyadmin* 用户名和密码请见 [账号密码](https://support.websoft9.com/docs/lamp/zh/stack-accounts.html) 章节。

### phpMyAdmin

phpMyAdmin 安装路径: */data/apps/phpmyadmin*  
phpMyAdmin 配置文件: */data/apps/phpmyadmin/config.inc.php*   
phpMyAdmin 虚拟主机配置文件: */etc/httpd/conf.d/phpMyAdmin.conf*   

### Redis

Redis 配置文件： */etc/redis.conf*  
Redis 数据目录： */var/lib/redis*  
Redis 日志文件： */var/log/redis/redis.log*

## 端口号

在云服务器中，通过 **[安全组设置](https://support.websoft9.com/docs/faq/zh/tech-instance.html)** 来控制（开启或关闭）端口是否可以被外部访问。 

本环境建议开启的端口如下：

| 名称 | 端口号 | 用途 |  必要性 |
| --- | --- | --- | --- |
| HTTP | 80 | 通过 HTTP 访问网站 | 必须 |
| HTTPS | 443 | 通过 HTTP 访问网站 | 可选 |
| MySQL | 3306 | 本地电脑远程连接服务器上的 MySQL | 可选 |

## 版本号

组件版本号可以通过云市场商品页面查看。但部署到您的服务器之后，组件会自动进行更新导致版本号有一定的变化，故精准的版本号请通过在服务器上运行命令查看：

```shell
# Linux Version
lsb_release -a

# PHP Version
php -v

# List Installed PHP Modules
php -m

# Apache version on Centos
httpd -v

# Apache version on Ubuntu
apache2 -v

# List Installed Apache Modules
apachectl -M

# MySQL version
mysql -V

# Redis version
redis-server -v
```
