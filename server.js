<<<<<<< HEAD
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
//import oussama from 'oussama'
import { notFoundError, errorHandler } from './middlewares/error-handler.js';
=======
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";


<<<<<<< HEAD
import gameRoutes from './routes/game.js';
import userRoutes from './routes/user.js';
import achatRoutes from './routes/achat.js';
//khouloud
=======
import { notFoundError, errorHandler } from "./middlewares/error-handler.js";
>>>>>>> a66056648f5ab4661e9cce668d0c76e595ddc22c

import gameRoutes from "./routes/game.js";
import userRoutes from "./routes/user.js";
import achatRoutes from "./routes/achat.js";
/////commit maryem
>>>>>>> a7da0a218c7f61a4a324342c1db15e906be3a774

const app = express();
const port = process.env.PORT || 9090;
const databaseName = "exerice4gamix2122";

mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
  .connect(`mongodb://127.0.0.1:27017/${databaseName}`)
  .then(() => {
    console.log(`Connected to ${databaseName}`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
<<<<<<< HEAD
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/img', express.static('public/images'));
=======
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/img", express.static("public/images"));
>>>>>>> a7da0a218c7f61a4a324342c1db15e906be3a774

app.use("/game", gameRoutes);
app.use("/user", userRoutes);
app.use("/buy", achatRoutes);

app.use(notFoundError);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
