# FAQ

#### What is the default character set?
UTF-8

#### Apache working mode has event, prefork, worker, etc. Which is LAMP default?
Prefork

#### What is the Apache vhost configuration file?
The Apache vhost configuration file is the function for Apache to manage multiple applications. It's path is: */etc/httpd/conf.d/vhost.conf*.
There have `<VirtualHost *:80> ...</VirtualHost>` , each segment is corresponding to a application

#### How to modify the path of example application?

Example application's path is: */data/wwwroot/www.example.com*, you can modify it by [Apache vhost configuration file](/stack-components.md#apache)

#### Does the LAMP support deploying multiple applications?

Yes, add new application, you should add new VirtualHost segment in the file [Apache vhost configuration file](/stack-components.md#apache) for it

#### If there is no domain name, can I deploy LAMP?

Yes, visit LAMP by *http://Internet IP*

#### What is the password for the database root user?

The password is stored in the server related file: `/credentials/password.txt`

#### Is there a web-base GUI database management tools?

Yes, phpMyAdmin is on it, visit by *http://Internet IP/phpmyadmin*

#### How to disable phpMyAdmin access?

Edit the  [phpMyAdmin configuration file](/stack-components.md#phpmyadmin), replace `Require all granted` with `Require ip 192.160.1.0`, then restart Apache service

#### Is it possible to modify the code source path?

Yes, modify it by [Apache vhost configuration file](/stack-components.md#apache)

#### How to delete 9Panel?

Please delete all files in 9Panel */data/apps/9panel* and keep an empty 9Panel folder

#### Do I need to change the owner(group) for the files which I upload by SFTP?

No, you don't need to change them because LAMP Image have change it automaticly

#### How can I reset my php.ini to return to the initial?
Download the [php.ini](https://github.com/Websoft9/ansible-lamp/blob/master/roles/php/templates/php.ini) from Websoft9 LAMP project on Github, upload to Server and cover /ect/php.ini

#### How to disable Apache Test Page?

Using the **#** to disable all the content in the file: */etc/httpd/conf.d/welcome.conf*, then restart service

#### How to change the permissions of filesytem?

Change owner(group) or permissions like below:

```shell
chown -R apache.apache /data/wwwroot
find /data/wwwroot -type d -exec chmod 750 {} \;
find /data/wwwroot -type f -exec chmod 640 {} \;
```

#### How to set HTTP redirect to HTTPS automatically?

Copy these Rewrite rules in the file *.htacesss* on your root directory of application:
```
RewriteEngine on
RewriteBase /
RewriteCond %{SERVER_PORT} !^443$
RewriteRule ^.*$ https://%{SERVER_NAME}%{REQUEST_URI} [L,R]
```
#### Which Apache modules are installed by default by LAMP?

Use command `apachectl -M` to list all modules

#### Which PHP modules are installed by default by LAMP?

Use command `php -m` to list all modules

#### How to enable or disable Apache module?

e.g  assume you want to manage Rewrite module, please edit [Apache module configuration file](/stack-components.md#apache), find the item *LoadModule rewrite_module modules/mod_rewrite.so*, use **#** to disable it

#### How to disable IP access my application?

Refer to the docs [Apache configuration](https://support.websoft9.com/docs/linux/webs-apache.html#disable-ip-access)

#### Is there a domain name that can be accessed via http://public IP/mysite1?

Yes, refer to the docs [Deploy a PHP application](/lamp/solution-deployment.html#deploy-second-application)

#### What's the difference between Deployment and Installation?

- Deployment is a process of installing and configuring a sequence of software in sequence in a different order, which is a complex system engineering.  
- Installation is the process of starting the initial wizard after the application is prepared.  
- Installation is simpler than deployment. 

#### What's Cloud Platform?

Cloud platform refers to platform manufacturers that provide cloud computing services, such as: **Azure, AWS, Alibaba Cloud, HUAWEI CLOUD, Tencent Cloud**, etc.

#### What is the difference between Instance, Cloud Server, Virtual Machine, ECS, EC2, CVM, and VM?

No difference, just the terminology used by different manufacturers, actually cloud servers