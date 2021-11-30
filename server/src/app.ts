import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello, Server!");
});

app.use(cors());

export default server;
