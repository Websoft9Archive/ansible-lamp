# SSL/HTTPS

网站完成域名绑定且可以通过HTTP访问之后，方可设置HTTPS。

LAMP预装包，已安装Web服务器 SSL 模块和公共免费证书方案 [Let's Encrypt](https://letsencrypt.org/) ，并完成预配置。

> 除了虚拟主机配置文件之外，HTTPS设置无需修改Nginx任何文件

## 简易步骤

### 免申请证书

如果你想使用免费证书，只需在服务器中运行一条命令`certbot`就可以启动证书部署

```
#启动https配置
certbot

#设置证书自动更新（如果不进行此项设置，则需要每三个月手工更新证书一次）
echo "0 0,12 * * * root python -c 'import random; import time; time.sleep(random.random() * 3600)' && certbot renew" | sudo tee -a /etc/crontab > /dev/null
```

### 自申请证书

如果你已经申请了商业证书，只需三个步骤，即可完成HTTPS配置

1. 将申请的证书、 证书链文件和秘钥文件上传到 */data/cert* 目录
2. 打开虚拟主机配置文件：*/etc/httpd/conf.d/vhost.conf* ，插入如下的 **HTTPS 配置项** 到配置文件中
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
3. 修改其中的 ServerName, DocumentRoot, ErrorLog, CusomLog, Directory等项的值（[修改参考](/zh/solution-deployment.md#virtualhost)）
4. 保存 vhost.conf，然后在 WinSCP 中运行重启服务命令 或 云控制台重启服务器 ：
    ~~~
    # 重启Apache服务命令
    systemctl restart httpd
    ~~~

## 专题指南

若参考上面的**简易步骤**仍无法成功设置HTTPS访问，请阅读由Websoft9提供的 [《HTTPS 专题指南》](https://support.websoft9.com/docs/faq/zh/tech-https.html#apache)

HTTPS专题指南方案包括：HTTPS前置条件、HTTPS 配置段模板、注意事项、详细步骤以及故障诊断等具体方案。
