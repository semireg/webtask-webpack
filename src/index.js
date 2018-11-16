// @flow

import express from 'express';
import foo from './foo';

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  const text: string = foo();
  res.send(text);
});

export default app;
