import express from "express";
const app = express();
const port = 3010;

app.listen(port, (err) => {
    if (err) {
        return console.log("Error starting");
    }
    return console.log(`Server listening on port ${port}`);
});
