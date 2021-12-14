import dotenv from "dotenv";
dotenv.config();

import app from "./app";

const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
