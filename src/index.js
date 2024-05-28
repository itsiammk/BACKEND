// require('dotenv').config({path: './env'})
import dotenv from "dotenv";

dotenv.config({ path: "./env" });

import connectDB from "./db/index.js";

const port = process.env.PORT || 8000;
connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("Error", err);
      throw err;
    });
    app.listen(port, () => {
      console.log("Server is running on port: ", port);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connnection failed, reason: ", err);
  });




// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log("App is listening on port: ", process.env.PORT);
//     });
//   } catch (error) {
//     console.error("Error: ", error);
//     throw error;
//   }
// })();
