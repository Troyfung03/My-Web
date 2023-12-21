import mongoose from "mongoose";

let isConnected = false;

const connectMongoDB = async () => {
  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: 'MyApp' });
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

const closeMongoDBConnection = async () => {
  if (isConnected) {
    try {
      await mongoose.connection.close();
      isConnected = false;
      console.log("Closed MongoDB connection");
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("No active MongoDB connection to close");
  }
};

export { connectMongoDB, closeMongoDBConnection };