# Dolibarr

This chapter is used for users who have subscribed **Dolibarr image** or **LAMP image**.

Dolibarr([DEMO](https://dolibarr.com/demo/)) is a fork of SugarCRM Community Edition. Massively extended, Dolibarr delivers Workflow, Reporting, Portal, Quotes, Products, Invoices, Accounts, Contacts, Opportunities, Projects, Responsive mobile theme, Email marketing campaigns, Knowledge Base, Outlook and Thunderbird integration, Contracts, Leads, Activities and much more.

![](http://libs.websoft9.com/Websoft9/DocsPicture/en/dolibarr/dolibarr-gui-websoft9.png)

## Installation Preparation

Before your installation, suggest you complete follows:

* Get the **Internet IP** of your Server on your Cloud Platform
* Visit *http://Internet IP/9panel* to quik start
* Know more about PHP runtime, includes:**installation directory, version, database, vhost** ([view it](https://support.websoft9.com/docs/lamp/stack-components.html))

## Dolibarr deployment

**If you are using the Websoft9 Dolibarr Image, go to the [Dolibarr Installation Wizard](/dolibarr.md#dolibarr-installation-wizard) directly**

If you are using LAMP, please deploy Dolibarr to your Server as follows:

1. Log in your Domain console and complete a Domain resolution, make sure it successful
2. Using [phpMyAdmin to log in MySQL](https://support.websoft9.com/docs/lamp/admin-mysql.html), create a database named`dolibarr`
3. Go to Dolibarr official website to [download](https://www.dolibarr.org/downloads)  source code
4. Refer to *[Deploy second application](https://support.websoft9.com/docs/lamp/solution-deployment.html#deploy-second-application)* of [LAMP](https://support.websoft9.com/docs/lamp/) to deploy Dolibarr to your Server

---



## Dolibarr Installation Wizard

1. Using local Chrome or Firefox to visit *http://domain* or *http://Internet IP*, you will enter the configuration interface of installation
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/dolibarr/dolibarr-check-websoft9.png)

2. Agree license and environment, go to next step
3. Then configure the database connection information([Don't know password?](https://support.websoft9.com/docs/lamp/stack-accounts.html#mysql))
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/dolibarr/dolibarr-dbconf-websoft9.png)

4. Check database connection
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/dolibarr/dolibarr-confss-websoft9.png)

5. Set your administrator account
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/dolibarr/dolibarr-adminconf-websoft9.png)

6. Install successfully 
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/dolibarr/dolibarr-installss-websoft9.png)

7. Log in Dolibarr
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/dolibarr/dolibarr-login-websoft9.png)

8. Dolibarr dashboard
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/dolibarr/dolibarr-backend-websoft9.png)

9. Go to “Home->Setup->Company/Foundation” and edit informations for company or foundation you want to manage.
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/dolibarr/dolibarr-setupcompany-websoft9.png)

> Refers to the [Dolibarr Documentation](https://docs.dolibarr.com/) to get start your Dolibarr tutorial


### Modules

Activation of modules is the second mandatory step. What modules you will activate depends on what you want to do with Dolibarr. In most cases, you may want to use all modules. You have to activate one by one each module you plan to use. For example, to manage a company, you might activate modules: Third party, Invoices and Products, but probably a lot of more modules.

To activate a module you want, go to page “Home->Setup->Modules” and click the button ‘on/off’ in the “Status” column to enable it.

![](http://libs.websoft9.com/Websoft9/DocsPicture/en/dolibarr/dolibarr-setupmodules-websoft9.png)


### Backup & Restore

Dolibarr have provide the automatic backup tools

1. Login as superuser,admin tools->backup,you can enter the interface
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/dolibarr/dolibarr-backup-websoft9.png)
2. Click the “Generate backup” button,backup database, download all files in Dolibarr root directory
3. Login as superuser,admin tools->restore,you can enter the interface
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/dolibarr/dolibarr-restore-websoft9.png)
4. Restore the data, from a backup dump file, into the database of the new Dolibarr installation or into the database of this current installation (dolibarr). Warning, once restore is finished, you must use a login/password, that existed when backup was made, to connect again. To restore a backup database into this current installation, you can follow this assistant.


## FAQ

#### I can't visit the start page of Dolibarr?

Your TCP:80 of Security Group Rules is not allowed so there no response from Chrome or Firefox

#### Which database does this Dolibarr package use?

MySQL

#### Can I use Cloud database for Dolibarr?

Yes

#### Where is the installation directory of Dolibarr?

Dolibarr directory: */data/wwwroot/dolibarr*  

#### How to set HTTPS for Dolibarr?

Refer to [HTTPS of LAMP](https://support.websoft9.com/docs/lamp/solution-https.html)

#### How to set SMTP for Dolibarr?
