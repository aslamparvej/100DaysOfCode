import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [];

// Get users or Read users
router.get("/", (req, res) => {
  console.log(users);

  res.send(users);
});

// Post user or create user
router.post("/", (req, res) => {
  const user = req.body;

  const userID = uuidv4();
  const userWithId = { ...user, id: userID };
  users.push(userWithId);

  res.send(`User with the name ${user.firstname} added to the database`);
});

// Get user by id or Find user by id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});

// Delete user by id
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} deleted from the databse.`);
});

// Patch or update user.
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstname) {
    user.firstname = firstname;
  }
  if (lastname) {
    user.lastname = lastname;
  }
  if (age) {
    user.age = age;
  }
});
export default router;
