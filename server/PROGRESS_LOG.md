# Progress Log

**=============== 11/16/2021 ==================**

Imported the following `dependencies` 

- dotenv (Andrew)
- pg (Andrew)
- sequelize (Andrew)
- nodemon (Gilman)

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
Gilman opened PR to dbCreation branch to compare coding conventions with Andrew

### **NOTE**
Start the backend server with the following command in the server directory:
```
npm run dev
```
Requires a running PostgreSQL database configured with the info in the `.env` file

<br>**=============== 11/30/2021 ==================**

Andrew restructured the backend in order to properly connect to the database

Changes:<br>
- moved controllers and routes out of the db folder and into the api folder
- moved the server index folder from the db folder to the server folder
- changed the file path of the npm run dev script for nodemon

<br>**=============== TODO ==================**

### Code 💻
- Continue to update Route and Controller for Diaries
- Route and Controller for Diary Entries
- Route and Controller for Users
- Implement User login
- Implement new features (e.g. visibility)
- Consult with group on what features to implement next
- Create a basic seed script to populate the database

### Documentation 📝
- Update diagrams as more features/attributes introduced
- Create new setup instructions to connect to backend
- Continue to log progress

