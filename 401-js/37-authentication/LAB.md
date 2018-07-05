![cf](http://i.imgur.com/7v5ASc8.png) Authentication and Cookies
===

## Submission Instructions
  * Work in a fork of this sandbox: [Redux Scaffold](https://codesandbox.io/s/kk4n51n1yo)
  * Submit a link to your fork in canvas
  * Submit a question, observation, and how long you spent on canvas 

## Requirements  
#### backend/
* Use your fully wired "Auth/OAuth" server from class 14
* Use a mongo database
* Use your Google Developers Account for hooking up OAuth

#### Feature Tasks 
- [ ] Create a frontend that follows react/redux best practices
- [ ] Create an auth component with a login form containing fields for Username and Password
- [ ] When the user enters their username and password, do a "GET" on your API's "/login" (or /signin) route with basic authentication headers

- [ ] Add a "Login with Google" link to the auth component which will properly interface with the /oauth route in your API

- [ ] On an unsuccessful login, give the user a visual error message and let them try again
- [ ] On an unsuccessful login, give the user a visual error message and let them try again
- [ ] In both cases, redirect the user to the dashboard page on signup or login 
- [ ] In both cases, store the users token in a cookie or localstorage on sign in 

#### Test
* Test your redux reducers 
* Test your util methods

## Stretch Goals
* Create a "Sign In" component that will POST a new user to your users table and return the token back.
* Implement OAuth for other providers (refer back to day 14 from other student groups) as separate modules on the back-end and as component options on the front end -- make this seemless and scalable!


#### Documentation  
Write a description of the project in a README.md, in the root folder of the app (in the sandbox) including detailed instructions for how to test and run your app. 

