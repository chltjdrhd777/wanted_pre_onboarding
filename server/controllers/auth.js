const ejs = require("ejs");
const nodemailer = require("nodemailer");
const path = require("path");
const { makeRandom } = require("utils/makeRandom");

module.exports = {
  signUp(req, res) {
    const { email, password, nickname } = req.body;
    const code = makeRandom(7);

    let emailTemplate;

    ejs.renderFile(path.join(__dirname, "../ejs/register.ejs"), { email, code }, (err, data) => {
      if (err) console.log(err);
      emailTemplate = data;
    });

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

    transporter.sendMail(
      {
        from: process.env.SenderEmail,
        to: email,
        subject: "우니부니! 회원가입을 마무리해주세요",
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
  },
  signIn(req, res) {},
  signOut(req, res) {
    res.send("work");
  },
  oauthSignUp(req, res) {},
  mailcode(req, res) {
    console.log(req.body, req.app.get("mailCodeStore"));
    res.json({ session: req.session });
  },
};
