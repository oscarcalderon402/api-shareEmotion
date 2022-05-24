const express = require('express');
const apiRouter = require('./routes');
const db = require('./lib/mongoose');

const path = require('path');
const app = express();
const port = 3000;
require('./utils/auth');
const {
  logErrors,
  errorHandler,
  boomErrorHandler
} = require('./middleware/error.handler');

app.use(express.json());

db();

//router
apiRouter(app);

//middleware
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(port, () => {
  console.log(`listen in port ${port}`);
});
