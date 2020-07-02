# SuiteCRM

This chapter is used for users who have subscribed **SuiteCRM image** or **LAMP image**.

SuiteCRM([DEMO](https://suitecrm.com/demo/)) is a fork of SugarCRM Community Edition. Massively extended, SuiteCRM delivers Workflow, Reporting, Portal, Quotes, Products, Invoices, Accounts, Contacts, Opportunities, Projects, Responsive mobile theme, Email marketing campaigns, Knowledge Base, Outlook and Thunderbird integration, Contracts, Leads, Activities and much more.

![](http://libs.websoft9.com/Websoft9/DocsPicture/en/suitecrm/suitecrm-gui-websoft9.png)

## Installation Preparation

Before your installation, suggest you complete follows:

* Get the **Internet IP** of your Server on your Cloud Platform
* Visit *http://Internet IP/9panel* to quik start
* Know more about PHP runtime, includes:**installation directory, version, database, vhost** ([view it](https://support.websoft9.com/docs/lamp/stack-components.html))

## SuiteCRM deployment

**If you are using the Websoft9 SuiteCRM Image, go to the [SuiteCRM Installation Wizard](/suitecrm.md#suitecrm-installation-wizard) directly**

If you are using LAMP, please deploy SuiteCRM to your Server as follows:

1. Log in your Domain console and complete a Domain resolution, make sure it successful
2. Using [phpMyAdmin to log in MySQL](https://support.websoft9.com/docs/lamp/admin-mysql.html), create a database named`suitecrm`
3. Go to SuiteCRM official website to [download](https://suitecrm.com/download/)  source code
4. Refer to *[Deploy second application](https://support.websoft9.com/docs/lamp/solution-deployment.html#deploy-second-application)* of [LAMP](https://support.websoft9.com/docs/lamp/) to deploy SuiteCRM to your Server

---

## SuiteCRM Installation Wizard

1. Using local Chrome or Firefox to visit *http://domain* or *http://Internet IP*, you will enter the configuration interface of installation

2. Agree license, go to next step
  ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/suitecrm/suitecrm-accept-websoft9.png)

3. Environment check
  ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/suitecrm/suitecrm-check-websoft9.png)

4. Then configure the database connection information([Don't know password?](https://support.websoft9.com/docs/lamp/stack-accounts.html#mysql)) and set administrator account
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/suitecrm/suitecrm-installdb-websoft9.png)

   > Email is your system ID, not collected by anyone because it stored in your Cloud Server

5. Wait the installing  
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/suitecrm/suitecrm-installing-websoft9.png)


6. Set your SMTP (Optional)
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/suitecrm/suitecrm-smtp-websoft9.png)

7. Install successfully, log in to SuiteCRM  
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/suitecrm/suitecrm-login-websoft9.png)

8. SuiteCRM dashboard
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/suitecrm/suitecrm-backend-websoft9.png)


### Set Languages

SuiteCRM support multi-language.Below is a example for adding Chinese language in SuiteCRM

1. [Find and Download](https://crowdin.com/project/suitecrmtranslations) the language package
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/suitecrm/suitecrm-dllanguge-websoft9.png)

2. Administrator->MODULE LOADER,upload the language package,then install it
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/suitecrm/suitecrm-uploadlanguage-websoft9.png)
3. Afer the intallation,you can receive the message “The language package is ready to be installed.”
4. go to Administrator->admin->system-Language,now you can see the new language item
5. Log out,and log in again,you can see the language selections upper one the account
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/suitecrm/suitecrm-languageitems-websoft9.png)


### Set Automatic Backup

SuiteCRM have the Backups interface

1. Log into your existing SuiteCRM application as the administrator and click admin on the right-hand corner of the page.
2. System->Backups
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/suitecrm/suitecrm-backupfunction-websoft9.png)

3. Input the backup directory adn Filename,then click the “Confirm Settings”
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/suitecrm/suitecrm-backup-websoft9.png)

4. Settings confirmed. Press "run backup" to perform the backup.
5. Now,your backup file has been generated
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/suitecrm/suitecrm-backupfiles-websoft9.png)

### Upgrade

The Upgrade Wizard provides a quick way to upgrade to the latest version of the SuiteCRM application. It includes critical upgrade logic as well as the SQL commands needed to upgrade the application. Ensure that the config.php file for your installation, located in the SuiteCRM root directory, is writable, before using the Upgrade Wizard. Note: Manual upgrades by file replacements and running the upgrade SQL are not supported.

1. Download the appropriate SuiteCRM Upgrade zip file from the SuiteCRM website or GitHub Repository to your local machine.

2. Log into your existing SuiteCRM application as the administrator and click admin on the right-hand corner of the page.
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/suitecrm/suitecrm-upgradewz-websoft9.png)

3. Click Upgrade Wizard in the Systems panel of the Administration Home page.


> Refers to the [SuiteCRM Documentation](https://docs.suitecrm.com/) to get start your SuiteCRM tutorial

## FAQ

#### I can't visit the start page of SuiteCRM?

Your TCP:80 of Security Group Rules is not allowed so there no response from Chrome or Firefox

#### Which database does this SuiteCRM package use?

MySQL

#### Can I use Cloud database for SuiteCRM?

Yes

#### Where is the installation directory of SuiteCRM?

SuiteCRM Directory: */data/wwwroot/suitecrm*  
SuitCRM configuration : */data/wwwroot/suitecrm/config.php*

Database connection configuration is this `config.php` file:  
```
'dbconfig' => 
  array (
    'db_host_name' => 'localhost',
    'db_host_instance' => 'SQLEXPRESS',
    'db_user_name' => 'root',
    'db_password' => '*******',  //new password here
    'db_name' => 'suitecrm',
    'db_type' => 'mysql',
    ...
  ),
```

#### How to set HTTPS for SuitCRM?

Refer to [HTTPS of LAMP](https://support.websoft9.com/docs/lamp/solution-https.html)

#### How to set SMTP for SuiteCRM?

SuiteCRM support the SMTP, follow this step:

1. Go to SuiteCRM->Administartor->Admin->Email->Email Setting->Outgoing Mail Configuration
2. Fill in the correct SMTP Parameters
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/suitecrm/suitecrm-smtp-2-websoft9.png)
    - SMTP Mail Server
    - SMTP Port
    - Use SMTP Authentication
    - Enable SMTP over SSL or TLS
    - Use Name
    - Password
    - Allow users to use this account for...
3. After the settings are correct, please click "Send Test Email" to Test to verify
