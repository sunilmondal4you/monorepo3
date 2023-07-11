import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://sunilmondal4you:pMDsz0bsygnO45Pa@cluster0.mp6v04z.mongodb.net/";

export const readAll = async (req, res) => {
  try {
    const client = new MongoClient(uri);
    const col = client.db("sample_training").collection("inspections");

    const resultList = await col.find({}).limit(2).toArray();

    client.close();

    res.json(resultList);
  } catch (error) {
    res.json({ opr: false, error });
  }
};
