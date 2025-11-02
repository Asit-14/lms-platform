import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connectionToDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      process.env.MONGO_URI || "mongodb://127.0.0.1:27017/lms"
    );

    console.log(`✅ Connected to MongoDB: ${connection.host}`);
  } catch (e) {
    console.error("❌ MongoDB connection failed:", e.message);
    process.exit(1);
  }
};

export default connectionToDB;
