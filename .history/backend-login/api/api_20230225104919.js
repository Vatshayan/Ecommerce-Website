const express = require('express');
const app = express();

const api = require('./api');

app.use('/api', api);

app.listen(4000, () => {
  console.log('Server is listening on port 4000...');
});
