import { Router } from "express";
import {
  createBook,
  getAllBook,
  getOneBook,
} from "../controller/bookController";

const bookRouter: any = Router();
bookRouter.route("/create-book").post(createBook);
bookRouter.route("/get-one-book/:bookID").get(getOneBook);
bookRouter.route("/get-all-book").get(getAllBook);
export default bookRouter;
