import express from 'express';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productsRouters from './routes/productsRoutes.js'
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5000


const app = express()

connectDB()

app.get('/', (req,res)=>{
    res.send('api is running....!')
})

app.use('/api/products',productsRouters)

app.use(notFound)
app.use(errorHandler)
app.listen(port, ()=>console.log(`Server running on ${port}`))