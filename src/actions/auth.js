"use server";

import User from "@/models/User";
import bcrypt from "bcrypt";
import ConnectDb from "../lib/connDb";
import { redirect } from "next/navigation";

export const registerUser = async (formData) => {
  let isSuccess = false;
  try {
    const name = formData.get("name");
    const email = formData.get("email")?.toLowerCase().trim();
    const password = formData.get("password");

    if (!name || !email || !password) {
      throw new Error("All fields are required");
    }

    await ConnectDb();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    isSuccess = true;
  } catch (error) {
    throw new Error(error.message);
  }

  if (isSuccess) {
    redirect("/");
  }
};
