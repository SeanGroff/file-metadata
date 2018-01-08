require('dotenv').config();

const express = require('express');

const PORT = process.env.PORT || 1337;
const app = express();

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
