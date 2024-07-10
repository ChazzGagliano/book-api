import bookRoutes from "./book.js"


const constructorMethod = (app) => {
    app.use("/book", bookRoutes);
    app.use("*", (req, res) => {
      res.status(404).json({ error: "This route does not exist" });
    });

  }

  export default constructorMethod;