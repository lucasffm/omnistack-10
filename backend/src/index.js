import express from "express";
import mongoose from "mongoose";

import routes from "./routes";

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:lucas1205@cluster0-lzyub.azure.mongodb.net/omnistack10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use(express.json());
app.use(routes);
app.listen(3000, () => {
  console.log("Server Running");
});
