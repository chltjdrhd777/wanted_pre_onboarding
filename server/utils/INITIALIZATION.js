module.exports = {
  async testUser(User) {
    let testUser = await User.findOne({});

    if (!testUser) {
      testUser = await User.create({
        email: "guest@guest.com",
        nickname: "guest",
        password: "guest",
        role: "admin",
        thumbImg:
          "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg",
      });
    }
  },

  async testTags(Tag) {
    const Tags = await Tag.findOne({});

    if (!Tags) {
      Tag.bulkCreate([
        {
          tagName: "가업",
        },
        {
          tagName: "가위",
        },
        { tagName: "가람" },
        {
          tagName: "나라",
        },
        {
          tagName: "나연",
        },
        {
          tagName: "나지막한",
        },
        {
          tagName: "노래",
        },
        {
          tagName: "다리",
        },
        {
          tagName: "돌다리",
        },
        {
          tagName: "개다리",
        },
        {
          tagName: "도사",
        },
        {
          tagName: "라면",
        },
        {
          tagName: "라뽀끼",
        },
        {
          tagName: "루루라라",
        },
        {
          tagName: "아라보스",
        },
        {
          tagName: "루팡",
        },
        {
          tagName: "마라탕",
        },
        {
          tagName: "미용실",
        },
        {
          tagName: "말코도사",
        },
        {
          tagName: "말라가",
        },
        {
          tagName: "바지",
        },
        {
          tagName: "보라색",
        },
        {
          tagName: "소설",
        },
        {
          tagName: "수영장",
        },
        {
          tagName: "아저씨",
        },
        {
          tagName: "오랑우탄",
        },
        {
          tagName: "자랑",
        },
        {
          tagName: "조림",
        },
        {
          tagName: "최고",
        },
        {
          tagName: "초선",
        },
        {
          tagName: "할리우드",
        },
      ]);
    }
  },
};
