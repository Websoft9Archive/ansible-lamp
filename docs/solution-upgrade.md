# Update & Upgrade

Updates and upgrades are one of the maintenance tasks for sytem. Programs that are not upgraded for a long time, like buildings that are not maintained for a long time, will accelerate aging and gradually lose functionality until they are unavailable.

You should know the differences between the terms **Update** and **Upgrade**([Extended reading](https://support.websoft9.com/docs/faq/tech-upgrade.html#update-vs-upgrade))
- Operating system patching is **Update**, Ubuntu16.04 to Ubuntu18.04 is **Upgrade**
- MySQL5.6.25 to MySQL5.6.30 is **Update**, MySQL5.6 to MySQL5.7 is **Upgrade**

For LAMP maintenance, focus on the following two Update & Upgrade jobs

- Sytem update(Operating System and Running Environment) 
- PHP Version Upgrade
- Application Upgrade

## System Update

Run an update command to complete the system update:

``` shell
#For Ubuntu
apt update && apt upgrade -y

#For Centos&Redhat
yum update -y
```
> This deployment package is preconfigured with a scheduled task for automatic updates. If you want to remove the automatic update, please delete the corresponding Cron

## PHP Version Upgrade

Refert to the docs *[PHP version upgrade](https://support.websoft9.com/docs/linux/zh/lang-php.html#verion-upgrade)*

## Application Upgrade

Different application have different upgrade solution, not discussed here

## Q&A

#### Is this Image support MySQL5.6 upgrade to MySQL5.7?
No,you can upgrade the same version, E.g 5.6.x to 5.6.y   or  5.7.x to 5.7.y

#### Is this Image support PHP7.0 upgrade to PHP7.2?
Yes

#### Is this Image support PHP7.2 downgrade PHP7.0?
No

#### What should I do before upgrade?
You should backup all your data
