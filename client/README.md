Board페이지 분석내용

1. Board 모델의 데이터정보는

- 채널제목
- 채널 slug (링크 이동시 경로로서 사용할 내용, 후에 유저의 로컬스토리지에 저장될 때 필요한 값이기도 함, 만들때 고유해야 한다)
- 구독자 수 (한 채널은 여러 구독자를 갖을 수 있고, 한 유저는 여러 채널을 구독할 수 있음 N:M)
- 차단리스트 (한 채널은 여러 차단자를 가질 수 있고, 한 유저는 여러 채널에 차단당할 수 있다 N:M)
- 채널 소유자 (채널 소유자는 Board의 공지사항, 필터 태그를 추가할 수 있다. 또한 개념컷의 한도를 변경할 수 있다)
- 필터 리스트 (한 채널은 여러 필터 탭을 가질 수 있다 1:N);
- 최근 방문) 어떤 보드를 들어오면, useEffect로 localstorage에서 방문값을 불러온 후, 해당 객체에서 현재 접속한 title을 가진 프로퍼티만 삭제한 상태로 최근방문 탭에서 보여지게 한다. 그리고 localstorage에는 해당 탭의 title과 slug가 저장되게 한다);

1. Board에서 요청을 날릴 시에

- 개념글 버튼을 누르면 query를 다시 날려 데이터를 받아온다. (https://arca.live/b/my?mode=best)
- 필터 탭을 누르면 추가로 query를 붙여 데이터를 받아온다. (https://arca.live/b/hypergryph?category=%EC%A0%95%EB%B3%B4%2F%ED%8C%81&mode=best);
- 페이지를 누르면 추가로 query를 붙여 데이터를 받아온다.
- 추천수를 누르면 추가로 query를 붙여 데이터를 받아온다.
- 추천컷을 누르면 추가로 query를 붙여 데이터를 받아온다.

따라서 총 query 형태는 다음과 같다.

https://arca.live/b/hypergryph
?category=%EB%82%98%EB%88%94
&mode=best
&p=5
&sort=rating72
&cut=30

따라서 서버에서 처리할 때

1. 필터 옵션을 조건부로 만든다
   ex) 만약 category와 mode 등 where로 필터링 될 요소들이 존재한다면
   const where = {};

   if(req.query.category){
   where.category = req.query.category
   }

   if(req.query.mode){
   where.mode = req.query.mode ( 즉 게시글에 데이터엔 누군가가 like 누르는 순간 total like 숫자 보고 개념인지 아닌지 여부 설정해야 함)
   }

   if(req.query.cut){
   like:{
   [Op.gte]:req.query.cut
   }
   }

ex) 여기에 order과 관련된 옵션이 존재시
const order = [];

if(req.sort){
if(req.sort === "rating72"){
where.createdAt:{
[Op.lte] : 시간관련 내용
}

order.push(["createdAt","DESC"]);
}
}

위의 내용으로 조회해서 게시글을 가져온다.

let pageNum = req.query.page; // 요청 페이지 넘버
let offset = 0;

if (pageNum > 1) {
offset = 10 \* (pageNum - 1);
}

post.findAll({
// pagination
offset: offset,
limit: 10
});

혹은

let limit = 10;
let offset = 0 + (req.body.page - 1) \* limit;
Posts.findAndCountAll({
offset: offset,
limit: limit,
order: [["date", "ASC"]]
})

/// full pagenation
const posts = await Post.findAll({
where,
limit: 10,
include: [{
model: User, // 게시글 작성자
attributes: ['id', 'nickname', 'profileImg'],
}, {
model: Image, // 게시글의 이미지
}, {
model: Comment, // 게시글의 댓글
include: [{
model: User, //댓글을 쓴 사람
attributes: ['id', 'nickname', 'profileImg'],
}],
}, {
model: User, // 좋아요 누른 사람
as: 'Likers',
attributes: ['id'],
}],
order: [
['createdAt', 'DESC'],
[Comment, 'createdAt', 'DESC']
],
});

## 접속한 유저의 국가에 대해 접속차단

https://ipapi.co/json/ <- 해당 링크로 get요청을 보내면 국가정보가 나온다.
