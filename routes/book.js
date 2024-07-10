import {Router} from "express"
import { ObjectId } from "mongodb";


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
    return res.json({ error: "A book with this title already exists" });

  await bookCollection.insertOne(book);
  return res.status(200).json(book);
});

export default router;

// router.get("/books", async (req, res) => {
//     const bookCollection = await books()
//     const book
// })