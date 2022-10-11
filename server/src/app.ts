import express from 'express';
import connectDB from '@/config/db';
import errorMiddleware from './middlewares/error.middleware';
import cors from 'cors';
import { NODE_ENV, ORIGIN, PORT } from './config';
import { Routes } from './types/routes.interface';
import path from 'path';

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = PORT || 5000;
    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`=================================`);
      console.log(`======= ENV: ${this.env} =======`);
      console.log(`🚀 App listening on the port ${this.port}`);
      console.log(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }

  public connectToDatabase() {
    connectDB();
  }

  private initializeMiddlewares() {
    this.app.use(cors({ origin: ORIGIN }));
    this.app.use(express.json());
    if (process.env.NODE_ENV === 'production') {
      this.app.use(express.static(path.resolve(__dirname, '../build')));
      this.app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../build/index.html'));
      });
    }
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use('/api/v1/', route.router);
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;
