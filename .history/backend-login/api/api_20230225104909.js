const express = require('express');
const app = express();

const api = require('./api');

app.use('/api', api);

app.listen(3000, () => {
  console.log('Server is listening on port 3000...');
});
