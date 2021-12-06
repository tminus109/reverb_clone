import express from "express";
import cors from "cors";
import validateSignUp from "./middleware/validateSignUp";
import signup_router from "./routes/signup";
import validateSignIn from "./middleware/validateSignIn";
import signin_router from "./routes/signin";

const app = express();
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello from Reverb Clone Server!");
});

app.use(cors());
app.use("/signup", validateSignUp, signup_router);
app.use("/signin", validateSignIn, signin_router);

export default server;
