import express from "express";
import cors from "cors";

import validateSignUp from "./middleware/validateSignUp";
import signupRouter from "./routes/signupRoute";
import validateSignIn from "./middleware/validateSignIn";
import signinRouter from "./routes/signinRoute";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Reverb Clone Server!");
});

app.use("/signup", validateSignUp, signupRouter);
app.use("/signin", validateSignIn, signinRouter);

export default app;
