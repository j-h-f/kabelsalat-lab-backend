import http from "http"
import app from "./app.js"

const server = http.createServer(app);

const PORT = process.env.PORT || 3030;
server.listen(PORT);

console.log("Server listening on port: ", PORT);