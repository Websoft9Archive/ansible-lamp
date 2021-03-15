# More

Each of the following solutions has been proven to be effective and we hope to be helpful to you.

## Domain binding

The precondition for binding a domain is that LAMP can accessed by domain name.

Nonetheless, from the perspective of server security and subsequent maintenance considerations, the **Domain Binding** step cannot be omitted.

LAMP domain name binding steps:

1. Connect your Cloud Server
2. Modify [Apache vhost configuration file](/stack-components.md#apache), change the **ServerName**'s value to your domain name
   ```text
   <VirtualHost *:80>
   ServerName www.mydomain.com # modify it to your domain name
   DocumentRoot "/data/wwwroot/mysite2"
   ...
   ```
3. Save it and restart [Apache Service](/admin-services.md#apache)


## Use Rewrite

Three steps to use rewrite for your application:

1. Check the [Apache vhost configuration file](/stack-components.md#apache) to make sure that the Rewrite Module is enabled
   > Rewrite was enabled by default on LAMP
2. Add the *AllowOverride All* to your VirtualHost in the file of [Apache vhost configuration file](/stack-components.md#apache)
3. Add the **rewrite rules** in the root directory of your application

## Apache module

Before installing a module, check all the currently installed modules, then decide whether to install them, and finally enable or stop the installed modules.

### View

You can view all the installed Apache modules through the command 'apachectl - M'.  

### Installation

There are two ways to install the module: package installation and apxs source code compilation installation：

#### Online installation

For example: preparing to install ` mod on CentOS_ SSL ` module:

1. Search mod_ssl is exist

   ```
   sudo yum search mod_ssl
   ============================= N/S matched: mod_ssl =============================
   mod_ssl.x86_64 : SSL/TLS module for the Apache HTTP Server
   ```

2. Search results indicate that there is a mod_ ssl.x86_ 64 available, then run the installation command
   ```
   sudo yum install mod_ssl
   ```
3. Wait for automatic installation until installation is complete

#### Source code compilation and installation by apxs

If you can't find the required module by online search, you need to install the new module by compiling and installing the source code. The main steps are as follows:

1. Download the Apache source code to the /opt directory and unzip it
   ```
   cd /opt
   wget https://codeload.github.com/shivaas/mod_evasive/zip/master
   unzip master
   ```
2. To install mod_evasive as an example, we find its directory, run the compile command, and restart the Apache service
   ```
   cd mod_evasive-master
   apxs -i -c -a mod_evasive24.c
   systemctl restart apache
   ```
3. View through the command 'apachectl', mod_evasive is enabled
   ```
   apachectl -M | grep evasive
   evasive24_module (shared)

   ```

> The above source code compilation and installation scheme comes from[Here](https://www.hugeserver.com/kb/install-enable-mod_evasive-apache-module-centos7/)

## Rest MySQL *root* password

1. Connect to your Cloud Server by SSH
2. Run the below command
   ```
   sudo git clone https://github.com/Websoft9/linux.git; cd linux/Mysql_ResetPasswd_Script;sudo sh reset_mysql_password.sh
   ```

## Modify the php.ini

When you want to modify The PHP File Upload Limit, Max Execution Time, Memory Limit...for example:

1. Use SFTP to modify the */etc/php.ini* 
```
# File upload limit
post_max_size = 16M
upload_max_filesize = 16M

# Max Execution Time
max_execution_time = 90

# Memory Limit
memory_limit – Minimum: 256M
```
2. Save it and restart [Apache Service](/admin-services.md#apache)

## PHP Version Upgrade

Refert to the docs *[PHP version upgrade](https://support.websoft9.com/docs/linux/zh/lang-php.html#verion-upgrade)*

## PHP Install Module

Refert to the docs *[PHP Modules installation](https://support.websoft9.com/docs/linux/lang-php.html#install-module)*