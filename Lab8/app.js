const express = require('express');

const app = express();
app.use(express.json());
require('./routes/category.routes')(app);
app.listen(3000, () => console.log('server is running at port 3000'));

