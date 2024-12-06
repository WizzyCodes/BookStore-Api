import { Request, Response } from "express";
import bookModel from "../model/bookModel";

export const createBook = async (req: Request, res: Response) => {
  try {
    const { bookTitle, bookAuthor, category, bookImage } = req.body;

    const book = await bookModel.create({
      bookTitle,
      category,
      bookAuthor,
      bookImage,
    });
    return res.status(201).json({
      message: "book created successfully",
      data: book,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

export const getOneBook = async (req: Request, res: Response) => {
  try {
    const { bookID } = req.params;
    const findBook = await bookModel.findById(bookID);
    return res.status(200).json({
      message: "book found",
      data: findBook,
      status: 200,
    });
  } catch (error) {
    return error;
  }
};

export const getAllBook = async (req: Request, res: Response) => {
  try {
    const allBook = await bookModel.find();
    return res.status(200).json({
      message: "all books found",
      data: allBook,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
