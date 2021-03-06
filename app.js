const express = require("express");

const app = express();
const port = 1410;

const Item = require("./models/Item");

const db = require("./config/database");

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  Item.findAll().then(items => {
    res.send(`<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo-List NodeJS</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="/css/style.css" />
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
      ${items
        .map(function(item) {
          return `
              <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
              <span class="item-text">${item.dataValues.item}</span>
              <div>
                <button data-id="${item.dataValues.id}" class="edit-me btn btn-success btn-sm mr-1">Editer</button>
                <button data-id="${item.dataValues.id}" class="delete-me btn btn-warning btn-sm">Supprimer</button>
              </div>
            </li>`;
        })
        .join("")}
      </ul>
      
    </div>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="/js/edit.js"></script>
  </body>
  </html>`);
  });
});

app.post("/", (req, res) => {
  Item.create({
    item: req.body.item
  })
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/update-item", (req, res) => {
  Item.update(
    { item: req.body.itemUpdated },
    {
      where: {
        id: req.body.id
      }
    }
  );
});

app.post("/delete-item", (req, res) => {
  Item.destroy({
    where: {
      id: req.body.id
    }
  });
});

app.listen(port);
