# Mini-Project: Library CRUD Application

## Project Description

The Mini-Project: Library CRUD Application is a web application designed for managing book collections in a library. Built using technologies like React, TypeScript, PostgreSQL, Nginx, and Nest.js, this application enables users to perform basic CRUD operations, allowing them to add, edit, delete, and view information about books.

## Technologies Used

The project leverages the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types to the language.
- **PostgreSQL**: A relational database used to store information about books.
- **Nginx**: A web server and reverse proxy responsible for handling HTTP requests.
- **Nest.js**: A progressive Node.js framework for building efficient, scalable server-side applications.
- **Docker**: Containerization platform for packaging and deploying applications.

## Running the Project

### Using Docker and Docker Compose
1. Install necessarry dependencies
     run `yarn` in api and client folders
2. Install Docker and Docker Compose.
3. Download pgAdmin4 and register server
  - host name: localhost,
  - port: 5432,
  - username: root,
  - password: root,
  - maintance database: test_db
4. Build and run the containers:
    `docker-compose up`

## Ports
- **http://localhost:4000**: Client
- **http://localhost:3001/api**: Api
