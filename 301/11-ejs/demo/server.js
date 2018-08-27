'use strict';

const express = require('express');
const pg = require('pg');

const app = express();

// Use this as a talking point about environment variables
const PORT = process.env.PORT || 3000;

const CONSTRING = process.env.DATABASE_URL || 'postgres://localhost:5432/hyperseek';
const client = new pg.Client(CONSTRING);
client.connect();

// Set the view engine for templating
app.set('view engine', 'ejs');

// Categories
let categories = ['Web Development', 'Front End Development', 'Back End Development']

// Links
let links = [
  {
    title: 'HTML Stuff',
    url: 'http://www.html.com',
    description: 'Lots of stuff about HTML',
    category: 'Web Development'
  },
  {
    title: 'CSS Stuff',
    url: 'http://www.css.com',
    description: 'Lots of stuff about CSS',
    category: 'Web Development'
  },
  {
    title: 'jQuery Stuff',
    url: 'http://www.jquery.com',
    description: 'Lots of stuff about jQuery',
    category: 'Front End Development'
  },
  {
    title: 'React Stuff',
    url: 'http://www.react.com',
    description: 'Lots of stuff about React',
    category: 'Front End Development'
  },
  {
    title: 'Angular Stuff',
    url: 'http://www.angular.com',
    description: 'Lots of stuff about Angular',
    category: 'Front End Development'
  },
  {
    title: 'Vue Stuff',
    url: 'http://www.vue.com',
    description: 'Lots of stuff about Vue',
    category: 'Front End Development'
  },
  {
    title: 'Python Stuff',
    url: 'http://www.python.com',
    description: 'Lots of stuff about Python',
    category: 'Back End Development'
  },
  {
    title: 'Java Stuff',
    url: 'http://www.java.com',
    description: 'Lots of stuff about Java',
    category: 'Back End Development'
  }
]

// Statics
app.use( express.static('./public') );

// Routes
app.get('/', showCategories);
app.get('/:category', showListings);

function showCategories(request, response) {
  response.render('categories', {items: categories});
}

function showListings(request, response) {
  let listings = links.filter( listing => listing.category === request.params.category );
  response.render('listings', {items: listings});
}

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
