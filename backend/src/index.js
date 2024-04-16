import express from "express";

const port = 8000;
const app = express();

const users = [
  {
    username: "Zohaib ali",
    password: 1234
  },
  {
    username: "Arham ali",
    password: 1234
  },
  {
    username: "Zubair ali",
    password: 1234
  }
]

app.get('/api/users', (req, res) => {
  return res.json(users)
})

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
}) 
