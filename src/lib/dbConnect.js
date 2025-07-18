import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNames = {
  services_collection: "services_collection",
  users_collection: "users_collection",
};
export default function dbConnect(collectionName) {
  const uri = process.env.MONGO_URI;

  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  if (uri) {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    return client.db("Car-Doc-Next-Js").collection(collectionName);
  }
}
