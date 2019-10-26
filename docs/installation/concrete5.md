# Concrete5

This chapter is used for users who have subscribed **Concrete5 image** or **LAMP image**.

Concrete5 is a content management system written in the PHP programming language. Concrete5 began as Concrete CMS in 2003, and was the glue behind many web applications, websites, stores and forums between 2003 and 2008.

## Installation Preparation

Before your installation, suggest you complete follows:

* Get the **Internet IP** of your Server on your Cloud Platform
* Visit *http://Internet IP/9panel* to quik start
* Know more about PHP runtime, includes:**installation directory, version, database, vhost** ([view it](https://support.websoft9.com/docs/lamp/stack-components.html))

## Concrete5 deployment

**If you are using the Websoft9 Concrete5 Image, go to the [Concrete5 Installation Wizard](/concrete5.md#concrete5-installation-wizard) directly**

If you are using LAMP, please deploy Concrete5 to your Server as follows:

1. Log in your Domain console and complete a Domain resolution, make sure it successful
2. Using [phpMyAdmin to log in MySQL](https://support.websoft9.com/docs/lamp/admin-mysql.html), create a database named`concrete5`
3. Go to Concrete5 official website to [download](http://www.concrete5.org/download)  source code
4. Refer to *[Deploy second application](https://support.websoft9.com/docs/lamp/solution-deployment.html#deploy-second-application)* of [LAMP](https://support.websoft9.com/docs/lamp/) to deploy Concrete5 to your Server

---

## Concrete5 Installation Wizard

1. Using local Chrome or Firefox to visit *http://domain* or *http://Internet IP*, you will enter the configuration interface of installation
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/concrete5/concrete5-installpage-websoft9.png)

2. After selecting a language, environment detection, go to the administrator settings interface. Set up the administrator account first and keep it in mind 
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/concrete5/concrete5-setadmin-websoft9.png)

3. Then configure the database connection information([Don't know password?](https://support.websoft9.com/docs/lamp/stack-accounts.html#mysql))
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/concrete5/concrete5-installconfigdb-websoft9.png)

5. After the installation is successful, the system will display the installation success information, and then click "Edit your site" to enter the background
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/concrete5/concrete5-installss-websoft9.png)

6. Please remember that the Concrete5 administrator URL is *http://domain/index.php/login*
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/concrete5/concrete5-login-websoft9.png)

7. Start experiencing the background
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/concrete5/concrete5-backend-websoft9.png)

## FAQ

#### I can't visit the start page of Concrete5?

Your TCP:80 of Security Group Rules is not allowed so there no response from Chrome or Firefox

#### Which database does this Concrete5 package use?

MySQL

#### Can I use Cloud database for Concrete5?

Yes
