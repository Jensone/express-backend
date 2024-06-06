const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({
    message:
      "Je suis un message JSON envoyé par un serveur Express, c'est ouf!",
  });
});

app.listen(port, () => {
  console.log(
    `Le serveur est lancé à l'adresse suivante : http://localhost:${port}`,
  );
});
