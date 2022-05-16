const imagesRouter = require('./images.router');
const categoriesRouter = require('./categories.router');

function apiRouter(app) {
  app.use('/images', imagesRouter);
  app.use('/categories', categoriesRouter);
}

module.exports = apiRouter;
