# Deploy-mern

### Table of contents

- [Project structure](#Project-structure)
- [API endpoints](#API-endpoints)
- [Getting started](#Getting-started)

## Project structure

- client/src: React components for the user interface
- index.js : point of entry, also known as server.
- routes : includes the API end points definition
- models : Mongoose database Schemas

## API endpoints

- `POST /quotes/post ` - create a new document containing a quote and the corresponding author.
- `GET /quotes/get ` - get all the quotes from the database.

## Getting started

Run the following commands:

```bash
$ git clone https://github.com/hawa-bah/deploy-mern
$ npm run customInstall
```

## Setting up for deployment

- Make ".env" file
- Add MONGO_STRING

```bash
MONGO_STRING = 'mongodb+srv://<username>:<password>@cluster0.1a7yh.mongodb.net/<collectionName>?retryWrites=true&w=majority'
```
