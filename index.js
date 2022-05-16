const express = require('express');
const apiRouter = require('./routes');
const db = require('./lib/mongoose');

const path = require('path');
const app = express();
const port = 3000;

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const uploadFile = require('./lib/s3');

app.use(express.json());
// app.get('/', (req, res) => {
//   res.send('hello');
// });
db();
apiRouter(app);

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file);
  const result = uploadFile(req.file);
  console.log(result);
  res.send('listo');
});

app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(port, () => {
  console.log(`listen in port ${port}`);
});
