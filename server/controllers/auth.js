const ejs = require("ejs");
const nodemailer = require("nodemailer");
const path = require("path");
const { makeRandom } = require("../utils/makeRandom");
const { genAccess, genRefresh } = require("../utils/token");
const db = require("../models");

module.exports = {
  async userCheck(req, res) {
    const { email } = req.body;

    //@ 유저체크
    const isUser = await db.User.findOne({ where: { email } });

    if (isUser) return res.status(409).json({ message: "이미 유저가 있습니다!" });

    return res.status(200).json({ message: "ok" });
  },
  signUp(req, res) {
    const { email, password, nickname } = req.body;
    const code = makeRandom(7);

    let emailTemplate;
    try {
      ejs.renderFile(path.join(__dirname, "../ejs/register.ejs"), { email, code }, (err, data) => {
        if (err) console.log(err);
        emailTemplate = data;
      });

      //@ 전송 포터 만들기
      let transporter = nodemailer.createTransport({
        service: "Naver",
        host: "smtp.naver.com",
        secure: process.env.NODE_ENV !== "dev",
        port: process.env.NODE_ENV !== "dev" ? 465 : 587,
        auth: {
          user: process.env.SenderEmail,
          pass: process.env.SenderPassword,
        },
      });

      //@ 포터를 통해 이메일 전달
      transporter.sendMail(
        {
          from: process.env.SenderEmail,
          to: email,
          subject: "회원가입을 마무리해주세요",
          html: emailTemplate,
        },
        (error, info) => {
          if (error) {
            console.log(error);
          }
          req.app.get("mailCodeStore")[email] = {
            password,
            nickname,
            code,
          };
          transporter.close();
        }
      );
      res.status(200).json({ message: "message send work" });
    } catch (err) {
      res.status(500).json({ message: "server error" });
    }
  },
  async signIn(req, res) {
    const { email, password } = req.body;
    const isUser = await db.User.findOne({ where: { email } });

    if (!isUser) {
      return res.status(409).json({ message: "계정이 존재하지 않습니다!" });
    }

    //@ 토큰생성
    const accessToken = genAccess({ email });
    const refreshToken = genRefresh({ email });
    res.cookie("accessToken", accessToken, {
      secure: process.env.NODE_ENV === "prod",
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 1, //1d
    });
    res.cookie("refreshToken", refreshToken, {
      secure: process.env.NODE_ENV === "prod",
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30, //30d
    });

    res.status(200).json({});
  },
  signOut(req, res) {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.status(200).json({});
  },
  async mailcode(req, res) {
    const { email, codeInput } = req.body;
    const mailCodeStorage = req.app.get("mailCodeStore");

    if (mailCodeStorage[email].code === codeInput) {
      //@ 유저생성
      const { password, nickname } = mailCodeStorage[email];
      await db.User.create({
        email,
        password,
        nickname,
      });

      //@ 토큰생성
      const accessToken = genAccess({ email });
      const refreshToken = genRefresh({ email });
      res.cookie("accessToken", accessToken, {
        secure: process.env.NODE_ENV === "prod",
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 1, //1d
      });
      res.cookie("refreshToken", refreshToken, {
        secure: process.env.NODE_ENV === "prod",
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 30, //30d
      });

      //@ 임시코드 삭제
      delete req.app.get("mailCodeStore")[email];

      return res.status(201).json({ message: "회원가입을 완료하였습니다" });
    } else {
      res.status(404).json({ message: "코드가 일치하지 않습니다!" });
    }
  },
  guestLogin(req, res) {
    //@ 토큰생성
    const accessToken = genAccess({ email: "guest@guest.com" });
    const refreshToken = genRefresh({ email: "guest@guest.com" });
    res.cookie("accessToken", accessToken, {
      secure: process.env.NODE_ENV === "prod",
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 1, //1d
    });
    res.cookie("refreshToken", refreshToken, {
      secure: process.env.NODE_ENV === "prod",
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30, //30d
    });

    res.status(200).json({});
  },
  checkTokens(req, res) {
    //@ 초기 앱 접속시 토큰 확인해서 유효하지 않으면 로그인상태 푸는 로직
    //@ 에러는 미들웨어에서 처리해줄것이기 떄문에 여기는 응답만 하면 된다.

    return res.send("");
  },
};
