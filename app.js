const express = require('express');
const path = require('path');
const apiRouter = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middleware/error.handler');

function createApp() {
  const app = express();
  app.use(express.json());

  apiRouter(app);
  //middleware
  app.use(logErrors);
  app.use(boomErrorHandler);
  app.use(errorHandler);

  //   app.use(express.static(path.join(__dirname, 'public')));

  app.get('/', (req, res) => {
    res.status(300).send('hello new');
  });

  //   app.get('*', (req, res) => {
  //     res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  //   });

  return app;
}

module.exports = createApp;
