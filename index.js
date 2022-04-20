const express = require("express");
const adminRoutes = require('./routes/admin.routes');
const userRoutes = require('./routes/user.routes');
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
 var items = require('./database-mysql');
// var items = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
