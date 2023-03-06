import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("final_project");
  const { company_id } = req.query;

  switch (req.method) {
    case "GET":
      const company = await db
        .collection("companies")
        .find({ company_id: company_id })
        .toArray();
      res.json({ data: company });
      break;
  }
}
