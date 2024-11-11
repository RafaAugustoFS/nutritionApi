require("dotenv").config();
const express = require("express");
const routes = require("./routers/router");
const { sequelize } = require("./models/user");

const app = express();
app.use(express.json());

app.use("/api", routes);

sequelize
  .sync()
  .then(() => {
    console.log("Conexão com o banco de dados com êxito!");
  })
  .catch((err) => {
    console.error("Erro ao conectar com o banco: ", err);
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("---------------------------");
  console.log(`Running on http://${PORT}`);
  console.log("---------------------------");
});
