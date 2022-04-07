const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const app = express();
const userRoutes = require('./routes/users-route');
const protectedRoutes = require('./routes/protected-route');
const swaggerSpec = require('./controllers/swagger-controller');
const config = require('./service/config-service');

//Sequelize test
const sequelize = require('./database/db');
const User = require('./models/user-model');

//sequelize att dados ex:criar end point q att dados do user ou pedir uma nova chave

app.use(cors());
app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/users', userRoutes);
app.use('/protected', protectedRoutes);


// start server
app.listen(config.PORT, function () {
  console.log(`app running on localhost:${config.PORT}`);
});