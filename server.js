import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Server is Ready");
});

app.get("/api/jokes", (req, res) => {
  const Jokes = [
    {
      id: 1,
      title: "A Jokes",
      content: "this is a Joke",
    },
    {
      id: 2,
      title: "A Jokes",
      content: "this is a Joke",
    },
    {
      id: 3,
      title: "A Jokes",
      content: "this is a Joke",
    },
  ];
  res.send(Jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is ready on ${port}`);
});
