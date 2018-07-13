![cf](http://i.imgur.com/7v5ASc8.png) CRUD API Front End
===

## Learning Objectives
* Students will learn to implement basic CRUD operations from the front end

## Readings
* [json-schema](http://json-schema.org/)
* [json-schema-mongoose](https://www.npmjs.com/package/mongoose-schema-jsonschema)
* [json-schema-form](https://github.com/mozilla-services/react-jsonschema-form)


### CRUD Workflow in a React App
* Create a series of asynchronous helper functions using superagent to talk to your API Server
* Create a component that can fetch a list of records from your api (/get)
* Create a component that can fetch a single record for editing (/get/:id)
* Draw a form based on the schema of the data model
* Create a new record (/post) or update an existing one (/put/:id) via the form
* Implement /delete/:id

* The back-end will need to be altered to deliver "json-schema" to the front-end
