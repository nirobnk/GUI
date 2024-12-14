const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const studentRoutes = require("./routes/studentRoutes");
const errorHandler = require('./middleware/errorHandler')
const logger = require("./middleware/logger");

const app = express();
const PORT = process.env.PORT || 6700;

//middleware

app.use(cors());
app.use(express.json());
app.use(errorHandler);// Add error handler after all routes
app.use(logger); // Apply logger middleware

//routes
app.use("/api/student", studentRoutes);

//database sync
sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to sync database:", error);
  });

  