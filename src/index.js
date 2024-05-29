const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
mongoose.connect(
  "mongodb+srv://carloshnunes:<password>@cluster0.m1wkvt8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const Film = mongoose.model("Film", {
  title: String,
  description: String,
  image_url: String,
  trailer: String,
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", async (req, res) => {
  const film = new Film({
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url,
  });

  await film.save();
  res.send(film);
});
app.listen(port, () => {
  console.log("App running");
});
