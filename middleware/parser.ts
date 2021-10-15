import { Middleware } from "polka";

export const parser: Middleware = async (req, res, next) => {
  try {
    let body = '';
    for await (const chunk of req) {
      body += chunk;
    }
    req.body =  body;
    next();
  } catch (error) {
    res.writeHead(400).end('JSON body is weird')
  }
}