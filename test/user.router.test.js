const request = require('supertest');
const apiRouter = require('../routes/index');

const createApp = require('../app');

jest.mock('../services/users.service', () =>
  jest.fn().mockImplementation(() => ({
    find: [],
    create: () => {},
  }))
);

describe('Test for hello endpoint', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();

    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /', () => {
    test('should return status 200', async () =>
      request(app).get('/api/v1/users').expect(400));
  });
});
