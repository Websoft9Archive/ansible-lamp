# EspoCRM

This chapter is used for users who have subscribed **EspoCRM image** or **LAMP image**.

EspoCRM([DEMO](https://demo.espocrm.com/)) is an Open Source CRM (Customer Relationship Management) software that allows you to see, enter and evaluate all your company relationships regardless of the type. People, companies or opportunities – all in an easy and intuitive interface.It’s a web application with a frontend designed as a single page application based on backbone.js and a REST API backend written in PHP.

![](http://libs.websoft9.com/Websoft9/DocsPicture/en/espocrm/espocrm-gui-websoft9.jpg)

## Installation Preparation

Before your installation, suggest you complete follows:

* Get the **Internet IP** of your Server on your Cloud Platform
* Visit *http://Internet IP/9panel* to quik start
* Know more about PHP runtime, includes:**installation directory, version, database, vhost** ([view it](https://support.websoft9.com/docs/lamp/stack-components.html))

## EspoCRM deployment

**If you are using the Websoft9 EspoCRM Image, go to the [EspoCRM Installation Wizard](/espocrm.md#espocrm-installation-wizard) directly**

If you are using LAMP, please deploy EspoCRM to your Server as follows:

1. Log in your Domain console and complete a Domain resolution, make sure it successful
2. Using [phpMyAdmin to log in MySQL](https://support.websoft9.com/docs/lamp/admin-mysql.html), create a database named`espocrm`
3. Go to EspoCRM official website to [download](https://espocrm.com/download/)  source code
4. Refer to *[Deploy second application](https://support.websoft9.com/docs/lamp/solution-deployment.html#deploy-second-application)* of [LAMP](https://support.websoft9.com/docs/lamp/) to deploy EspoCRM to your Server

---

## EspoCRM Installation Wizard

1. Using local Chrome or Firefox to visit *http://domain* or *http://Internet IP*, you will enter the configuration interface of installation
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/espocrm/ep01.png)

2. Agree license, go to next step
  ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/espocrm/ep02.png)

3. Then configure the database connection information([Don't know password?](https://support.websoft9.com/docs/lamp/stack-accounts.html#mysql)) and set administrator account
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/espocrm/ep03.png)

4. Wait the installing  
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/espocrm/ep04.png)

5. Set system configuration
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/espocrm/ep06.png)

5. Set your SMTP (Optional)
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/espocrm/ep07.png)

6. Install successfully  
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/espocrm/ep08.png)

7. Log in to EspoCRM dashboard
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/espocrm/ep10.png)

> Refers to the [EspoCRM Documentation](https://docs.espocrm.com/) to get start your EspoCRM tutorial


### Set Languages

EspoCRM support more than 14+ languages,how to configure the language after installation?

1. Administrator->Settings,change the language and save it
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/espocrm/EspoCRM-language-websoft9.png)
2. Refresh EspoCRM


### Extension Packages

Extensions allow you to add extra functionality to EspoCRM. They can be installed by Administrator panel->Customization->Extensions
![](http://libs.websoft9.com/Websoft9/DocsPicture/en/espocrm/EspoCRM-extension-websoft9.png)

### Upgrade

We recommend to make a backup of your EspoCRM files and data before upgrade.To upgrade your EspoCRM download appropriate zip file and upload it at Administration > Upgrade.

1. Download upgrade package from [here](https://www.espocrm.com/download/upgrades/)
2. Administration > Upgrade,upload it
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/espocrm/EspoCRM-upgrade-websoft9.png)
3. Then you will get the message “Your EspoCRM will be upgraded to version 4.x.x. This can take some time.”,click the “Run upgrade”
4. Upgraded successfully


## FAQ

#### I can't visit the start page of EspoCRM?

Your TCP:80 of Security Group Rules is not allowed so there no response from Chrome or Firefox

#### Which database does this EspoCRM package use?

MySQL

#### Can I use Cloud database for EspoCRM?

Yes

#### Where is the installation directory of EspoCRM?

EspoCRM directory: */data/wwwroot/espocrm*  

#### How to set HTTPS for EspoCRM?

Refer to [HTTPS of LAMP](https://support.websoft9.com/docs/lamp/solution-https.html)

#### How to set SMTP for EspoCRM?