const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const pages = [
  {
    name: "Home",
    path: "/",
    template: "index.html",
  },
  {
    name: "About",
    path: "/about",
    template: "about.html",
  },
  {
    name: "Services",
    path: "/services",
    template: "services.html",
  },
  {
    name: "Products",
    path: "/products",
    template: "products.html",
  },
  {
    name: "Contact",
    path: "/contact",
    template: "contact.html",
  },
];

pages.forEach((page) => {
  app.get(page.path, (req, res) => {
    res.sendFile(path.join(__dirname, "public", page.template));
  });
});

app.post("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact-success.html"));
});

app.listen(port, () => {
  console.log(
    `Le serveur est lancé à l'adresse suivante : http://localhost:${port}`,
  );
});
