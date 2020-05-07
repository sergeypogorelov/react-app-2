const path = require('path');
const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

const port = 8080;
app.listen(port, () => console.log(`Listening on ${port}.`));
