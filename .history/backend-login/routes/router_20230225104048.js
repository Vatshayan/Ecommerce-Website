const express = require('express');
const router = express.Router();

// Middleware function
const logger = (req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.originalUrl}`);
  next();
};

// Add the middleware function to the router
router.use(logger);

// Add other routes and middleware functions to the router
router.get('/', (req, res) => {
  res.send('Hello World!');
});

// Export the router
module.exports = router;
