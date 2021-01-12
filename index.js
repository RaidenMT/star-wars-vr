const express = require('express')
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/', router);

app.listen(process.env.port || 3000, () => {
  console.log('Example app listening on port 3000!')
});