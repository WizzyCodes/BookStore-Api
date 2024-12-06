import bcrypt from "bcrypt";
import { Request, Response } from "express";
import userModel from "../model/userModel";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { userName, password, email } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = await userModel.create({
      userName,
      email,
      password: hashed,
    });
    return res.status(201).json({
      message: "user created successfully",
      data: user,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

export const getOneUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const findUser = await userModel.findById(userID);
    return res.status(200).json({
      message: "user found",
      data: findUser,
      status: 200,
    });
  } catch (error) {
    return error;
  }
};

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const allUser = await userModel.find();
    return res.status(200).json({
      message: "all users found",
      data: allUser,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
