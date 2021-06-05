const express = require('express');
const dbConfig = require('./db.config');

const app = express();
app.use(express.json());
const db = require('./models/index');

db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('db connected');
}).catch((err) => {
    console.log('failed to connect to db');
    console.log(err);
    process.exit();
})
require('./routes/product.routes')(app);
require('./routes/category.routes')(app);
app.listen(3000, () => console.log('server is running at port 3000'));

