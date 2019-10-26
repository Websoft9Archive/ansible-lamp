# Drupal

This chapter is used for users who have subscribed **Drupal image** or **LAMP image**.

Drupal is content management software. It's used to make many of the websites and applications you use every day. Drupal has great standard features, like easy content authoring, reliable performance, and excellent security. But what sets it apart is its flexibility; modularity is one of its core principles. Its tools help you build the versatile, structured content that dynamic web experiences need.

## Installation Preparation

Before your installation, suggest you complete follows:

* Get the **Internet IP** of your Server on your Cloud Platform
* Visit *http://Internet IP/9panel* to quik start
* Know more about PHP runtime, includes:**installation directory, version, database, vhost** ([view it](https://support.websoft9.com/docs/lamp/stack-components.html))

## Drupal deployment

**If you are using the Websoft9 Drupal Image, go to the [Drupal Installation Wizard](/drupal.md#drupal-installation-wizard) directly**

If you are using LAMP, please deploy Drupal to your Server as follows:

1. Log in your Domain console and complete a Domain resolution, make sure it successful
2. Using [phpMyAdmin to log in MySQL](https://support.websoft9.com/docs/lamp/admin-mysql.html), create a database named`drupal`
3. Go to Drupal official website to [download](https://www.drupal.org/download)  source code
4. Refer to *[Deploy second application](https://support.websoft9.com/docs/lamp/solution-deployment.html#deploy-second-application)* of [LAMP](https://support.websoft9.com/docs/lamp/) to deploy Drupal to your Server

---

## Drupal Installation Wizard

1. Using local Chrome or Firefox to visit *http://domain* or *http://Internet IP*, you will enter the configuration interface of installation
2. Choose a language, go to next step 
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/drupal/dp01.png)

3. Select an installation profile 
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/drupal/dp02.png)

3. Then configure the database connection information([Don't know password?](https://support.websoft9.com/docs/lamp/stack-accounts.html#mysql))
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/drupal/dp03.png)

5. Wait for installing
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/drupal/dp04.png)

6. Set your administrator account for Drupal
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/drupal/dp05.png)
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/drupal/dp06.png)

7. Installed successfully
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/drupal/dp07.png)

> Refer to *[Drupal Administrator Guide](https://support.websoft9.com/docs/drupal)* to get more details


## FAQ

#### I can't visit the start page of Drupal?

Your TCP:80 of Security Group Rules is not allowed so there no response from Chrome or Firefox

#### Which database does this Drupal package use?

MySQL

#### Can I use Cloud database for Drupal?

Yes