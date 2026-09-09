import mongoose from "mongoose";
const mongoUrl = process.env.MONGODB_URL;

if (!mongoUrl) throw new Error("please ensure Mongodb url in env file");

let cashed = global.mongoose;

if (!cashed) {
  cashed = global.mongoose = {
    conn: null,
    promise: null,
  };
}

const ConnectDb = async () => {
  if (cashed.conn) {
    return cashed.conn;
  }
  if (!cashed.promise) {
    cashed.promise = await mongoose.connect(mongoUrl);
  }
  cashed.conn = await cashed.promise;

  return cashed.conn;
};

export default ConnectDb;
