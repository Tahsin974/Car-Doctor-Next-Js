"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNames } from "@/lib/dbConnect";

export default async function addUser(payload) {
  const { email, password } = payload;
  if (!email || !password) {
    return { success: false };
  }

  const user = await dbConnect(collectionNames.users_collection).findOne({
    email: email,
  });
  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;
    const result = await dbConnect(collectionNames.users_collection).insertOne(
      payload
    );
    console.log(result);
    return { Id: result.insertedId };
  }
}
