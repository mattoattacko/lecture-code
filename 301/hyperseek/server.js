'use strict';

require('dotenv').config();
const express = require('express');
const pg = require('pg');
const superagent = require('superagent');

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
app.get('/search/:category/:id', runSearch);
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

function runSearch( request, response ) {
  // https://www.googleapis.com/customsearch/v1?cx=005508244765091263853:4duqobz0ceo&key=AIzaSyA_2oJ5qNeQsLbwx8QQCigjIWAAYt9b_2I&q=Web%20Development

  let url = 'https://www.googleapis.com/customsearch/v1';
  let params = {
    cx:process.env.GOOGLE_CX,
    key:process.env.GOOGLE_KEY,
    q:encodeURIComponent(request.params.category)
  };
  let queryString = '';
  Object.keys(params).forEach( (val) => {
    queryString += val + "=" + params[val] + '&';
  });

  url = url + '?' + queryString;

  superagent.get(url)
    .then( results => {
      let listings = results.body.items.reduce( (items,item,idx) => {
        let listing = {
          title:item.title,
          url: item.link,
          description: item.snippet,
          category: request.params.category,
          category_id: request.params.id
        };
        items.push(listing);
        return items;
      },[]);

      response.render('pages/search', {category:request.params.category, id:request.params.id, items:listings})

    });

}
app.use( express.static('./public') );

app.listen( PORT, () => console.log("Server Up on ", PORT) );
