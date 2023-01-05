import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (request: Request, response: Response) => {
    response.statusCode = 200;
    console.log("Started the server");
    response.send({"greeting": "Hello World"})
});

app.get("/ping", (request: Request, response: Response) => {
    response.statusCode = 200;
    response.send("Hello Typescript");
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Started listening on ${PORT}`);
});