# Laravel

The  laravel runtime environment (lamp) provided by websoft9,based on [lamp environment image](https://support.websoft9.com/docs/lamp),It can help you install and deploy quickly.

###Laravel Installation Principle

How to install laravel  based on lamp

>If you use the larravel runtime environment (lamp), you only need to understand the principle, and there is no need to install larave again.


1. Server deployment [lamp image]（ https://support.websoft9.com/docs/lamp )
2. Download the larevel package and upload it to the server directory: */data/wwwroot/laravel*
3. User Winscp connect to the server and edit the virtual host configuration file: */etc/httpd/vhost/vhost.conf* 
4. Set  DocumentRoot and directory path : *laravel/public*
 ~~~
   <VirtualHost *:80>
   DocumentRoot "/data/wwwroot/default/laravel/public"
    ...
   <Directory "/data/wwwroot/default/laravel/public">
   ...
   ~~~
5. Save and restart the service

###Update laravel program  

When laravel version is too low, you may want to download the latest official version of laravel to replace the internal version. The recommended steps are as follows:

1. Download and unzip larravel and replace the original directory after uploading
2. Run the command to modify the file permissions
~ ~
chown -R apache.apache /data/wwwroot/laravel
~ ~

>In the directory structure of the new version downloaded, the application root directory (such as public folder) should be consistent with the path (document root, directory) in the configuration file