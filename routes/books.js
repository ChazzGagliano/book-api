import {Router} from "express"
import { ObjectId } from "mongodb";

config()

const router = Router()
router.post("/add-book", async (req, res) => {
  const bookCollection = await books();
  let book = {
    title: req.body.title,
    author: req.body.author,
    cover: req.body.cover,
  };
  const checkIfBookExists = await bookCollection.findOne({
    title: req.body.title,
  });
  if (checkIfBookExists !== null)
    return res.json({ error: "An account with this email already exists" });

  await bookCollection.insertOne(book);
  return res.status(200).json(book);
});



// router.get("/books", async (req, res) => {
//     const bookCollection = await books()
//     const book
// })