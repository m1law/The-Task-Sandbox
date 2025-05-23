import { create } from "../controllers/task.controller.js";

export default function (app) {
  console.log("we are in the route handler rn");
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/task/create", create);
}
