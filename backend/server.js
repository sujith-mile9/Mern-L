import express from 'express';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productsRouters from './routes/productsRoutes.js'
import useRoutes from './routes/useRoutes.js'
import cookieParser from 'cookie-parser';
import orderRoutes from './routes/orderRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5000

const app = express()

connectDB()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.get('/', (req,res)=>{
    res.send('api is running....!')
})

app.use('/api/products',productsRouters)
app.use('/api/users',useRoutes)

app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal', (req, res) =>
    res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
  );

app.use(notFound)
app.use(errorHandler)
app.listen(port, ()=>console.log(`Server running on ${port}`))