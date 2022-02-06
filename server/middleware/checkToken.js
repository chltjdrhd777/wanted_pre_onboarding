const { verifyAccess, verifyRefresh, genAccess } = require("../utils/token");
const db = require("../models");

module.exports = {
  async checkToken(req, res, next) {
    const { accessToken, refreshToken } = req.cookies;

    //@ 토큰이 둘 다 없을 떄
    if (!accessToken || !refreshToken) {
      return res.status(401).json({ message: "다시 로그인해주세요" });
    }

    //@ access 토큰이 유효할 때
    const verfiedAccess = verifyAccess(accessToken);

    if (verfiedAccess) {
      const { email } = verfiedAccess;
      const user = await db.User.findOne({ where: { email } });

      if (!user) {
        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");
        return res.status(404).json({ message: "해당 유저가 없습니다" });
      }

      req.user = user;
      next();
    } else if (verifyRefresh(refreshToken)) {
      //@ refresh 토큰이 유효할 때
      const { email } = verifyRefresh(refreshToken);

      const user = await db.User.findOne({ where: { email } });
      if (!user) {
        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");
        return res.status(404).json({ message: "해당 유저가 없습니다" });
      }

      const accessToken = genAccess({ email });
      res.cookie("accessToken", accessToken);
      req.user = user;
      next();
    } else {
      //@ 두 토큰 다 유효하지 않을 때
      res.clearCookie("accessToken");
      res.clearCookie("refreshToken");
      return res.status(401).json({ message: "다시 로그인해주세요" });
    }
  },
};
