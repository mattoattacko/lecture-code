'use strict';

require('dotenv').config();
const superagent = require('superagent');
const express = require('express');
const pg = require('pg');

const PORT = process.env.PORT;
const CONSTRING = process.env.DATABASE_URL;

let app = express();
app.set('view engine', 'ejs');
app.use( express.urlencoded({extended:true}));

let client = new pg.Client(CONSTRING);
client.connect();

// ROUTES
app.get('/', showCategories);
app.get('/links/:category/:id', showLinks);
app.get('/search/:category/:id', searchGoogle);
app.get('/add-link/:category/:id', addLinkForm);
app.post('/add-link', addLink);

// ------------------------------------------------------ //

function showCategories( request, response ) {
  let SQL = "SELECT * FROM categories";
  client.query(SQL)
  .then( data => {
    let categories = data.rows;
    response.render('pages/categories', {items:categories});
  })
}

function showLinks( request, response ) {
  let category = request.params.category;
  let id = request.params.id;
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

function addLinkForm( request, response ) {
  let data = {
    category: request.params.category,
    id: request.params.id
  };

  response.render('pages/add-link-form', data);
}

function addLink( request, response ) {
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
      response.render('pages/added', {listing:request.body});
    })

}

function searchGoogle( request, response ) {
  let googleURL = 'https://www.googleapis.com/customsearch/v1?cx=005508244765091263853:4duqobz0ceo&key=AIzaSyA_2oJ5qNeQsLbwx8QQCigjIWAAYt9b_2I&q=' + encodeURIComponent(request.params.category);

  superagent.get(googleURL)
    .then( results => {
      let listings = results.body && results.body.items && results.body.items.reduce( (items,item) => {
        let listing = {
          title:item.title,
          url: item.link,
          description: item.snippet,
          category_id: request.params.id,
          category: request.params.category
        };
        items.push(listing);
        return items;
      },[]);

      let dataForTemplate = {
        category:request.params.category,
        items: listings
      };

      response.render('pages/search', dataForTemplate);
    })
    .catch( console.error );
}

app.use( express.static('./public') );

app.listen( PORT, () => console.log("Server Up on ", PORT) );
