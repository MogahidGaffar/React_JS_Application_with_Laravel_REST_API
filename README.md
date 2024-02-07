# Project Description:


 <h3 style="text-align:center">Main Page </h3>
 <p align="center"><a  target="_blank"><img src="https://github.com/MogahidGaffar/React_JS_Application_with_Laravel_REST_API/blob/main/screen.PNG" height="650" width="700"></a></p></br>


 
## 1. Backend (Laravel):

API for Participant Registration:
Endpoint to register participants with fields for name, email, skill level, and availability.
Implement validation for input data.
Store participant information in the database.
API for Match Scheduling:
Endpoint to create matches, automatically pairing participants based on skill level and availability.
Each match should have a scheduled time and participants assigned.
Ensure no participant is scheduled for overlapping matches.

## 2. Frontend (React.js):

Participant Registration Form:
Create a form to submit participant details (name, email, skill level, availability).
Implement frontend validation before sending data to the backend.
Match Scheduling View:
Display scheduled matches in a list or calendar view.
Include participant names, skill levels, and match times.
Implement a simple filter to view matches by skill level or participant.

## 3. Database (MySQL):

Design a simple schema to support participant details and match scheduling.
Include tables for participants, matches, and any necessary relationship tables.
Ensure the schema supports querying for matches without performance issues.
Evaluation Criteria:

Functionality: The application works as described without errors.
Code Quality: Clean, readable, and well-structured code.
Database Design: Efficient and normalized database schema.
Problem Solving: Effective solutions for match scheduling logic and data validation.
Best Practices: Use of Laravel and React.js best practices.
Submission Instructions:

Provide a GitHub repository link with the complete project code.
Include a README file with setup instructions and any assumptions made during development.




## Installation

To Run this project in your localhost machine after cloning the repo  Firstly you must have  installed [composer](https://getcomposer.org/), [NodeJs](https://nodejs.org/en/download/) ,[Xampp](https://www.apachefriends.org/download.html)  in your machine as dependencies

1-installing composer required files  , open terminal on your project Folder and Run :

```bash
composer install 
```


2- installing node-js required files 

```bash
npm install
```


3- rename .env.example to .env

4- create Database called laravel-rest-api

5- Seeding Data , Run : 

```bash
php artisan migrate:fresh --seed 
```

6- Run server
```bash
php artisan serve 
```

7- Run node auto build 

```bash
npm run start
```

## Used technologies
php 8.0.28 , laravel 9 , Reactjs 18, MysqlDB 7
