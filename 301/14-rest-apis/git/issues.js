'use strict';

const superagent = require('superagent');

let GIT_USER="johncokos";
let GIT_TOKEN="99763927086b646b963a65b02393f7a478dfbdda";
let GIT_API_URL = "http://api.github.com/issues";

superagent.get(GIT_API_URL)
  .auth(GIT_USER,GIT_TOKEN)
  .then(response => {
    return response.body.reduce( (issues, issue) => {
      issues.push({title:issue.title, url:issue.html_url})
      return issues;
    }, []);
  })
  .then(console.log)
  .catch(console.err);
