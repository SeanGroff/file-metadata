const express = require('express');
const multer = require('multer');

const routes = require('./src/routes');

const PORT = process.env.PORT || 1337;
const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static(`${__dirname}/public`));

app.get('/', routes.home);

app.post('/upload', upload.single('userFile'), routes.upload);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
