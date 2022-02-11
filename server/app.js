require("dotenv").config();
require("./models");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

//# in memory save (임시방편 ㅜㅜ 나중에 꼭 redis로 바꾸자)
//todo 배포 후 쿠키 전송과 관련하여 samesite로 인해 https가 필요하나, 토이 프로젝트라 그렇게까지 할 예정이 없어서
//todo 인증과 관련해 토큰을 사용했던 내용을 걷어내고 헤더나 post의 body로 전송해서 인증하는 방식으로 바꾼다.

//@ 방법
// 1. 쿠키로 전송하지 않고 헤더나 바디로 토큰을 전달한다
// 2. 클라이언트단에서는 env파일에 저장할 해시값이 있고, 이것을 가지고 받아온 토큰을 암호화하여 클라이언트의 로컬스토리지에 저장한다.
// 3. 설령 이것이 탈취당하더라도 env파일에 있는 해시값을 알지못하면 직접적인 토큰을 가져가지 못한다. <-- 괜찮은데?
// 4. 이렇게 하면 토큰의 보안능력 자체도 강화하면서, 쿠키를 사용할 수 없는 환경 (ex, react native) 에서도 충분히 설정을 살짝 바꾸는 것으로 호환이 가능하다.
app.set("mailCodeStore", {});

//# middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://component-submit.s3-website.ap-northeast-2.amazonaws.com",
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
