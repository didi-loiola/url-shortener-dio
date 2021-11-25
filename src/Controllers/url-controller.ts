import { config } from "../config/Constants";
import { Request, response, Response } from "express";
import shortId from 'shortid';

export class URLController {
    public async shorten (req: Request, res: Response): Promise<void> {
        const { originURL } = req.body;
        const hash = shortId.generate();
        const shortURL = `${config.API_URL}/${hash}`

        res.json({ originURL, hash, shortURL})
    }

    public async redirect (req: Request, res: Response): Promise<void> {
        const { hash } = req.params

        const url = {
            originURL: 'https://google.com.br',
            hash: '7AzIe8Xaa',
            shortURL: 'http://localhost:5000/7AzIe8Xaa'
        }
        res.redirect(url.originURL)
    }
}