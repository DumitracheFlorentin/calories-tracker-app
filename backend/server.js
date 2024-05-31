require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const userRoutes = require('./routes/user')
const mealRoutes = require('./routes/meal')
const reviewRoutes = require('./routes/review')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
)

mongoose.connect(process.env.MONGO_URI)

app.use('/api', userRoutes)
app.use('/api/meals', mealRoutes)
app.use('/api/reviews', reviewRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
