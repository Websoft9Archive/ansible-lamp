# Joomla

This chapter is used for users who have subscribed **Joomla image** or **LAMP image**.

Joomla is an award-winning content management system (CMS), which enables you to build Web sites and powerful online applications. Many aspects, including its ease-of-use and extensibility, have made Joomla! the most popular Web site software available. Best of all, Joomla! is an open source solution that is freely available to everyone.

## Installation Preparation

Before your installation, suggest you complete follows:

* Get the **Internet IP** of your Server on your Cloud Platform
* Visit *http://Internet IP/9panel* to quik start
* Know more about PHP runtime, includes:**installation directory, version, database, vhost** ([view it](https://support.websoft9.com/docs/lamp/stack-components.html))

## Joomla deployment

**If you are using the Websoft9 Joomla Image, go to the [Joomla Installation Wizard](/joomla.md#joomla-installation-wizard) directly**

If you are using LAMP, please deploy Joomla to your Server as follows:

1. Log in your Domain console and complete a Domain resolution, make sure it successful
2. Using [phpMyAdmin to log in MySQL](https://support.websoft9.com/docs/lamp/admin-mysql.html), create a database named`joomla`
3. Go to Joomla official website to [download](https://downloads.joomla.org)  source code
4. Refer to *[Deploy second application](https://support.websoft9.com/docs/lamp/solution-deployment.html#deploy-second-application)* of [LAMP](https://support.websoft9.com/docs/lamp/) to deploy Joomla to your Server

---

## Joomla Installation Wizard

1. Using local Chrome or Firefox to visit *http://domain* or *http://Internet IP*, you will enter the configuration interface of installation

2. Set the site information and Super User Account Details,then Cick “next” button
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/joomla/joomla-installconf-websoft9.png)

3. Then configure the database connection information([Don't know password?](https://support.websoft9.com/docs/lamp/stack-accounts.html#mysql))
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/joomla/joomla-installdb-websoft9.png)

5. Click the "Next" button when complete the Database Configuration,the wizard will start to install.
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/joomla/joomla-installss-websoft9.png)

6. Connect your Server with SSH, and delete the “installation folder”
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/joomla/joomla-installdel2-websoft9.png)

7. Click the “Administrator” button to enter the login page of Joomla now,Log in as administator account which you have set in the first step of installation
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/joomla/joomla-login-websoft9.png)

8. You can use the Joomla Backend to setup your site now
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/joomla/joomla-backend-websoft9.png)

> Refer to *[Joomla Administrator Guide](https://support.websoft9.com/docs/joomla)* to get more details


## FAQ

#### I can't visit the start page of Joomla?

Your TCP:80 of Security Group Rules is not allowed so there no response from Chrome or Firefox

#### Which database does this Joomla package use?

MySQL

#### Can I use Cloud database for Joomla?

Yes