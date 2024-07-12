import mongoose from "mongoose";
const uri = process.env.MONGODB_URI || "";
// track the connection
let isConnected = false;
export const connectToDataBase = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("DB connected already");
    return;
  }
  try {
    await mongoose.connect(uri, {
      dbName: "MY_DB",
    });
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};