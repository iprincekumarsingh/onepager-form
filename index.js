const app = require("./app");
const dbConn = require("./configs/dbConn");
// importing dotenv
require("dotenv").config();
dbConn();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
