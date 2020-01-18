import { Router } from "express";
import DevController from "./controllers/DevController";
import SeachController from "./controllers/SeachController";

const routes = Router();

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);

routes.get("/search", SeachController.index);

export default routes;
