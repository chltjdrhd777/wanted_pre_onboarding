require("dotenv").config();
require("./models");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");

const db = require("./models/index");
const { testUser, testTags } = require("./utils/INITIALIZATION");

const app = express();

//# in memory save (임시방편 ㅜㅜ 나중에 꼭 redis로 바꾸자)
app.set("mailCodeStore", {});

//# middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://component-submit.s3-website.ap-northeast-2.amazonaws.com/",
    ],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
  })
);

//# routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const tagRoutes = require("./routes/tag");
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/tag", tagRoutes);

app.get("/", (_, res) => {
  res.send("hellow world");
});

app.use((_, res) => {
  res.status(404).json({
    data: null,
    message: "endpoint not found",
  });
});

app.use((err, _, res) => {
  console.log(err.stack);
  res.status(500).json({
    data: null,
    message: "something wrong",
  });
});

const server = app.listen(process.env.PORT || 5050, () => {
  console.log(`listening port ${process.env.PORT || 5050}/ env=${process.env.NODE_ENV}`);
});

//% initiation //////////////////////////////////////////////////////
db.sequelize.sync({ force: false, alter: process.env.NODE_ENV === "dev" }).then(() => {
  console.log("sequelize activated");

  testUser(db.User);

  testTags(db.Tag);
});
