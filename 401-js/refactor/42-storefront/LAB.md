![cf](http://i.imgur.com/7v5ASc8.png) React Storefront
===

## Submission Instructions
  * Work in a fork of this sandbox: https://codesandbox.io/s/3q9xxx1mq5
  * For each major task below ...
    * create a new fork from the current task
    * submit the URL to the fork
  * Continue to deploy your back-end to Heroku 
  * Point your sandbox API's at the Heroku backend (when you are ready to submit)
  * In canvas, your submission should contain a link to each fork. 
  
#### Feature Tasks  

#### Shopping Cart
 * When a user clicks on a product, add it to the cart (state) and render it in the "cart" div
 * Provide a delete link to let the user remove an item from the cart
 * Provide an input for each item to let the user specify quantity
 * Create a post handler for the cart that creates a JSON object containing the quantities and IDs of the items in the cart. `console.log()` that object 
 
#### Refactor: Data Source
 * In the first pass, we are fetching all of the products and live filtering them ...
 * Change the system to only load products from the server when the category is clicked on
 * This will actually be loading the `/api/v1/categories` route, as this uses "virtual" population to get you the list of products.
 
#### Refactor: Cache the data
 * Change from using the `api.get()` method in the api.js library
 * Switch to the cache-able `utils.fetchData()` method in the utils.js library
 * Evaluate, Discuss, Report ways to invalidate the local storage cache (maybe by day, session, etc)
 
#### Refactor: Modularize it
 * Create a new component for the categories list (separate file)
 * Create a new component for the products list (separate file)
 * Create a new component for the shopping cart (separate file)
 
#### Flavor it
 * The stock layout is pretty ugly. Please change that.
 * Bring in the header and footer components
 * Build a nav bar with 2 links: `/home` which links to a blank home page and `/store` which should link to your store component

