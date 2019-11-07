const express = require("express");

const app = express();
const port = 1410;

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo-List NodeJS</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
  </head>
  <body>
    <div class="container">
      <h1 class="display-4 text-center py-1"><u>Application To-Do-List</u></h1>
      
      <div class="jumbotron p-3 shadow-sm">
        <form action="/" method="POST">
          <div class="d-flex align-items-center">
            <input name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" placeholder="Ajouter quelque chose" style="flex: 1;">
            <button class="btn btn-danger">Ajouter</button>
          </div>
        </form>
      </div>
      
      <ul class="list-group pb-5">
        <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
          <span class="item-text">PostgreSQL</span>
          <div>
            <button class="edit-me btn btn-success btn-sm mr-1">Editer</button>
            <button class="delete-me btn btn-warning btn-sm">Supprimer</button>
          </div>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
          <span class="item-text">NodeJS</span>
          <div>
            <button class="edit-me btn btn-success btn-sm mr-1">Editer</button>
            <button class="delete-me btn btn-warning btn-sm">Supprimer</button>
          </div>
        </li>
        <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
          <span class="item-text">Javascript</span>
          <div>
            <button class="edit-me btn btn-success btn-sm mr-1">Editer</button>
            <button class="delete-me btn btn-warning btn-sm">Supprimer</button>
          </div>
        </li>
      </ul>
      
    </div>
    
  </body>
  </html>`);
});

app.post("/", (req, res) => {
  console.log(req.body.item);
  res.send("POST successfully transmited !!");
});

app.listen(port);
