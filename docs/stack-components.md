# Parameters

The LAMP deployment package contains a sequence software (referred to as "components") required for LAMP to run. The important information such as the component name, installation directory path, configuration file path, port, version, etc. are listed below.

## Path

### Directories for Application

Suggested directory: */data/wwwroot*  
Example application directory: */data/wwwroot/www.example.com*  

> The URL: *http://Internet IP* will access the example application

### Apache

Apache vhost configuration file: */etc/httpd/conf.d/vhost.conf*    
Apache main configuration file: */etc/httpd/conf/httpd.conf*   
Apache logs file: */var/log/httpd*  
Apache module configuration file: */etc/httpd/conf.modules.d/00-base.conf*    

**vhost.conf** includes one [VirtualHost](https://support.websoft9.com/docs/linux/webs-apache.html#vhost) configuration items whitch matched the **Example application**
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

> How many websites you need, you should add the same number of VirtualHost to **vhost.conf**

### PHP

PHP configuration file: */etc/php.ini*  
PHP Modules configurations directory: */etc/php.d*
```
# Installed PHP Modules
Core  date  libxml  openssl  pcre  zlib  filter  hash  Reflection  SPL  session  standard  apache2handler  
bcmath  bz2  calendar  ctype  curl  dom  mbstring  fileinfo  ftp  gd  gettext  gmp  iconv  
imap  intl  json  ldap  exif  mcrypt  mysqlnd  odbc  PDO  Phar  posix  recode  shmop  
SimpleXML  snmp  soap  sockets  sqlite3  sysvmsg  sysvsem  sysvshm  tokenizer  xml  xmlwriter  xsl  mysqli  
pdo_dblib  pdo_mysql  PDO_ODBC  pdo_sqlite  wddx  xmlreader  xmlrpc  igbinary  imagick  zip  redis  Zend OPcache  
```

### MYSQL

MySQL installation directory: */usr/local/mysql*  
MySQL data directory: */data/mysql*  
MySQL configuration file: */etc/my.cnf*    
MySQL Web Management URL: *http://Internet IP/9panel*, get credential from [Username and Password](/stack-accounts.md)

### phpMyAdmin

phpMyAdmin configuration file: */etc/httpd/conf.d/phpmyAdmin.conf*

### Redis

Redis configuration file: */etc/redis.conf*  
Redis data directory: */var/lib/redis*  
Redis logs file: */var/log/redis/redis.log*


## Ports

You can control(open or shut down) ports by **[Security Group Setting](https://support.websoft9.com/docs/faq/zh/tech-instance.html)** of your Cloud Server whether the port can be accessed from Internet.

These ports should be opened for this application:

| Name | Number | Use |  Necessity |
| --- | --- | --- | --- |
| MySQL | 3306 | Remote connect MySQL | Optional |
| HTTP | 80 | HTTP requests for LAMP | Required |
| HTTPS | 443 | HTTPS requests LAMP | Optional |

## Version

You can see the version from product page of Marketplace. However, after being deployed to your server, the components will be automatically updated, resulting in a certain change in the version number. Therefore, the exact version number should be viewed by running the command on the server:

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