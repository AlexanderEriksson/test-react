const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser")
const mongoose = require("mongoose");
import basicRoutes from './routes/basic.js';
import userRoutes from './routes/userRoutes.js';
import messageRoutes from './routes/messageRoutes.js';

PORT = 5000;

const app = express();
app.use(cors())
app.use(express.json())
app.use(basicRoutes)
app.use('/user', userRoutes)
app.use('/message', messageRoutes)


CONNECTION_URL = "mongodb+srv://AlexAndErik:wWAyfeNOpdLpOmi2@chatcluster.f2qvy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => app.listen(PORT, () => console.log(`Server is running at ${PORT}`)))
    .catch((error) => console.log(error.message));