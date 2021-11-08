# Server-Side-Mock

## 🚀 Quick Start Guide

Currently, the server-side directory is utilizing
[JSON Server](https://github.com/typicode/json-server) to mock a REST API. You will find mock data
for **Users**, **Diaries**, and **Diary Entries** in the `db.json` file located in the server
directory. This will allow client-side code to imitate making calls for retrieving and pushing data
from and to the server without the need to implement a database. The idea is for the client-side to
be able to use the mock data to visualize and design the frontend. This will be a temporary setup as
there are future plans to incorporate full database capabilities.

## 🔨 Setup

_Make sure that you have **Node.js** and **NPM** installed_

Download the appropriate node_modules by running the following command in the `server` directory

```
npm init
```

To start up the json-server, run the following command

```
npm run server
```

This command will start the json-server on `localhost:3001`

## 👀 Viewing Mock Data

To view the mock data in the browser, you can make a regular **fetch()** request. _See example below
code that displays data in the browser console._

```js
document.addEventListener("DOMContentLoaded", logMockData);

function displayUsers() {
  fetch("http://localhost:3001/users")
    .then((response) => response.json())
    .then((users) => console.log(users));
}

function displayDiaries() {
  fetch("http://localhost:3001/diaries")
    .then((response) => response.json())
    .then((diaries) => console.log(diaries));
}

function displayDiaryEntries() {
  fetch("http://localhost:3001/entries")
    .then((response) => response.json())
    .then((entries) => console.log(entries));
}

function logMockData() {
  displayUsers();
  displayDiaries();
  displayDiaryEntries();
}
```

## ❗ NOTE

Mock data is not a representation of the final data model and attributes. Changes will be made as
development progresses and as suggestions are made.

## 📃 ToDo

- Update the Entity diagram
- Update Entity model attributes
- Implement a feature to make diary entries (and diaries?) public or private
- Implement a database to store Entity data
