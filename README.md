# PerfectTime
### Overview
Perfect Time is a fertility tracking app. It allows one to keep track of mood, energy level, basal body temperature and various other signs and symptoms. There is also a calendar view that will eventually be developed into a helpful, sharing,  tool that will facilitate communication of optimal periods during the fertility cycle for conception or conception avoidance. Perfect Time utilizes Google Passport and OAth, charts.js, body-parser, cookie-session, ejs, express, express-session, jquery, mysql, mysql2 and sequelize.

### Installation

**1) Set up mySQL database**

  * Visit the mySQL installation page and install the version that is the most appropriate for the computer's  
    operating system.

    https://dev.mysql.com/doc/refman/5.6/en/installing.html
    
  * Use the schema.sql and the seeds.sql files to create a database in Sequel Pro (Mac) or MySQL Workbench (PCs) 
  
    https://github.com/fvaldez421/PerfectTime/tree/master/db
    

**2) NPM install the necessary packages**

  * In the command line interface (Terminal, Bash, Shell, etc), run "npm init" to create a file to hold the necessary            information for the packages.
  
  * Then run "npm install" followed by "passport-google", "passport-google-oath", "charts.js", "body-parser", "cookie-session", "ejs", "express", "express-session", "mysql", "mysql2" and "sequelize"; allowing the installations to fully  
    process each time before beginning a new installation.  
    
  * Here are some additional resources for troubleshooting:   
  https://www.npmjs.com/package/passport-google    
  https://www.npmjs.com/package/passport-google-oauth   
  http://www.chartjs.org/docs/latest/getting-started/installation.html   
  https://www.npmjs.com/package/body-parser   
  https://www.npmjs.com/package/cookie-session   
  https://www.npmjs.com/package/ejs   
  https://www.npmjs.com/package/express   
  https://www.npmjs.com/package/express-session   
  https://www.npmjs.com/package/mysql   
  https://www.npmjs.com/package/mysql2   
  https://www.npmjs.com/package/sequelize   
  
**3) Set up files**

  * Again, in the command line interface, write "git clone" followed by " https://github.com/fvaldez421/PerfectTime.git "  
    to get access to the files necessary to explore Perfect Time.
    
  * Run "node server.js" to launch the program.  
  
  * Go to " localhost:3000 " in the computer's internet browser. 
  
  #### OR
  
  * Visit https://radiant-oasis-59014.herokuapp.com/  and enjoy the site live, online.  
  
### Program Walkthrough   
  
Upon launch, the user willl be greeted with the Perfect Time log-in page. Here the user can sign in with their google log-in by clicking on the red button.  

![Log In with Google](https://github.com/fvaldez421/PerfectTime/blob/master/public/images/logInReadMe.png "Log in Greeting Page") . 
  
  
  
