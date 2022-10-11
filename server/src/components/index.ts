import { Router } from 'express';
import { Routes } from '@/types/routes.interface';
import path from 'path';

class IndexRoute implements Routes {
  public path = '/*';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.route(`${this.path}`).get(function (req, res) {
      res.sendFile(path.resolve(__dirname, '../dist/index.html'), function (err) {
        if (err) {
          res.status(500).send(err);
        }
      });
    });
  }
}

export default IndexRoute;
