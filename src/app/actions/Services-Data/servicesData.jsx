"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export default async function servicesData() {
  try {
    const options = {
      projection: { title: 1, img: 1, price: 1 },
    };
    const res = await dbConnect(collectionNames.services_collection)
      .find({}, options)
      .toArray();

    return res;
  } catch (err) {
    return err;
  }
}
