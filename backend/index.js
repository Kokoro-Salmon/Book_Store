import express, { request, response } from "express";
import { PORT, MongoDBURL } from './config.js';
import mongoose from "mongoose";
import { Book } from "./models/bookmodel.js";
import bookRoutes from './routes/bookRoutes.js';

const app = express();
app.use(express.json());
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome This is MERN .get()')
});


// app.listen(PORT, () => {
//     console.log(`App is Listening to Port ${PORT}`)
// });

app.use('/books', bookRoutes);


mongoose.connect(MongoDBURL)
    .then(() => {
        console.log('App connected to DB');


        app.listen(PORT, () => {
            console.log(`App is Listening to Port ${PORT}`)
        });

    })
    .catch((error) => {
        console.log(error);
    })

