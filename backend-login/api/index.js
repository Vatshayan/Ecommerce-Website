const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(4000, () => {
  console.log('Server is listening on port 4000...');
});