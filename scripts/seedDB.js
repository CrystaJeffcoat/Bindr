const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  //process.env.MONGODB_URI ||
  "mongodb://localhost/BindrUsers"
), {
  useNewUrlParser: true,
  useFindAndModify: false
};

const userSeed = [
  {
    username: "The Dead Zone",
    password: "Stephen King",
    books: [
      {
        title: 'title',
        blah: 'blah',
        anotherone: 'another one bites the dust'
      },
      {
        title: 'title',
        blah: 'blah',
        anotherone: 'anotherone'
      },
      {
        title: 'title',
        blah: 'blah',
        anotherone: 'anotherone'
      }
    ]
  },
  {
    username: "The Dead Zone",
    password: "Stephen King",
    books: [
      {
        title: 'title',
        blah: 'blah',
        anotherone: 'another one bites the dust'
      },
      {
        title: 'title',
        blah: 'blah',
        anotherone: 'anotherone'
      },
      {
        title: 'title',
        blah: 'blah',
        anotherone: 'anotherone'
      }
    ]
  },
  {
    username: "The Dead Zone",
    password: "Stephen King",
    books: [
      {
        title: 'title',
        blah: 'blah',
        anotherone: 'another one bites the dust'
      },
      {
        title: 'title',
        blah: 'blah',
        anotherone: 'anotherone'
      },
      {
        title: 'title',
        blah: 'blah',
        anotherone: 'anotherone'
      }
    ]
  }
];

db.User
  .deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
