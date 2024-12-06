import { connect } from "mongoose";

export const dbConfig = async () => {
  try {
    await connect(process.env.DB_URL as string).then(() => {
      console.clear();
      console.log("db connected ❤🧨🎇🧨🧨🎇🧨🧨✨");
    });
  } catch (error) {
    console.log(error);
  }
};
