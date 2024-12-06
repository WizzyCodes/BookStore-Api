import { Schema, Document, Types, model } from "mongoose";

interface iBook {
  bookTitle: string;
  bookAuthor: string;
  userID: {};
  bookImage: string;
  imageID: string;
  category: string;
}

interface iBookData extends iBook, Document {}
const bookModel = new Schema<iBookData>(
  {
    bookTitle: {
      type: String,
    },
    bookAuthor: {
      type: String,
    },
    userID: {
      type: Types.ObjectId,
      ref: "user",
    },
    bookImage: {
      type: String,
    },
    imageID: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  { timestamps: true }
);
export default model<iBookData>("book", bookModel);
