const db = require('./lib/mongoose');
const createApp = require('./app');

const app = createApp();
const port = 3000;
require('./utils/auth');

db();

app.listen(port, () => {
  console.log(`listen in port ${port}`);
});
