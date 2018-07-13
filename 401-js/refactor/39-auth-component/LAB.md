![cf](http://i.imgur.com/7v5ASc8.png) Authenticated Full Stack Applications
===

## Submission Instructions
  * Follow the instructions in the "Lab Instructions" documentation in the reference folder of the class repository  
  
### Overview
Create a full stack application with authenticated/authorized access to content. 

#### Feature Tasks
**Back End**
* Create an express server
* Implement the auth system within your express server
* Implement an API with a single model called 'article' which will manage an article in the mongo database
* Your express server should implement auth/auth on all write methods (create, update, delete) through middleware.  Protect each operation both with authentication as well as authentication
* Identify the capability you want to use to enforce access restrictions on with each route.
* Identify which (if any) model behaviors you want to enforce access restrictions on.

**Front End**
* Implement a navigation bar with a "Home" and a "Login" link
* Display one article from the database
* If the user has not logged in, the article simply shows
* If the user is logged in and has "like" permissions, show a "like" link which, when clicked will increase the number of "likes" on the article by 1.
* If the user is logged in and has "update" permissions, draw the article text in a form and provide a submit button allowing the user to perform a "PUT" operation on the article through your API.

***Edge Case** -- "like" is an "update" but on a single field. How will you do this in the generic API, but specifically for this model?*

#### Test
* Test your redux reducers 
* Test your util methods
* Test your auth component with mocked users/tokens
* Test your API and Auth Middleware

#### Documentation  
Write a description of the project in your README.md, including detailed instructions for how to build your app. In your frontend README.md add a code block with your frontend .env vars, and in your backend README.md add a code block with your backend .env vars. 
