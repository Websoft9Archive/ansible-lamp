# ProcessWire

This chapter is used for users who have subscribed **ProcessWire image** or **LAMP image**.

ProcessWire is an open source content management system (CMS) and web application framework aimed at the needs of designers, developers and their clients. ProcessWire gives you more control over your fields, templates and markup than other platforms, and provides a powerful template system that works the way you do. Not to mention, ProcessWire’s API makes working with your content easy and enjoyable. Managing and developing a site in ProcessWire is shockingly simple compared to what you may be used to.

## Installation Preparation

Before your installation, suggest you complete follows:

* Get the **Internet IP** of your Server on your Cloud Platform
* Visit *http://Internet IP/9panel* to quik start
* Know more about PHP runtime, includes:**installation directory, version, database, vhost** ([view it](https://support.websoft9.com/docs/lamp/stack-components.html))

## ProcessWire deployment

**If you are using the Websoft9 ProcessWire Image, go to the [ProcessWire Installation Wizard](/processwire.md#processwire-installation-wizard) directly**

If you are using LAMP, please deploy ProcessWire to your Server as follows:

1. Log in your Domain console and complete a Domain resolution, make sure it successful
2. Using [phpMyAdmin to log in MySQL](https://support.websoft9.com/docs/lamp/admin-mysql.html), create a database named`processwire`
3. Go to ProcessWire official website to [download](https://processwire.com/download/)  source code
4. Refer to *[Deploy second application](https://support.websoft9.com/docs/lamp/solution-deployment.html#deploy-second-application)* of [LAMP](https://support.websoft9.com/docs/lamp/) to deploy ProcessWire to your Server

---

## ProcessWire Installation Wizard

1. Using local Chrome or Firefox to visit *http://domain* or *http://Internet IP*, you will enter the configuration interface of installation

2. Click the “Get Started” and complete the Compatibility Check
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/processwire/processwire-installpage-websoft9.png)

3. Then configure the database connection information([Don't know password?](https://support.websoft9.com/docs/lamp/stack-accounts.html#mysql))
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/processwire/processwire-installdb-websoft9.png)

4. Fill in the administrator account information section
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/processwire/processwire-installadmin-websoft9.png)

5. Then you will receive feedback on successful installation below
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/processwire/processwire-installlogin-websoft9.png)

6. Click the “Login to Admin”,log in to backend of ProcessWire below:
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/processwire/processwire-installbackend-websoft9.png)

> Refer to *[ProcessWire Documentation](https://processwire.com/docs/)* to get more details


## FAQ

#### I can't visit the start page of ProcessWire?

Your TCP:80 of Security Group Rules is not allowed so there no response from Chrome or Firefox

#### Which database does this ProcessWire package use?

MySQL

#### Can I use Cloud database for ProcessWire?

Yes