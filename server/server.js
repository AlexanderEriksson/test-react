import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import basicRoutes from './routes/basic.js';
import userRoutes from './routes/userRoutes.js';
import messageRoutes from './routes/messageRoutes.js';

const PORT = 5000;

const app = express();
app.use(cors())
app.use(express.json())
app.use(basicRoutes)
app.use('/user', userRoutes)
app.use('/message', messageRoutes)


const CONNECTION_URL = "mongodb+srv://" + process.env.USERNAME + ":" + process.env.PASSWORD + "@chatcluster.f2qvy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => app.listen(PORT, () => console.log(`Server is running at ${PORT}`)))
    .catch((error) => console.log(error.message));