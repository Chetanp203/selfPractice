import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(8000, () => console.log("Listening on port 8000"));