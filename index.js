import express from "express";
import cors from "cors";

const app = express();
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = process.env.PORT || 3000;

// TODO need to figure out cors for render.com
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'build')));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

// database init
import db from "./app/models/index.js";
db.sequelize.sync();

// routes
import authRoute from "./app/routes/auth.routes.js";
authRoute(app);
import userRoute from "./app/routes/user.routes.js";
userRoute(app);

