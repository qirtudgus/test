import express from "express";
import cors from "cors";
import { db } from "./db.js";
const SERVER_PORT = 3002;

db.connect((err) => {
  if (err) console.log("MySQL 연결 실패 : ", err);
  console.log("MySQL Connected!!!");
});

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/test", (req, res) => {
  const a = req.body;
  let dbTest;
  console.log(a);

  db.query("SELECT * FROM testTable", [], (err, rows) => {
    console.log(rows);
    dbTest = rows;
  });

  res.status(200).json({ test: "테스트", db: dbTest });
});

app.listen(SERVER_PORT, () => {
  console.log(`
    🛡️  Server listening on port: ${SERVER_PORT}
  `);
});
