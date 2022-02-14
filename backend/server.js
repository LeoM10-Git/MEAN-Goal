const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const goalRoutes = require('./routes/goalRoutes');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middleware/errorMiddleware')
const app = express();
const connectDB = require ('./config/db')

connectDB()

app.use(express.json());
// for url encoded
app.use(express.urlencoded({ extended: false}))



app.use('/api/goals', goalRoutes)
app.use('/api/users', userRoutes)
app.use(errorHandler)


app.listen(port, () => console.log(`listening on port ${port}` ))