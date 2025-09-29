import mongoose from "mongoose";

export const conn = async(url) => {
  try {
    await mongoose.connect(url);
    console.log("MongoDb connection successfull");
  } catch (e) {
    console.error('MongoDB connection failed');
    process.exit(1);
  }
}

