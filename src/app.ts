import express from 'express';
import { router } from './routes';
import { sequelize } from './db';

const app = express();
app.use(express.json());

app.use(router);

sequelize.sync({ force: true });

export { app }