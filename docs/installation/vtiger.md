# VtigerCRM

This chapter is used for users who have subscribed **VtigerCRM image** or **LAMP image**.

VtigerCRM is an opensource CRM system that helps you create and automate a better customer journey.Vtiger CRM enables sales, support, and marketing teams to organize and collaborate to measurably improve customer experiences and business outcomes. Vtiger CRM also includes email, inventory, project management, and other tools, providing a complete the business management suite.

## Installation Preparation

Before your installation, suggest you complete follows:

* Get the **Internet IP** of your Server on your Cloud Platform
* Visit *http://Internet IP/9panel* to quik start
* Know more about PHP runtime, includes:**installation directory, version, database, vhost** ([view it](https://support.websoft9.com/docs/lamp/stack-components.html))

## VtigerCRM deployment

**If you are using the Websoft9 VtigerCRM Image, go to the [VtigerCRM Installation Wizard](/dolibarr.md#dolibarr-installation-wizard) directly**

If you are using LAMP, please deploy VtigerCRM to your Server as follows:

1. Log in your Domain console and complete a Domain resolution, make sure it successful
2. Using [phpMyAdmin to log in MySQL](https://support.websoft9.com/docs/lamp/admin-mysql.html), create a database named`dolibarr`
3. Go to VtigerCRM official website to [download](https://www.vtiger.com/open-source-crm/)  source code
4. Refer to *[Deploy second application](https://support.websoft9.com/docs/lamp/solution-deployment.html#deploy-second-application)* of [LAMP](https://support.websoft9.com/docs/lamp/) to deploy VtigerCRM to your Server

---


## VtigerCRM Installation Wizard

1. Using local Chrome or Firefox to visit *http://domain* or *http://Internet IP*, you will enter the configuration interface of installation
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/vtigercrm/vtigercrm-install001-websoft9.png)

2. Environment check, go to next step
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/vtigercrm/vtigercrm-install002-websoft9.png)

3. Then configure the database connection information([Don't know password?](https://support.websoft9.com/docs/lamp/stack-accounts.html#mysql))
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/vtigercrm/vtigercrm-install003-websoft9.png)

4. Check the database connection, go to next step
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/vtigercrm/vtigercrm-install004-websoft9.png)

5. Select one industry for your VtigerCRM
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/vtigercrm/vg06.png)

6. Select the modules you want to installed
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/vtigercrm/vtigercrm-install006-websoft9.png)

7. Select the Currency, Time zone
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/vtigercrm/vtigercrm-install007-websoft9.png)

8. VtigerCRM dashboard
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/vtigercrm/vtigercrm-backend-websoft9.png)

> Refers to the [VtigerCRM Help](https://www.vtiger.com/help/) to get start your VtigerCRM tutorial



## FAQ

#### I can't visit the start page of VtigerCRM?

Your TCP:80 of Security Group Rules is not allowed so there no response from Chrome or Firefox

#### Which database does this VtigerCRM package use?

MySQL

#### Can I use Cloud database for VtigerCRM?

Yes

#### Where is the installation directory of VtigerCRM?

VtigerCRM directory: */data/wwwroot/vtigercmm*  

#### How to set HTTPS for VtigerCRM?

Refer to [HTTPS of LAMP](https://support.websoft9.com/docs/lamp/solution-https.html)

#### How to set SMTP for VtigerCRM?