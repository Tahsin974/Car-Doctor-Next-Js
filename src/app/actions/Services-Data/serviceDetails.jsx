"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export default async function serviceDetails(id) {
  try {
    const query = { _id: new ObjectId(id) };
    const res = await dbConnect(collectionNames.services_collection).findOne(
      query
    );

    return res;
  } catch (err) {
    return err;
  }
}
