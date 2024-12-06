import { Schema, Document, Types, model } from "mongoose";

interface iUser {
  email: string;
  password: string;
  userName: string;
  books: Array<{}>;
}

interface iUserData extends iUser, Document {}
const userModel = new Schema<iUserData>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      unique: true,
      required: true,
    },
    books: [
      {
        type: Types.ObjectId,
        ref: "book",
      },
    ],
  },
  { timestamps: true }
);
export default model<iUserData>("user", userModel);
