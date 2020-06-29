# 安装网站

在 LAMP 环境上安装一个网站，也就是我们常说的增加一个虚拟主机。

宏观上看，只需两个步骤：**上传网站代码** + [**虚拟机主机配置文件**](/zh/stack-components.md#apache) **中增加 VirtualHost 配置段**

> VirtualHost 又称之为虚拟主机配置段，每个网站必定在 vhost.conf 中对应唯一的 VirtualHost。

## 准备

安装网站之前，请了解如下几个要点，做好准备工作

*  虚拟机主机配置文件：*/etc/httpd/vhost/vhost.conf* 
*  连接工具：使用 WinSCP 连接服务器，它包含文件管理、运行命令两方面功能
*  域名：若需要使用域名，请确保备案后的域名成功解析到服务器IP
*  数据库：网站安装向导过程中可能需要使用数据库，请使用 [phpMyAdmin 管理数据库](/zh/admin-mysql.md)

有一个宏观认知之后，我们开始部署网站

## 安装第一个网站

下面通过**替换示例网站**（LAMP 默认存在一个示例网站）的方式来教你安装你的第一个网站：

1. 使用 WinSCP 连接服务器
2. 删除示例网站 */data/wwwroot/www.example.com* 下的所有文件（保留目录）
3. 将本地电脑上的网站源码上传到示例目录下
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/winscp/winscp-uploadcodestoexample-websoft9.png)
4. 修改 *vhost.conf* 中已有 VirtualHost 配置段（[修改参考](/zh/solution-deployment.md#virtualhost)），实现绑定域名、修改网站目录名称等操作。
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/lamp/lamp-editvhostconf-websoft9.png)
   ::: warning
   如果不绑定域名、不修改网站目录名称，请跳过步骤4和5
   :::
5. 保存vhost.conf，然后在 WinSCP 中运行重启服务命令 或 云控制台重启服务器 ：
      ~~~
      # 重启Apache服务命令
      systemctl restart httpd
      ~~~
6. 本地浏览器访问：*http://域名* 或 *http://服务器公网IP* 即可访问您的网站

## 安装第二个网站

从安装第二个网站开始，需要在*vhost.conf* 中增加对应的虚拟主机配置段，具体如下

1. 使用 WinSCP 连接服务器，在 /data/wwwroot 下新建一个网站目录，假设命令为“mysite2”
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/lamp/lamp-createmysite2-websoft9.png)
2. 将本地网站源文件上传到：*/data/wwwroot/mysite2* 
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/lamp/lamp-uploadcodes-websoft9.png)
3. 编辑 vhost.conf 文件
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/lamp/lamp-editvhostconf-websoft9.png)

    根据是否通过域名访问，选择下面操作之一：

     * **有域名，通过 http://域名 访问网站**
     
     请将下面 VirtualHost 模板拷贝到 vhost.conf 中，并修改其中的ServerName, DocumentRoot, ErrorLog, CusomLog, Directory等项的值

       ```
       <VirtualHost *:80>
       ServerName www.mydomain.com
       # ServerAlias other.mydomain.com
       DocumentRoot "/data/wwwroot/mysite2"
       ErrorLog "/var/log/httpd/www.mydomain.com_error_apache.log"
       CustomLog "/var/log/httpd/www.mydomain.com_apache.log" common
       <Directory "/data/wwwroot/mysite2">
       #DirectoryIndex index.php index.html
       Options Indexes FollowSymlinks
       AllowOverride All
       Require all granted
       </Directory>
       </VirtualHost>
        ```

     * **没有域名，通过 http://IP/mysite2 访问网站**  
    
     请将下面 Alias 模板拷贝到 vhost.conf 中，并修改其中的 /path, Directory等项的值

      ```
      Alias /sitename /data/wwwroot/mysite2
      <Directory "/data/wwwroot/mysite2">
	  Options Indexes FollowSymlinks
	  AllowOverride All
	  Require all granted
	  </Directory>
      ```
4. 保存vhost.conf，然后在 WinSCP 中运行重启服务命令 或 云控制台重启服务器 ：
      ~~~
      # 重启Apache服务命令
      systemctl restart httpd
      ~~~
5. 根据有无域名，本地浏览器访问：http://域名 或 http://IP/sitename  访问你的网站。


## 安装第 N 个网站

安装第n个网站与安装第二个网站的操作步骤一模一样

最后我们温故而知新，总结 LAMP 安装网站步骤： 

1. 上传网站代码
2. 绑定域名（非必要）
3. 新增站点配置或修改示例站点配置
4. 增加网站对应的数据库（非必要）
5. 进入安装向导

## VirtualHost

VirtualHost 改动务必准确无误，任何错误的修改都会导致服务器上所有的网站不可访问

|  VirtualHost 项  |  作用说明  |  必要性 |
| --- | --- | --- |
|  ServerName  |  主域名   |  必须填写 |
|  ServerAlias  |   辅域名 |  可以不填或删除 |
|  DocumentRoot |  网站存放目录，同下  | 务必准确无误 |
|  Directory |  网站存放目录，同上  |  务必准确无误 |
|  ErrorLog  | 错误日志路径，系统会根据定义的路径产生相关日志文件   |  可以不填或删除 |
|  CustomLog  | 访问日志路径，系统会根据定义的路径产生相关日志文件  |  可以不填或删除 |

## 常见问题

#### 访问刚安装的网站，页面显示 “没有权限...” ？

运行一条修改文件权限的命令
~~~
chown -R apache.apache /data/wwwroot
~~~

#### 修改 vhost.conf 文件之后，Apache 服务无法启动？

一般是 VirtualHost 中虚拟主机的目录位置不正确导致

#### 新增网站不可访问，且导致其他网站都不可访问？

一般是 VirtualHost 中虚拟主机的目录位置不正确导致 Apache 无法启动

#### 打开新增的网站，显示404错误？

一般是网站目录下没有 index.php 或 index.html 等默认首页导致

#### 新增的网站，显示 500 Internal Server Error？

程序代码错误，需要查看程序的日志文件
