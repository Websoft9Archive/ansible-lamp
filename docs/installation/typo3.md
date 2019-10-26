# Typo3

This chapter is used for users who have subscribed **Typo3 image** or **LAMP image**.

Typo3 is a content management system written in the PHP programming language. Typo3 began as Concrete CMS in 2003, and was the glue behind many web applications, websites, stores and forums between 2003 and 2008.

## Installation Preparation

Before your installation, suggest you complete follows:

* Get the **Internet IP** of your Server on your Cloud Platform
* Visit *http://Internet IP/9panel* to quik start
* Know more about PHP runtime, includes:**installation directory, version, database, vhost** ([view it](https://support.websoft9.com/docs/lamp/stack-components.html))

## Typo3 deployment

**If you are using the Websoft9 Typo3 Image, go to the [Typo3 Installation Wizard](/typo3.md#typo3-installation-wizard) directly**

If you are using LAMP, please deploy Typo3 to your Server as follows:

1. Log in your Domain console and complete a Domain resolution, make sure it successful
2. Using [phpMyAdmin to log in MySQL](https://support.websoft9.com/docs/lamp/admin-mysql.html), create a database named`typo3`
3. Go to Typo3 official website to [download](http://www.typo3.org/download)  source code
4. Refer to *[Deploy second application](https://support.websoft9.com/docs/lamp/solution-deployment.html#deploy-second-application)* of [LAMP](https://support.websoft9.com/docs/lamp/) to deploy Typo3 to your Server

---

## Typo3 Installation Wizard

1. Using local Chrome or Firefox to visit *http://domain* or *http://Internet IP*, you will enter the configuration interface of installation

2. After the system environment check, go to next step 
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/typo3/ty02.png)

3. Then configure the database connection information([Don't know password?](https://support.websoft9.com/docs/lamp/stack-accounts.html#mysql))
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/typo3/ty03.png)

4. Select a database name, click "Continue"
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/typo3/ty04.png)

5. Set your administrator account
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/typo3/ty05.png)

6. Installation done, You can open the TYPO3 backend
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/typo3/ty06.png)

7. Log in Typo3  
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/typo3/typo3-login-websoft9.png)

8. Typo3 dashboard  
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/typo3/ty08.png)

### Upgrade

Typo3 backend have the interface for Upgrade

1. Login Typo3 dashboard, go to【ADMIN TOOLS】> 【Upgrade】
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/typo3/typo3-upgrade-websoft9.png)
   
2. Upgrade Typo3 by yourself

### Extension Manager

TYPO3 CMS has many built-in features but even more features are available via extensions. Actually the whole of TYPO3 CMS itself is made of extensions. With public extensions you can enhance existing features or add totally new ones.

1. Go to ADMIN TOOLS > Extensions
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/typo3/typo3-BackendExtensionManager-websoft9.png)

2. Let’s look briefly at the extension installation process. Use the menu in the docheader to switch to the “Get extensions” view
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/typo3/typo3-BackendExtensionManagerInstall-websoft9.png)

3. If you look for a specific version of an extension, you can click on its title (4) and access the list of all available versions
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/typo3/typo3-BackendExtensionManagerExtensionVersions-websoft9.png)

### Templates

After that brief overview of pages and content elements, you might wonder how all this structure is turned into a web site, complete with page layout, CSS and JavaScript files. In TYPO3 CMS this job is achieved using templates which should be considered as a kind of configuration written in a language called TypoScript.

1. The WEB > Template module provides an overview of the TypoScript configuration and allows to work with so-called “template records”, which is where the TypoScript configuration is actually stored.
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/typo3/typo3-template-websoft9.png)
2. Configure it

> Refer to *[ProcessWire Documentation](https://docs.typo3.org/)* to get more details

## FAQ

#### I can't visit the start page of Typo3?

Your TCP:80 of Security Group Rules is not allowed so there no response from Chrome or Firefox

#### Which database does this Typo3 package use?

MySQL

#### Can I use Cloud database for Typo3?

Yes
