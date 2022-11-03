const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const router = require("./routes/User-routes");
const app = express();

// app.use(cors({
//   origin:"http://localhost:5000",
//   methods :["GET","POST","PUT","DELETE"],
// }))

app.use(express.json());

app.use("/users",router);

app.get('/', function (req, res) {
  res.send('hello working')
})


mongoose
  .connect(
    "mongodb+srv://admin:WZK6PHnGgMBa50ak@cluster0.zazyspa.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000, () => console.log("listing to port 5000")))
  .catch((err) => console.log(err));


  