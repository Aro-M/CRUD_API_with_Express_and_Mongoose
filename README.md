# CRUD_API_with_Express_and_Mongoose


This is a simple CRUD (Create, Read, Update, Delete) API built with Express.js and MongoDB using Mongoose.

## Prerequisites

Make sure you have the following software installed on your machine:

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Aro-M/CRUD_API_with_Express_and_Mongoose.git
   ```
   
Install the dependencies:
```
cd your-repo
npm install
```
Set up the MongoDB connection:

Make sure MongoDB is running on your machine.
Update the <b>url</b> variable in <b>server.js</b> with your MongoDB connection URL.

Start the server:
```
npm start
```

The server will start running on http://localhost:3000.

Test the API endpoints using an API testing tool like Postman.

To create a new user: Send a POST request to http://localhost:3000/users with the user data in the request body.
To retrieve all users: Send a GET request to http://localhost:3000/users.
To retrieve a specific user: Send a GET request to http://localhost:3000/users/:id, where :id is the user ID.
To update a user: Send a PUT request to http://localhost:3000/users/:id, where :id is the user ID, with the updated user data in the request body.
To delete a user: Send a DELETE request to http://localhost:3000/users/:id, where :id is the user ID.
