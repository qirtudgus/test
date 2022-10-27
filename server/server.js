import express from "express";
import cors from "cors";
const SERVER_PORT = 3002;

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/test", (req, res) => {
  const a = req.body;
  console.log(a);

  res.status(200).json({ test: "테스트" });
});

app.listen(SERVER_PORT, () => {
  console.log(`
    🛡️  Server listening on port: ${SERVER_PORT}
  `);
});
