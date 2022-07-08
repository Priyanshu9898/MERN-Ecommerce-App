const express = require('express')
const dotenv = require('dotenv')
const errorMiddleware = require('./middleware/error');
const app = express();

app.use(express.json());

// Config
dotenv.config({path : "./config/config.env"});


// Connection of Database
const { connectDatabase } = require("./config/database");
connectDatabase();

// Router Imports

const product = require('./router/productRoute')

app.use("/api/v1", product);


// Error Middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 8000;


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`)
})