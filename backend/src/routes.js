import { Router } from "express";

const routes = Router();

routes.post("/users", (req, res) => {
  return res.json({ msg: "Hello World" });
});

export default routes;
