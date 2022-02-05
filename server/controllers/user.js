const db = require("../models");

module.exports = {
  async getUser(req, res) {
    const user = req.user.dataValues;
    const userDataToSend = {
      email: user.email,
      nickname: user.nickname,
      role: user.role,
      thumbImg: user.thumbImg,
    };

    res.status(200).json({ user: userDataToSend });
  },
  async editUser(req, res) {
    const { email, nickname, role, thumbImg } = req.body;

    try {
      const respoonse = await db.User.update(
        {
          nickname,
          role,
          thumbImg,
        },
        { where: { email } }
      );
      console.log(respoonse, email, nickname, role);

      return res.status(200).json({ message: "ok" });
    } catch (err) {
      console.log(err);
      res.clearCookie("accessToken");
      res.clearCookie("refreshToken");
      return res.status(500).json({ message: "데이터베이스 오류" });
    }
  },
};
