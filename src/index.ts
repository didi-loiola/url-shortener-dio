import { URLController } from './Controllers/url-controller';
import express, { application, Request, Response } from 'express';

const api = express();
api.use(express.json())
const urlController = new URLController()

api.get('/:hash', urlController.redirect)
api.post('/shorten', urlController.shorten)

api.listen(5000, () => console.log("Express listening in port 5000"))