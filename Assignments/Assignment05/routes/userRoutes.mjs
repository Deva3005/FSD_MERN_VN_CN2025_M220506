import { Router } from "express";
import users from "../data/user_data.mjs";

// Creating NEW Route
export const user_routes = Router();

// Default GET for USERS
user_routes.get("/", (req, res) => {
  console.log(req.url);
  res.send(users);
});

// Custom Middleware to Validate Parameters
const checkId = (req, res, next) => {
  let userId = parseInt(req.params.id) - 1;
  if (isNaN(userId)) {
    res.status(400).send({ msg: "User Id Should be Number" });
  } else {
    let res = users.find((ele) => ele.id === userId);
    if (res == -1) {
      res.status(400).send({ msg: "Invalid User Id" });
    } else {
      req.userId = userId;
    }
  }
  next(); // Middleware should work between req & res and allow next ops to continue
};

user_routes.get("/:id", checkId, (req, res) => {
  res.send(users[req.userId]);
});
