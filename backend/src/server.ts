import express, {Express} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routers/DataRouter/router';

dotenv.config();

const app: Express = express();
const port = process.env.PORT!;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(cors());

app.use("/", router);

const server = app.listen(port, () => {
  console.log(
    `Server is running on ${port}`
  );
});