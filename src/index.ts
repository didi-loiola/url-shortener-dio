import { URLController } from './Controllers/url-controller';
import express from 'express';
import { MongoConnection } from './database/MongoConnection';

const api = express();
api.use(express.json())
const urlController = new URLController()
const database = new MongoConnection();
database.connect()

api.get('/:hash', urlController.redirect)
api.post('/shorten', urlController.shorten)

api.listen(5000, () => console.log("Express listening in port 5000"))