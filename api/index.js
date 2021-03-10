const express = require('express')
const bodyParser = require('body-parser');
// Create express instance
const app = express()
const session = require('express-session');

// Require API routes
const users = require('./routes/users')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// initialize express-session
app.use(
  session({secret: 'randomString', resave: false, saveUninitialized: false, cookie: {maxAge: 3600000}})
);

// Import API Routes
app.use(users)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
