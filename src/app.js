import express from "express";
import bodyParser from "body-parser";
import apiRouter from "./routes/api";
import server from "./lib/db";

export function startServer() {
  const app = express();
  const APP_PORT = process.env.PORT || 9000;

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRouter.router());

  server();

  return app.listen(APP_PORT, () => {
    console.log(`server started on port ${APP_PORT}`);
  });
}