import { Url } from '../models/urls';
import shortid from 'shortid';

export async function CreateShortUrl(req, res) {
    try {
        const host = req.headers.host;
        const originalUrl = req.body.url;

        const shorten = shortid.generate();
        let shortenUrl = {
            originalUrl: originalUrl,
            hash: shorten,
            shortenUrl: host + "/" + shorten,
            views: 0
        };
        await Url.create(shortenUrl);

        res.send(shortenUrl);
    } catch (err) {
        res.status(400).send({
            error: 'This url already exist',
        })
    }
}

export async function getOriginalUrl(req, res) {
    try {
        const { hash } = req.params;

        const url = await Url.findOneAndUpdate( { hash: hash },
            {
                $inc: { views: 1 }
            }
        );
        res.redirect(url.originalUrl);
    } catch (err) {
        res.status(500).send({
            error: 'Error: ' + err,
        })
    }
}
