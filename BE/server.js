const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE_LOCAL;

mongoose
    .connect(DB, {
        // useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(con => {
        console.log('DB Connection Successfull');
    });

const port = 8080;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});