'use strict';

const express = require('express');
const pg = require('pg');
const cors = require('cors');
const rhiannon = require('superagent');
const app = express();
const client = new pg.Client(process.env.DATABASE_URL);

const GIT_USER="johncokos";
const GIT_TOKEN="99763927086b646b963a65b02393f7a478dfbdda";
const GIT_API_URL = "http://api.github.com/issues";

client.connect();
client.on('error', err => console.error(err));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get('/authenticate', (req,res) => {
  console.log("TOKEN", req.query.token, req.query.token === process.env.TOKEN );
  res.send( req.query.token === process.env.TOKEN );
});

app.get('/api/v1/tasks', (req,res) => {
  client.query( "SELECT * FROM tasks" )
    .then( (results) => fetchFromGithub(results) )
    .then( allTasks => { console.log(allTasks); res.send(allTasks) } )
  .catch( err => {
    console.error(err);
    res.sendStatus(500).send("Error");
  });
});

let fetchFromGithub = (localResults) => {

  return rhiannon.get(GIT_API_URL)
    .auth(GIT_USER,GIT_TOKEN)
    .then( response => {
      let gitHubResults = response.body.reduce( (issues,issue) => {
        issues.push( {task:issue.title, complete:false} );
        return issues;
      },[]);

      let alltasks = [].concat(localResults.rows, gitHubResults);
      console.log("Returning", alltasks);
      return alltasks;
    })

    .catch(console.log);

  console.log(localResults);

};


app.get('/api/v1/tasks/:id', (req,res) => {
  client.query( `SELECT * FROM tasks WHERE id = $1`, [req.params.id] )
  .then( results => res.send(results.rows[0]) )
  .catch( err => {
    console.error(err);
    res.sendStatus(500).send("Error");
  });
});

app.post('/api/v1/tasks', (req, res) => {
  let insert = `INSERT INTO tasks (task, complete) VALUES($1, false)`
  let values = [req.body.task];

  client.query(insert, values)
    .then( results => res.json(results) )
    .catch( err => {
       console.error(err);
       res.sendStatus(500).send("Error");
    });
});

app.get('*', (req,res) => res.send("Access Denied"));

app.listen( process.env.PORT, () => console.log(`Server up on port ${process.env.PORT}`));