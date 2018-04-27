'use strict';

const ENVIRONMENT = {};
const app = {};

let productionApiUrl = 'https://cokos-server.herokuapp.com';
let developmentApiUrl = 'http://localhost:3000';

ENVIRONMENT.isProduction = window.location.protocol === 'https:';

ENVIRONMENT.apiUrl = ENVIRONMENT.isProduction ? productionApiUrl : developmentApiUrl;

function show(id) {
  $('section').not(`#${id}`).hide();
  $(`#${id}`).show();
}

function render(templateId, data) {
  let template = Handlebars.compile($(`#${templateId}`).text());
  return template(data);
}
