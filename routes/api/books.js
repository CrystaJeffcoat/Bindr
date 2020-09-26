const router = require("express").Router();
// const userController = require("../../controllers/userController");
const User = require("../../models/user");

// Matches with "/api/books/"

// gets all books by username
// '/api/books/:username'
router.get('/:username', function (req, res) {
  User.find({ username: req.params.username },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data[0].books);
      }
    }
  );
});

// adds current book to users book array
// '/api/books/add'
router.post("/add", function ({ body }, res) {

  const newBook = {
    "title": body.title,
    "author": body.author,
    "description": body.description,
    "buyLinks": body.buyLinks
  }
  User.update(
    {
      username: body.username
    },
    {
      $push: {
        "books": newBook
      }
    })
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json(err));
});

// delete a book from saved books by 
// '/api/books/update'
router.post('/update', function({ body }, res) {
  User.update(
    {
      username: body.username
    },
    {
      $pull: { books: { title: body.title, author: body.author }}
    }
  ).then(() => res.json("book removed!"))
  .catch(err => res.status(400).json(err));
});

module.exports = router;