import mongoose from 'mongoose';

export const connectDB = async () => {
  mongoose.set('strictQuery', false);
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
  });
  console.log(
    `Mongo DB connected: ${conn.connection.host}`.cyan.underline.bold,
  );
};
