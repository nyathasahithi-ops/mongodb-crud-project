/*const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/fullstackdb")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});*/


// UPDATE SERVER.JS//

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());


//Connect MongoDB//

mongoose.connect("mongodb://127.0.0.1:27017/fullstackdb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

app.use("/api", userRoutes);
app.use("/api", taskRoutes);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});