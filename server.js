const express = require("express");
const connectDb = require('./config/connectDb'); // import database from config 
const app = express();
const userSchema = require('./models/user.model')
require('dotenv').config()
app.use(express.json());


const PORT = 5000 || process.env.PORT;

connectDb()


app.listen(PORT, (error) => {
  if (error) throw console.error(error);
  console.log("listen to port " + PORT);
});
// app.get("/sd" ,(req, res) => {
//   return res.status(200).send({ msg: "welcome" });
// });

// app.post("/sd",midlleware ,async (req, res) => {
//     console.log(req)
//   try {
//       const user = new userSchema(req.body)
//       await user.save();
//       return res.status(200).send({msg:'added successfully',user})
//   } catch (error) {
//       return res.status(500).send({msg:error})
//   }
// });
