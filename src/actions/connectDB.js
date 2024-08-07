import mongoose from "mongoose";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("Please define the DATABASE_URL environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(DATABASE_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

const EmailSchema = mongoose.Schema(
  {
    email: String
  },
  {
    timestamps: true,
  }
);

let EmailModel;

try {
  // Try to fetch an existing model
  EmailModel = mongoose.model("email");
} catch (e) {
  // If the model doesn't exist, create it
  EmailModel = mongoose.model("email", EmailSchema);
}

export const connection = connectDB();
export const dataModel = EmailModel;
