# 故障处理

故障处理主要通过日志文件进行分析，从某种程度上，处理故障就是解读日志文件。

服务器相关故障的诊断和解决，与云平台密切相关，请参考[云平台文档](https://support.websoft9.com/docs/faq/zh/tech-instance.html)

我们收集使用 LAMP 过程中最常见的故障，供您参考：

#### 网站显示重定向错误？

检查网站根目录下的 *.htaccess* 文件，分析其中的重定向规则，找到其中的死循环。

#### 数据库服务无法启动

数据库服务无法启动最常见的问题包括：磁盘空间不足，内存不足，配置文件错误。  
建议先通过命令进行排查  

```shell
# 查看磁盘空间
df -lh

# 查看内存使用
free -lh
```

#### 数据库日志文件太大，导致磁盘空间不足？

默认安装，mysql会自动开启binlog，binlog是一个二进制格式的文件，用于记录用户对数据库**更新的****SQL语句****信息**，例如更改数据库表和更改内容的SQL语句都会记录到binlog里。

binlog主要用于出现没有备份的情况下，恢复数据库。但binlog会占用较大空间，长期不清理会让剩余磁盘空间为0，从而影响数据库或服务器无法启动

如果对自己的备份有信心，不需要binlog功能，参考如下步骤关闭之：

1. 编辑 [MySQL 配置文件](/zh/stack-components.md#mysql)，注释掉 binlog 日志
  ~~~
  #log-bin=mysql-bin  
  ~~~
2. 重启mysql
  ~~~
  systemctl restart mysqld
  ~~~

#### 重启 Apache 服务显示 *No spaces...*

出现此信息的时候，重启服务是成功的。

解决方案:

```
echo "fs.inotify.max_user_watches=262144" >> /etc/sysctl.conf 

sysctl -p
```

#### `httpd -t` 报错 [so:warn] [pid 14645] AH01574: module ssl_module is already loaded

检查 /etc/httpd/conf.modules.d/00-base.conf 和 /etc/httpd/conf.modules.d/00-ssl.conf 文件，注释其中一个mod_ssl

