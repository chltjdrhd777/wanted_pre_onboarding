const { Tag, Sequelize } = require("../models");

const Op = Sequelize.Op;

module.exports = {
  async getInitialTag(req, res) {
    console.log(req.query, "from initial");
    //@ 컴포넌트가 마운트되면 딱 한번만 데이터를 가져오도록 한다.
    //@ 단, 디바운스로 인해 query경로가 없는 상태로 요청이 들어와버리므로 이를 막아준다.
    try {
      const tags = await Tag.findAll({
        offset: 1,
        limit: 10,
        order: [["tagName", "ASC"]],
        raw: true,
      });
      console.log(tags);

      const dataToSend = tags.map((e) => ({ tagName: e.tagName }));

      return res.status(200).json(dataToSend);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ meessage: "데이터베이스 에러" });
    }
  },
  async getTags(req, res) {
    //@ 컴포넌트에서 찾지 못했을 때에 이 요청을 실행하게 된다.
    try {
      const { query } = req.params;

      if (query === "undefined") {
        return res.status(200).json([]);
      }

      const tags = await Tag.findAll({
        where: {
          tagName: {
            [Op.like]: `%${query}%`,
          },
        },
        raw: true,
      });

      const dataToSend = tags.map((e) => ({ tagName: e.tagName }));

      return res.status(200).json(dataToSend);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ meessage: "데이터베이스 에러" });
    }
  },
};
