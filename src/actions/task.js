"use server";

import { auth } from "@/auth";
import ConnectDb from "@/lib/connDb";
import Task from "../models/Task";
import { revalidatePath } from "next/cache";

export async function createTask(formData) {
  try {
    const session = await auth();

    if (!session?.user) {
      throw new Error("Unauthorized");
    }

    const title = formData.get("title");
    const description = formData.get("description");

    if (!title || !description) {
      throw new Error("Missing required fields");
    }

    await ConnectDb();

    await Task.create({
      title,
      description,
      user: session.user.id,
      completed: false,
    });
    revalidatePath("/dashboard");

    console.log("Task created successfully");
  } catch (error) {
    console.error("Error creating task:", error);
    throw new Error("Failed to create task");
  }
}
