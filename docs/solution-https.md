# SSL/HTTPS

LAMP deployment package has installed the SSL module of Apache and open Certificate Authority **[Let's Encrypt](https://letsencrypt.org/)** for you configure the HTTPS quickly and conveniently.

> In addition to the vhost configuration file, HTTPS settings do not need to modify any files in Apache

## Simple Steps

If you want to use a free certificate, just run the one command `certbot` on your instance to start the HTTPS deployment.

If you have applied for a commercial certificate, complete the HTTPS configuration in just three steps:

1. Upload your certificate to the directory of your instance: */data/cert* 
2. Edit the vhost configuration file: */etc/httpd/conf.d/vhost.conf* 
3. Insert the **HTTPS template** into `<VirtualHost *:443>--</VirtualHost>` and modify certificate path
   ``` text
   #-----HTTPS template start------------
   <VirtualHost *:443>
    ServerName  mysite1.yourdomain.com
    DocumentRoot "/data/wwwroot/mysite1"
    #ErrorLog "logs/mysite1.yourdomain.com-error_log"
    #CustomLog "logs/mysite1.yourdomain.com-access_log" common
    <Directory "/data/wwwroot/mysite1">
    Options Indexes FollowSymlinks
    AllowOverride All
    Require all granted
    </Directory>
    SSLEngine on
    SSLCertificateFile  /data/cert/mysite1.yourdomain.com.crt
    SSLCertificateKeyFile  /data/cert/mysite1.yourdomain.com.key
    </VirtualHost>
   #-----HTTPS template end------------
   ```
4. Save file and [Restart Apache service](/admin-services.md)

## Special Guide

For details on configuring HTTPS pre-conditions, HTTPS configuration segment templates, precautions, detailed steps, and troubleshooting, refer to the [HTTPS Special Guide](https://support.websoft9.com/docs/faq/tech-https.html#apache) provided by Websoft9 