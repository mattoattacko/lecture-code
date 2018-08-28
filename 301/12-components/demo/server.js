'use strict';

const express = require('express');
const pg = require('pg');

let app = express();
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3000;

const CONSTRING = process.env.DATABASE_URL || 'postgres://localhost:5432/hyperseek';
let client = new pg.Client(CONSTRING);
client.connect();

app.use( express.static('./public') );

app.get('/', showCategories);
app.get('/:category', showLinks);

function showCategories( request, response ) {
  let SQL = "SELECT * FROM categories";
  client.query(SQL)
  .then( data => {
    let categories = data.rows;
    response.render('categories', {items:categories});
  })
}

function showLinks( request, response ) {
  let SQL = "SELECT categories.*, links.* FROM links INNER JOIN categories ON categories.id = links.category_id WHERE categories.category = $1";
  let values = [request.params.category];
  client.query(SQL, values)
  .then( data => {
    let listings = data.rows;
    response.render('links', {category:request.params.category, items:listings});
  })
}


app.listen( PORT, () => console.log("Server Up on ", PORT) );
