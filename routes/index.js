const imagesRouter = require('./images.router');

function apiRouter(app) {
  app.use('/images', imagesRouter);
}

module.exports = apiRouter;
