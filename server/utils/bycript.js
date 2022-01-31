const bcrypt = require("bcrypt");

module.exports = {
  hash: (hashingTarget, callback) => {
    bcrypt.hash(hashingTarget, 10, (err, hashed) => {
      callback(err, hashed);
    });
  },
  decode: (receivedInfo, storedHashingInfo, callback) => {
    bcrypt.compare(receivedInfo, storedHashingInfo, (err, result) => {
      callback(err, result);
    });
  },
};
