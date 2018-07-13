![cf](http://i.imgur.com/7v5ASc8.png) 41: CRUD API (Frontend)
===

## Submission Instructions
  * Work in a fork of this sandbox: https://codesandbox.io/s/5wl6zv3q2n
  * For each major task below ...
    * create a new fork from the current task
    * submit the URL to the fork
  * Continue to deploy your back-end to Heroku 
  * Point your sandbox API's at the Heroku backend (when you are ready to submit)
  * In canvas, your submission should contain a link to each fork. 
  
#### Feature Tasks  

#### backend
* Add support for json-schema in your models
* Add an `/api/v1/:model/schema` route to fetch the schema for a model

#### Add support for post and delete
 * Implement post and delete handlers in the api module
 * Hook up the form to call your put method with the form data
 
#### Refactor: Modularize it
 * Create a new component for the records list (separate file)
 * Create a new component for the record editor (separate file)
 
#### Modalize the form
 * Bring in the modal component and pop that up to edit a record instead of an inline form
 
#### Flavor it
 * The stock layout is pretty ugly. Please change that.
 * Bring in the header and footer components
 * Build a nav bar with 2 links: `/home` which links to a blank home page and `/cms` which should link to your cms component
 
#### STRETCH GOAL ... Reduxify It
 * Refactor the react-style state into a redux store
 * Report on your findings ... 
   * was this easy or difficult to do?  
   * What advantages or disadvantages does Redux provide for us here?
  

