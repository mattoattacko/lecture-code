# 401 Refactor Notes

### Things we need to add or talk about that are not currently part of the course
  - Next.js (Server side React)
  - React Native (basics)
  - Using AWS instead of Mongo/Heroku/Travis for deployments
  - We spend so much time on node APIs, should we focus that on AWS+Lambda?
  - Setting up a server as a middleware/service layer rather than a server
  - Docker
  - Electron

---
## What "production ready" code/sandboxing should students leave JS 401 With?

### Data Structures Library
 - Fully tested, modularized implementations (classes)
 - Challenges that use the implementations

### Chat Server
  - TCP
  - Socket I/O
  - Event Driven Pub/Sub system
  - Can we roll this into all of our code?

### Generic API Server
 - Model Agnostic (Scalable)
 - Authenticated
   - Basic, Oauth
   - Bearer Tokens
   - ACL (Simple)
 - Swaggerized
 - Tested
 - Accepts plugins
  - Payment System
  - Custom Routing and Models

### React Scaffold
  - Basic "Get Started" React App based on create-react-app
  - Redux Generic Store
   - Not plugged in by default, but easily "turned on"
  - Routing (browser/memory)
  - SCSS Themes and Mixins
   - Core layout libraies
   - Font ramps, typography
   - Grid and Card/Deck systems
   - Easily plugin component specific styling (for layout) and overrides (discouraged)
  - utils.js library of helper functions

### React Components (Portable, Pluggable)
  - `<Header />`
  - `<Footer />`
  - `<Modal />`
  - `<Auth />`
  - `<Rotator />`
  - `<Autocomplete />`
  - `<Draggable />` and `<Droppable />`

### React Based CMS
  - Built from the generic stuff above
  - Connects to our core backend API
  - Model agnostic CRUD
  - Relies on JSON Schema

### React Based e-commerce site
  - Pulls data from our API Server (setup with tables to support a store)
  - Uses data sourced/managed by the aforementioned CMS
  - Category / Product Browser
  - Product Details Page
  - Add to cart
  - Manage Cart (quantities, removal)
  - Checkout
   - Form to submit order and CC
   - Hits a "payment" route on the server

---

## Course Lecture / Classroom Rhythm Suggestions

Instead of daily labs, the proposal here is to teach it up and give them practice assignments for 4 days (which should take them a max of 3-4 hours) which cement the concepts through refactoring, adjustments, and generally diving it ... and then on Friday, assign a project lab which is due Sunday at midnight -- which is an assembly of all that was taught so far.  So, 4 "daily pracice sessions" and a bigger "build it" lab for each week. Suggestion: Have them pair up on the weekly project.

Practice labs are to be due at midnight each day and locked down (no re-submits). From a grading standpoint, each of them could be worth 5 points, and the weekend lab worth 30, so it's 50 points for each week for lecture code.

Most weeks, there is also a new Data Structure taught on Friday, which is also due on Sunday. Thats generally a shorter lecture, so from a scheduling perspective, the students should have a solid 7 hours on Friday to pair up on the project lab each week. The DSA Implementation should be done solo, over the weekend.

In looking at grading and points, there are 50 points per week from lecture/practice assignments, and 30 points for DSAs (20 from whiteboarding, and 10 for implmenting the new data structure). That's a total of 80 points. Currently, we separate code from whiteboards (15%/10%) and this point structure roughly matches that both in terms of time spent and point values. Do we want to further simplify this and make "Code" (which covers all of it) just be 25%?

Lecture Schedule (M-Th)
- :05 - Housekeeping and Preview
- :30 - Whiteboard / DSA Review
- :15 - Lightning Talk (Student)
- Break
- :30 - Server/JS Topic || CSS or Generic React Component
- :20 - Code Review / Refactor
- Break
- :60 - New Concept, Code Demo & Lab Prep


Lecture Schedule (Fri)
- :05 - Housekeeping and Preview
- :30 - Whiteboard / DSA Review
- :15 - Lightning Talk (Student)
- Break
- :60 - New Data Structure Introduced and Demo
- :10 - Project (Lab) overview and assignment

---
## Proposed Class Order

| Week 1 | Week 2 | Week 3 | Week 4 |
|:--------------------------:|:---------------------------:|:-------------------------:|:---------------------------:|
| 01-node-ecosystem | 06-tcp-server | 11-express | 16-basic-authentication |
| 02-object-array-mastery | 07-socket-io-server | 12-express-middleware | 17-oauth |
| 03-classes-inheritance-fp | 08-vanilla-http-rest-server | 13-mongo-mongoose-orm | 18-bearer-authorization |
| 04-async | 09-persistence | 14-relationship-modeling | 19-acl-authorization |
| **Build a DB/State Manager** | **Build something cool** | **Build Generic API** | **Build Authenticated API** |
|  |  |  |  |
| Week 6 | Week 7 | Week 8 | Week 9 |
| 26-component-based-ui-101 | 31-crud | 36-authentication | 41-aws-websites |
| 27-testing-and-deployment | 32-dynamic-forms | 37-authorization | 42-aws-api-db-lamba |
| 28-forms-props-state | 33-remote-api | 38-paymemt-gateways | 40-react-native |
| 29-component-composition | 34-remote-crud | 39-web-security | 41-app-store-deployments |
| **Build a react "kick-start"** | **Build a generic CMS** | **Build an e-commerce store** | **Refactor & Deploy store/cms** |

---

## 1st Half Details
### Week 1
**Overview/Goals:** Language deep dive and tooling ramp-up. Students should come out of this week ready to work on projects, deploy, do proper TDD, and have a solid foundation on Classes, Inheritance, Async, Functional Programming, Spread and Deconstruction

**LAB:** Build a "Database / State Manager." Effectively, this is the old "list constructor", but using the all of the techniques from the week. The goal should be a list that can is stored to and retrieved from the filesystem. As a means of implementation, we can write "redux light" and make it a server-module and introduce that whole concept right now ... perhaps combining redux and the list? *We can use this on day 9 as well as to be a future module for storing configs or other things for future servers we write*

#### 01-node-ecosystem
  - **Lightning Talk:** Course Setup, Intro, Process, Tools, Expectations, Rubrics, How to submit code and lab assignments, etc
  - **Server Concept:** What is node and npm, package.json deep dive
  - **Lecture Topic:**
     - tdd, deployment and continuous integration via git and travis
     - greet module
  - **Homework:**
    - arithmetic module

#### 02-object-array-mastery (replaces 04-data-modeling-and-binary)
  - **Lightning Talk:**
  - **Server Concept:**
  - **Lecture Topic:** spread, deconstruction
  - **Homework:**

#### 03-classes-inheritance-fp (re-order & re-name 02-tools-and-context)
  - **Lightning Talk:**
  - **Server Concept:**
  - **Lecture Topic:** Classes, Inheritance (prototypal and classes), statics, functional programming.
  - **Homework:**

#### 04-async
  - **Lightning Talk:**
  - **Server Concept:**
  - **Lecture Topic:** Callbacks, Promises, async/await
  - **Homework:**
    - Practice with simple callbacks - convert to promises - convert to async/await
    - Practice with promise.all()
    - Write a promisify() function
    - LAB: Read in 3 files content, return an array of content "in the right order"
      - Do it all 3 ways (cb,p,a/a)



### Week 2

**Overview/Goals:** Should learn this stuff ...

**LAB:** Project description here ...

#### 06-tcp-server
  - **Lightning Talk:**
  - **Server Concept:** Event Driven Apps (Observer Pattern)
  - **Lecture Topic:** Networking via TCP Protocol
  - **Homework:**


#### 07-socket-io-server (replaces 07-http-server)
Lets build this (and 06) as bolt-on server modules so they can be added to an express server as well as being standalone
  - **Lightning Talk:**
  - **Server Concept:**
  - **Lecture Topic:**
  - **Homework:**


#### 08-vanilla-http-rest-server (combines the old 07 & 08)
The only difference in the old 07/08 was the restful endpoints.
  - **Lightning Talk:**
  - **Server Concept:**
  - **Lecture Topic:**
  - **Homework:**
    - HTTP server with the all of the REST endpoints setup as "hello world"
    - Implement cowsay on get.
    - Important that the "route" file matches express syntax so that we can hot-swap it.


#### 09-persistence
  - **Lightning Talk:**
  - **Server Concept:** Modularity and scalability
  - **Lecture Topic:** Instructor implements a model class and memory persistence, modularly.
  - **Homework:**
    - Students bolt on file persistence


### Week 3

**Overview/Goals:** Should learn this stuff ...

**LAB:** Maybe this project is to build a pinterest app (without authentication) that uses all of the REST verbs and uploads to S3. Creates an API that could drive a front-end app (hint-hint)

#### 11-express
  - **Lightning Talk:**
  - **Server Concept:**
  - **Lecture Topic:**
  - **Homework:**


#### 12-express-middleware
  - **Lightning Talk:**
  - **Server Concept:**
  - **Lecture Topic:**
  - **Homework:**
    - Can we somehow work in S3 here?


#### 13-mongo-mongoose-orm (Renamed)
  - **Lightning Talk:**
  - **Server Concept:**
  - **Lecture Topic:**
  - **Homework:**


#### 14-relationship-modeling
  - **Lightning Talk:**
  - **Server Concept:**
  - **Lecture Topic:** Introduce the concept of populate() and virutal fields / mappings
  - **Homework:**


### Week 4

**Overview/Goals:** Should learn this stuff ...

**LAB:** Project description here ...

#### 16-basic-authentication
  - **Lightning Talk:**
  - **Server Concept:**
  - **Lecture Topic:**
  - **Homework:**


#### 17-oauth (re-order from day 18)
  - **Lightning Talk:**
  - **Server Concept:**
  - **Lecture Topic:**
  - **Homework:**


#### 18-bearer-authorization (re-ordered from day 17)
  - **Lightning Talk:**
  - **Server Concept:**
  - **Lecture Topic:**
  - **Homework:**


#### 19-acl-authorization (replaces s3-file uploads)
  - **Lightning Talk:**
  - **Server Concept:**
  - **Lecture Topic:**
  - **Homework:**



---

## 2nd Half Modifications / Class Order
Week 2
31	CRUD
32	Dynamic Forms
33	Remote API
34	CRUD Remotely

Week 3
36	Redux
37	Redux Middleware
38	Async (Thunk)
39	Combined Reducers

Week 4
41	Authentication
42	Authorization
43	Searching
44	Rotators
### Week 6

**Overview/Goals:** Should learn this stuff ...

**LAB:** Project description here ...

#### 26-component-based-ui-101 (renamed frontend-tooling-and-react)
  - **Lightning Talk:**
  - **UI Concept:** Sass and scalable CSS Architecture
  - **Lecture Topic:**
    - Component Based UI
    - Basic React App with a simple store to hold the app title
    - Header/Footer connect to the store to use the title
    - Counter component with its own state to manage the counter
    - https://codesandbox.io/s/017yk47r00
  - **Homework:**
    - Create a CSS "theme" to pass down component .sass files
    - Change the store to change the title
    - Add properties to the store (like address/phone?)
    - Add a count-by property to the store
      - Connect the counter to get it, and then let the counter reference that to count differently
    - Style the counter to handle +/- values in an interesting way
    - Change the counter to do the alphabet instead of counting numbers
      - Yes ... it should rotate around!

#### 27-testing-and-deployment
  - **Lightning Talk:**
  - **UI Concept:**
  - **Lecture Topic:**
  - **Homework:**

#### 28-forms-props-state
  - **Lightning Talk:**
  - **UI Concept:**
  - **Lecture Topic:**
  - **Homework:**

#### 29-component-composition
  - **Lightning Talk:**
  - **UI Concept:**
  - **Lecture Topic:**  Child Components (this.props.children)
  - **Homework:**

### Week 7

**Overview/Goals:** Should learn this stuff ...

**LAB:** Project description here ...

#### 31-redux
  - **Lightning Talk:**
  - **UI Concept:**
  - **Lecture Topic:**
  - **Homework:**

#### 32-combining-reducers
  - **Lightning Talk:**
  - **UI Concept:**
  - **Lecture Topic:**
  - **Homework:**

#### 33-redux-middleware
  - **Lightning Talk:**
  - **UI Concept:**
  - **Lecture Topic:**
  - **Homework:**

#### 34-xxx
  - **Lightning Talk:**
  - **UI Concept:**
  - **Lecture Topic:**
  - **Homework:**

### Week 8

**Overview/Goals:** Should learn this stuff ...

**LAB:** Project description here ...

#### 36-asynchronous-actions
  - **Lightning Talk:**
  - **UI Concept:**
  - **Lecture Topic:**
  - **Homework:**

#### 37-authentication
  - **Lightning Talk:**
  - **UI Concept:**
  - **Lecture Topic:**
  - **Homework:**

#### 38-authorization-acl
  - **Lightning Talk:**
  - **UI Concept:**
  - **Lecture Topic:**
  - **Homework:**

#### 39-auth-component
  - **Lightning Talk:**
  - **UI Concept:**
  - **Lecture Topic:**
  - **Homework:**

### Week 9

**Overview/Goals:** Should learn this stuff ...

**LAB:** Project description here ...

#### 41-crud-api-frontend
  - **Lightning Talk:**
  - **UI Concept:**
  - **Lecture Topic:**
  - **Homework:**

#### 42-storefront
  - **Lightning Talk:**
  - **UI Concept:**
  - **Lecture Topic:**
  - **Homework:**

#### 43-xxx
  - **Lightning Talk:**
  - **UI Concept:**
  - **Lecture Topic:**
  - **Homework:**

#### 44-xxx
  - **Lightning Talk:**
  - **UI Concept:**
  - **Lecture Topic:**
  - **Homework:**

#### 45-xxx
  - **Lightning Talk:**
  - **UI Concept:**
  - **Lecture Topic:**
  - **Homework:**