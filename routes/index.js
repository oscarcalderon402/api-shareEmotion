const imagesRouter = require('./images.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const authRouter = require('./auth.router');

function apiRouter(app) {
  app.use('/images', imagesRouter);
  app.use('/categories', categoriesRouter);
  app.use('/users', usersRouter);
  app.use('/auth', authRouter);
}

module.exports = apiRouter;
