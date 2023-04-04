<!-- ABOUT THE PROJECT -->
# About The Project

![Screenshot 2023-04-04 at 12 22 30 PM](https://user-images.githubusercontent.com/115289871/229722015-3857fc64-50e0-49be-8852-93b53602c46c.png)




In this Project, I've built a WebApp which can be used by Developers to integrate a User Login Page in their Applications. It has a simple and attractive design and can be used by anybody.  


Use the `README.md` to get started.




# Built With

The Tech Stacks use are:

<div align="center">
<a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html,css,bootstrap,nodejs,expressjs,ejs" />
</a>
</div>




<!-- GETTING STARTED -->
# Getting Started

To get started, create a file called server.js and import all the required modules in it. After that create a folder called views and place header.ejs, base.ejs, footer.ejs and dashboard.ejs files in it. All of these are the ejs files and are used for connectivity. We'll also create another folder called public wherein we'll add all the essentials required for the front-end of the WebApp. Also, creating another folder called src is immportant for placing the database file.


* modules

  ```sh
  const express = require('express');
  const path = require('path');
  const bodyParser = require('body-parser');
  const session = require('express-session');
  const {v4 : uuidv4} = require('uuid');
  const router = require('./router');
  ```

* ejs connectivity

  ```sh
  app.set("view engine","ejs")
  ```
  
* Body Parser module

  ```sh
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))
  ```

## Prerequisites

To begin with our Project, we'll need to install some npm packages like node, express, body-parser, ejs, mongo, mongoose, uuid using the command given below.

* npm

  ```sh
  npm install node express body-parser ejs mongo mongoose uuid
  ```
  
  
* To ease the process of development, we'll install nodemon (Make sure you already have nodemon installed in your system, if not then [visit here](https://nodemon.io/)).

  ```sh
  npm i nodemon
  ```



<!-- CONTACT -->
# Contact

Your Name - Shivank Kapur - shivankkapur2004@gmail.com

Project Link: 
