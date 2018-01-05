import {Router, Request, Response, NextFunction} from 'express';

export class Index {
  router: Router

  constructor() {
    this.router = Router();
    this.init();
  }

  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send({
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
      });
  }

  init() {
    this.router.get('/', this.getAll);
  }

}

const index = new Index();
index.init();
export default index.router;