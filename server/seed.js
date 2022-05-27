const Post = require("./db");
const postsData = require("./postsData.json");

Post.deleteAllEntries()
  .then(() => Promise.all(postsData.map((entry) => Post.create(entry))))
  .then(() => console.log("The database has been reset!"))
  .catch((err) => console.log("Error resetting the database: ", err));