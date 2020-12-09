import express from "express"

const app = express();

app.get("/", (req, res, next) => {
    res.send("Hello World");
})

app.get("/test", (req, res, next) => {
    res.send("This is a little test");
})

export default app;