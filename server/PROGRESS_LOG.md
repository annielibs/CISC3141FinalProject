# Progress Log

**=============== 11/16/2021 ==================**

## Database Connection 💻 ➡ 🐘
Andrew connected to a `PostgreSQL` database <br>
Andrew created the data `models` for the following entities:

- **Diary**
  - diary name
  - diary creation date

- **Diary Entry** 
  - entry creation date
  - entry text
  - entry img

- **User**
  - username
  - email

Andrew created a .env containing containing db credentials <br>
Andrew made a new branch `dbCreation` and pushed to GitHub

<br>**=============== 11/19/2021 ==================**

Gilman started implementing Route and Controller for Diaries <br>
- Diary Controller currently contains basic `CRUD` operations

Gilman Updated the entity diagrams to reflect database choice and models <br>
Gilman opened PR to dbCreation branch to compare coding conventions with Andrew <br>
Requires a running PostgreSQL database configured with the info in the `.env` file

<br>**=============== 11/30/2021 ==================**

Andrew restructured the backend in order to properly connect to the database
- moved controllers and routes out of the db folder and into the api folder
- moved the server index folder from the db folder to the server folder
- changed the file path of the npm run dev script for nodemon

<br>

# NEW

<br>**=============== 12/3/2021 ==================**

Andrew - Merged PR
- Implemented ___routes___ and ___controller___ for diary Entries with CRUD operations
- Implemented ___routes___ and ___controller___ for Users with CRUD operations
- Updated table relations between entities

<br>**=============== 12/5/2021 ==================**

Gilman 
- Hosted backend server on Heroku with Heroku Postgres for database

<br>**=============== 12/11/2021 ==================**

Gilman
- Created mock homepage, nav-menu and diary page for frontend
- Coded a modal popup for creating diaries

<br>**=============== 12/14/2021 ==================**

Andrew 
- Added Auth login routes and controller
- Added user authentication and incoporated password encryption
- Added JWT for secure data sharing 

Gilman
- Hosted frontend on separate Heroku server
- Updated diary page to link diaries to distinct entry pages with unique URLs

<br> 

## Updated Dependency List

- ``Heroku PostgreSQL`` - Remote database
- ``Heroku`` - Cloud hosting platform
- ``Sequelize`` - Database ORM (Object-Relational-Mapping)
- ``JWT`` - JSON Web Tokens - secure data sharing
- ``Express.js`` - Backend web framework
- ``React`` - Frontend Javascript library
- ``Axios`` - HTTP client 

## TODO

### Code 💻
- Implement new features (e.g. visibility)
- Consult with group on what features to implement next
- Create a basic seed script to populate the database

### Documentation 📝
- Update diagrams as more features/attributes introduced
- Continue to log progress

