# Migrate application

Migrating an application is to move the **application data** to a new location and then configure it to ensure access after the move.

Migration is an operation that needs to be treated with caution. Before migration, you need to clearly understand the following points:

- **Moved application data objects**: website source files or database data files
- **Destination location**: transfer between server directories (local) or external server (external)

The combination of the migrated object and the destination location forms a variety of migration scenarios. The most common migration scenarios are detailed below:

## Migrate source code locally

Assume the folder name of your application is **mysite1** in the directory */data/wwwroot*, then you may migrate **mysite1** to the directory */data2/wwwroot*, let us define it this way:

   * **original folder**: */data/wwwroot/mysite1*    
   * **destination folder**: */data2/wwwroot/mysite1*

1. Use WinSCP to connect your Instance
2. Copy the original folder ***mysite1***  to the destination directory: */data2/wwwroot*
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/lamp/lamp-copysite1todata2-websoft9.png)
3. Modify the *DocumentRoot, Directory* items in the VirtualHost segment of **vhost.conf**
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/lamp/lamp-modifyvhostdata2-websoft9.png)
4. Save vhost.conf, and restart service
      ~~~
      # Restart Apache service
      systemctl restart httpd
      ~~~
5. Test the migration, then delete the **original folder**

## Migrate Database files locally

There is no special case, we do not recommend migrating database files to another directory on the Server. After all, major cloud platform's disks can be expanded.

If you want change the [Database files](/stack-components.md#mysql) locally, please refer the docs [ MySQL Documentation](https://support.websoft9.com/docs/mysql/solution-modifydatadir.html)

## Migrate /data to Data Disk 

The **/data** folder is on the system disk by default. When you need to transfer to the data disk, the steps are as follows:

1. Before you start the migration, please be sure to make a data backup
2. Prepare your data disk and attach it to your Cloud Server
3. Initialize the data disk
4. Create a temp folder on your Server, e.g. 
5. **Mount** data disk to the folder */temp*
6. Stop Apache and MySQL services
   ```shell
   systemctl stop httpd mysqld
   ```
7. Copy all files under */data* to */temp*
  > If the data is large, the cut or copy may fail
8. After the data transfer is completed, **umount** your data disk from */temp* and **Mount** it to */data* again
9. Start Apache and MySQL
   ```shell
   systemctl start httpd mysqld
   ```
10. Test it

> Initialize the data disk means you partition and format data disk, these operation are very complex, please refer to chapter of documentation [Using Cloud Server](https://support.websoft9.com/docs/faq/tech-instance.html)

## Migrate to another Instance

The migration of applications from one server (original Server) to another (destination Server) is a complex plan. The basic steps are as follows:

1. [Deploy LAMP](/stack-deployment.md) on the **destination Server**.
2. Download the application's source code from **original Server** to the local computer through WinSCP, and then upload them to **destination Server**.
3. Export the database from the **original Server** via phpMyAdmin and then import them to **destination server**.
4. Copy the contents of the **vhost.conf** from the **original Server** to the **vhost.conf** of **destination server** .
5. Save it, tehn restart the Apache service.
5. Resolve the domain to **destination Server** and wait for the domain resolution to take effect.
5. Test the availability by visiting the application through your domain name.
6. Publish the it.

> If there are multiple applications on a Server that need to be migrated, it is recommended to migrate amd test one by one.