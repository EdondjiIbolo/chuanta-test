import express from "express";
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT ?? 3001;
app.get("/", (req, res) => {
  console.log("Hello world");
  res.status(200).send("Hello World");
});
app.post("/notify", async (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto : http://localhost:${PORT}`);
});
