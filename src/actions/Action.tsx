"use server";
import { connection, dataModel } from "@/actions/connectDB";

export default async function action(email: string) {
  try {
    await connection;
    const newEmail = new dataModel({
      email: email,
    });
    await newEmail.save();
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}