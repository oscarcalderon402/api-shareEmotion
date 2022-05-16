const express = require('express');
const apiRouter = require('./routes');
const db = require('./lib/mongoose');

const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('hello');
});
db();
apiRouter(app);
app.listen(port, () => {
  console.log(`listen in port ${port}`);
});
