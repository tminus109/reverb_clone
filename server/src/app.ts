import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import validateSignUp from "./middleware/validateSignUp";
import signupRouter from "./routes/signupRoute";
import validateSignIn from "./middleware/validateSignIn";
import signinRouter from "./routes/signinRoute";

const app = express();
const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello from Reverb Clone Server!");
});

app.use(cors());
app.use(express.json());
app.use("/signup", validateSignUp, signupRouter);
app.use("/signin", validateSignIn, signinRouter);

export default server;
