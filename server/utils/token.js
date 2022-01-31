require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  genAccess: (data) => sign(data, process.env.ACCESS_SECRET, { expiresIn: "6h" }),
  genRefresh: (data) => sign(data, process.env.REFRESH_SECRET, { expiresIn: "60d" }),
  verifyAccess: (accessToken) => {
    if (!accessToken) return null;

    try {
      return verify(accessToken, process.env.ACCESS_SECRET);
    } catch (_) {
      return null;
    }
  },
  verifyRefresh: (refreshToken) => {
    if (!refreshToken) return null;

    try {
      return verify(refreshToken, process.env.REFRESH_SECRET);
    } catch (_) {
      return null;
    }
  },
};
