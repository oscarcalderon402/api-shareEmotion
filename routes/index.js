const express = require('express');
const imagesRouter = require('./images.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const authRouter = require('./auth.router');

function apiRouter(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/images', imagesRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/auth', authRouter);
}

module.exports = apiRouter;
