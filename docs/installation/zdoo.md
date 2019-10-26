# Zdoo

This chapter is used for users who have subscribed **Zdoo image** or **LAMP image**.

[Zdoo](http://www.zdoo.org/), aka Ranzhi/Ranger, is a collaborative system for small/medium-sized organizations. It has five main features, including CRM, OA, CASH, TEAM and App Navigation. It is a more integrated and simplified solution, compared to other systems. [Demo](http://demo.zdoo.org/)
![](http://libs.websoft9.com/Websoft9/DocsPicture/en/zdoo/zdooui-websoft9.jpg)

## Installation Preparation

Before your installation, suggest you complete follows:

* Get the **Internet IP** of your Server on your Cloud Platform
* Visit *http://Internet IP/9panel* to quik start
* Know more about PHP runtime, includes:**installation directory, version, database, vhost** ([view it](https://support.websoft9.com/docs/lamp/stack-components.html))

## Zdoo deployment

**If you are using the Websoft9 Zdoo Image, go to the [Zdoo Installation Wizard](/zdoo.md#zdoo-installation-wizard) directly**

If you are using LAMP, please deploy Zdoo to your Server as follows:

1. Log in your Domain console and complete a Domain resolution, make sure it successful
2. Using [phpMyAdmin to log in MySQL](https://support.websoft9.com/docs/lamp/admin-mysql.html), create a database named`zdoo`
3. Go to Zdoo official website to [download](http://www.zdoo.org/download.html)  source code
4. Refer to *[Deploy second application](https://support.websoft9.com/docs/lamp/solution-deployment.html#deploy-second-application)* of [LAMP](https://support.websoft9.com/docs/lamp/) to deploy Zdoo to your Server

---

## Zdoo Installation Wizard

1. Using local Chrome or Firefox to visit *http://domain* or *http://Internet IP*, you will enter the configuration interface of installation
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/zdoo/zdoo-installstart-websoft9.png)

1. Agree license, Click "Next", system Check
  ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/zdoo/zdoo-installcheck-websoft9.png)

3. Then configure the database connection information([Don't know password?](https://support.websoft9.com/docs/lamp/stack-accounts.html#mysql))
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/zdoo/zdoo-installdb-websoft9.png)

4. Set administrator username and password
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/zdoo/zdoo-installadmin-websoft9.png)

5. Your installation is finished! log in Zdoo.
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/zdoo/zdoo-backend-websoft9.png)

> Refers to the [Zdoo Documentation](http://www.zdoo.org/book/) to get start your Zdoo tutorial

### Send mail by SMTP

1. Log in Zdoo as Admin and go to "Admin"->"System"->"Email". 
2. Enter an Email address that you want to send notifications from.
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/zdoo/zdoo-smtp001-websoft9.png)
3. A page will show for you to configure your email.
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/zdoo/zdoo-smtp002-websoft9.png)

More SMTP Service(Gmail, Hotmail, QQ mail, Yahoo mail, SendGrid and so on)  settings or Issues with SMTP, please refer to Websoft9's *[SMTP Guide](https://support.websoft9.com/docs/faq/tech-smtp.html)*

### Automatic Backup

You can use the a backup function of Zdoo

Log in as adminitrator,go to Admin->Sytem->backup

- Set hold days
- Click Backup
- Eit the Cron for autmatic backup

![](http://libs.websoft9.com/Websoft9/DocsPicture/en/zdoo/zdoo-backupm-websoft9.png)

### Reset Zdoo administrator password

If you have forgotten the password of Zdoo Administrator, you should reset it

1. Generate a MD5 password by the tool **[md5 Hash Generator](http://www.miraclesalad.com/webtools/md5.php)**
2. Using [phpMyadmin](https://support.websoft9.com/docs/lamp/admin-mysql.html) to modify your account password in the table `sys_user`

## FAQ

#### I can't visit the start page of Zdoo?

Your TCP:80 of Security Group Rules is not allowed so there no response from Chrome or Firefox

#### Which database does this Zdoo package use?

MySQL

#### Can I use Cloud database for Zdoo?

Yes
