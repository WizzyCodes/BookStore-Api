import { Application, Request, Response } from "express";
import bookRouter from "./router/bookRouter";

export const mainApp = (app: Application) => {
  try {
    app.use("/api/book", bookRouter);
    app.get("/", (req: Request, res: Response) => {
      try {
        res.status(200).json({
          message: "Welcome to the book aoi",
        });
      } catch (error) {
        res.status(404).json({
          message: error,
        });
      }
    });
  } catch (error) {
    return error;
  }
};
