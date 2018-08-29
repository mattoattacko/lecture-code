'use strict';

require('dotenv').config();

const express = require('express');
const pg = require('pg');

const PORT = process.env.PORT;
let app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const CONSTRING = process.env.DATABASE_URL;
let client = new pg.Client(CONSTRING);
client.connect();

app.get('/', showCategories);
app.get('/links/:category/:category_id?', showLinks);
app.get('/add-link/:category/:category_id', showAddLinkForm);
app.post('/add-link', addLinkToDatabase);

function showCategories( request, response ) {
  let SQL = "SELECT * FROM categories";
  client.query(SQL)
  .then( data => {
    let categories = data.rows;
    response.render('pages/categories', {items:categories});
  })
}

function showLinks( request, response ) {
  console.log('p', request.params);
  console.log('b', request.body);
  let category = request.params.category;
  let id = request.params.category_id;
  let SQL = `
  SELECT categories.category, links.*
    FROM links
    INNER JOIN categories
    ON categories.id = links.category_id
    WHERE categories.category = $1
  `;
  let values = [category];

  client.query(SQL,values)
  .then( data => {
    let listings = data.rows;
    response.render('pages/links', {category:category, id:id, items:listings});
  })
}

function showAddLinkForm( request, response ) {
  response.render('pages/add-link', {params:request.params});
}

function addLinkToDatabase( request, response ) {

  let SQL = `
    INSERT INTO links (category_id, title, url, description, keywords) 
    VALUES( $1, $2, $3, $4, $5 )
  `;

  let values = [
    request.body.category_id,
    request.body.title,
    request.body.url,
    request.body.description,
    request.body.keywords
  ];

  client.query(SQL, values)
    .then( () => {
      request.params.category = request.body.category;
      request.params.category_id = request.body.category_id;
      showLinks(request,response);
    })
    .catch( error => { console.error(error); })
}


app.use( express.static('./public') );

app.listen( PORT, () => console.log("Server Up on ", PORT) );
