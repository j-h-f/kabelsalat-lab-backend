import express from "express"

const app = express();

app.get("/", (req, res, next) => {
    res.send("Hello World");
})

app.get("/test", (req, res, next) => {
    res.send("This is a little test");
})

app.get("sensors", (req, res, next) => {
    res.json({
        sensors: [
            {name: "temperature", unit: "°C"},
            {name: "Humidity", unit: "%"}
        ]
    })
})

export default app;