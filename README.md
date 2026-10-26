# Savage Auth

A small Express application for a 21 Savage fan site. Users can sign up and log in with a local email and password, then use a message board to post and remove messages.

## Requirements

- Node.js and npm
- A MongoDB database and a MongoDB connection URI

## Setup

1. Clone this repository and change into the project directory.
2. Install dependencies:

   ```sh
   npm install
   ```

3. Configure MongoDB in [`config/database.js`](./config/database.js). Set `url` to your MongoDB connection URI, including the database name in the URI path. For example:

   ```js
   module.exports = {
     url: 'mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority',
     dbName: '<database>'
   };
   ```

   The app connects using `url`; `dbName` is currently not used separately. Keep database credentials private and do not commit them.

## Run

Start the server:

```sh
node server.js
```

The app listens on port `8080` by default. Set the `PORT` environment variable to use a different port. Open <http://localhost:8080> in your browser.

## Features

- Local account signup and login
- Session-based authentication
- Message board on the profile page
- Message deletion

## Project layout

- `server.js` — configures and starts the Express server
- `app/routes.js` — page, authentication, and message-board routes
- `app/models/user.js` — user model and password helpers
- `config/` — database and Passport configuration
- `views/` — EJS page templates
- `public/` — browser JavaScript, styles, and images

## Credit

Modified from Scotch.io's authentication tutorial.
