> 임시 배포 주소
> [배포링크](http://component-submit.s3-website.ap-northeast-2.amazonaws.com/)
> https 연결이 되지 않아 토큰 전송이 막혀있어, 메일회원가입 테스팅 이외의 기능은 제대로 실행되지 않습니다.
> 메인 컴포넌트 기능구현은 홈페이지의 Overview에 나열되어 있습니다!

## 🚴🏼‍♂️ Modal

---

<dl>
  <dt>구현방법과 이유</dt>
  <dd>Styled-Component로 기본 디자인 형태를 만들고, React에서 제공하는 <strong>React.createPortal</strong>로 외부 App.js에 있는 요소에 연결시켜주었습니다.</dd>
  <dd>createPortal을 사용한 이유는 해당 모달 컴포넌트가 상위의 중첩된 부모들 요소 가운데 특정 요소가 가진 <i>position</i> 스타일에 영향을 받지 않고 정확하게 최상단에서 랜더링이 되게 하고 싶었고, 특히   부모의 <strong>
 overflow:hidden</strong>의 영향을 피하며 랜더링하게 만들고 싶었기 때문입니다.</dd>
 </br>

  <dt>어려웠던 점</dt>
  <dd>createPortal의 사용방법을 몰라 정확하게 어떤 형태로 설정을 해줘야 하는지를 찾는 데에 많은 혼란이 있었습니다</dd>
   <dd>여러 블로깅 자료를 찾아보며 코드를 보는 것이 오히려 혼란스러운 부분이 많아 공식문서를 찾아보았고, createPortal이 리턴하는 Portal 엘레멘트는 우선 자식노드를 먼저 DOM 트리에 삽입하고 난 후에 연결에 관한 후작업이 이루어 진다는 것을 알게 되었습니다.</dd>

> <p align="center"> <img src="/client/public/readme/1.png" width="450px"> </p>

   <dd>따라서 위처럼 타겟팅할 DOM요소를 찾고, 자식 요소를 담은 후 포탈로 제작하여 연결해주었습니다. 위와 같은 방법을 통해 어떤 자식 레벨에서 Modal 컴포넌트를 가져와 만든다 하더라도 타게팅이 되는 parentNode에 삽입되는 것을 확정할 수 있었습니다.</dd>
  </br>
  <dt>자세한 실행방법</dt>
  <dd>
    <details>
    <summary>로그인 버튼 클릭시 모달 마운트</summary>
        <img width="500" src="/client/public/readme/gif/modal.gif"/>
    </details>
  </dd>
</dl>
</br>

## 🏄🏼‍♂️ Toggle

---

<dl>
  <dt>구현방법과 이유</dt>
  <dd>토글 버튼의 기본형태를 Presentational Component로 구성하고, Container Component에서 상태를 변경시키는 함수를 전달받아 실행하는 형태로 만들었습니다. </dd>
  <dd>위와같이 구분한 이유는 데이터로직을 처리하는 컴포넌트와 UI 표현을 위한 컴포넌트를 분리하여 유지보수를 조금 더 원활하게 하는 연습을 하기 위해서였습니다.</dd>
  </br>

  <dt>어려웠던 점</dt>
  <dd>토글 버튼을 통해 구현하고 싶었던 내용은 <strong>다크모드</strong>를 실현하는 것이었습니다.</dd>
   <dd>만약 다크모드를 도입하려 한다면,토글버튼이 눌러지면서 변경되는 상태는 전역적으로 관리되어야 할 필요가 있었고 새로고침을 하더라도 그 상태가 없어지지 않아야 했습니다.</dd>

 <dd>참조할만한 사이트를 찾던 도중, 블로깅에 사용하는 <i>Velog</i>에 다크모드가 있는 것을 보고 혹시 상태를 Local Storage에 저장하고 있는지를 궁금하여 확인해보았습니다.</dd>

> <p align="center"> <img src="/client/public/readme/2.png" width="450px"> </p>

  <dd>위 내용을 확인한 후, 전역적 스타일 상태관리를 위한 방법으로 styled-component가 제공하는 <strong>Theme-Provkder</strong>을 이용하여 각각 분리해둔 화이트모드와 다크모드 Theme을 활용하였습니다.
  </dd>

  <dd>
   또한 토글을 통해 저장되는 상태는 redux에 저장한 뒤, reux-persist를 통해 자동으로 Local-storage에 해당 내용이 저장되도록 구현하였습니다.
  </dd>
  </br>

  <dt>자세한 실행방법</dt>
   <dd>
    <details>
    <summary>우측 하단 버튼 클릭시 토글 다크모드 / 화이트모드</summary>
        <img width="500" src="/client/public/readme/gif/toggle.gif"/>
    </details>
  </dd>
</dl>

</br>

## 🤽🏼‍♀️ Auto-Complete

---

<dl>
  <dt>구현방법과 이유</dt>
  <dd><strong>React-Query</strong>를 이용하여 비동기로 서버에 데이터베이스를 조회 후, 결과물을 DropDown 요소에 리스트로 반영하게 하였습니다. 또한 debounce를 이용하여 매 검색어가 입력될 때마다 요청이 가지 않도록 구현하였습니다.</dd>

  <dd>
  React-Query를 사용한 이유는 요청 처리의 흐름을 관리하기 위한 상태들 (ex, Error, Loading) 이 너무 많아지는 것을 개선해보고 싶었기 때문입니다.</dd>
</br>
  <dt>어려웠던 점</dt>
  <dd>기본적으로 React-Query는 useEffect 훅처럼 컴포넌트가 마운트되면 바로 요청이 실행되는 구조로 되어있기 때문에, 해당 행동을 막는 방법을 찾을 필요가 있었습니다.</dd>

  <dd>또한 검색어가 입력이 되었을 때에는 조건부로 요청이 전달될 수 있도록 만들 필요가 있었습니다.</dd>

  <dd>위의 기능을 찾기 위해 많은 자료를 찾아보았고, 공식 문서에서 해당 옵션을 발견할 수 있었습니다.</dd>

> <p align="center"> <img src="/client/public/readme/3.png" width="450px"> </p>

  <dd>내용상 refetch를 호출하면 의도적인 요청을 만들 수 있고, 옵션인 <i>cancleRefetch</i>를 이용하면 마치 axios의 cancelToken처럼 기존 요청을 취소하는 옵션을 가지고 있습니다.</dd>

   <dd>이를 통해 가져온 필터 리스트들을 보여줌과 동시에, 키보드의 입력에 따라 onKeyDown 이벤트를 인식시켜 인덱스에 해당하는 필터 결과물에 UI적으로 표시가 되도록 하였고, 검색 필터에 연관된 단어에 붉은색인 하이라이트를 주기 위해 span으로 단어를 모두 나눈 뒤, 일치하는 단어에 스타일링을 재조정하는 방법으로 구현하였습니다.</dd>

<dd>조금 아쉬운 점이 있다면 react-query의 강점은 한번 받아온 응답정보를 context API처럼 저장하여 전달하는 캐싱 기능에 강점을 보이는데, 사용을 많이 해보지 못했어서 다음번에 활용 시 더욱 적극적으로 캐싱정보를 이용해 서버 부담을 줄이는 방안을 고려해보고 싶습니다.</dd>
</br>
  <dt>자세한 실행방법</dt>
  <dd>
    <details>
    <summary>게스트 로그인 후 검색 요청시 자동필터</summary>
        <img width="500" src="/client/public/readme/gif/autoComplete.gif"/>
    </details>
  </dd>
</dl>

</br>

## 🏋🏽‍♂️ Tag

---

<dl>
  <dt>구현방법과 이유</dt>
  <dd>태그는 Velog의 태그 기능을 참조하여 <i>"Enter"</i> 키나 <i>","</i> 키를 누를 때 자동으로 태그 리스트에 추가되고, 태그를 누르면 태그 배열에서 제외되는 방식으로 구현하였습니다. </dd>
  <dd>
  또한 자동으로 위치 조정을 하도록 만들기 위해 flex의 wrap 기능을 활용하였습니다.</dd>
</br>
  <dt>어려웠던 점</dt>
  <dd>사실 원래 목표는 grid를 이용하여 태그들을 조정하는 방법을 이용하고 싶었지만, 의도했던 대로 태그들이 조정되지 않아 상당한 시간을 소요하였습니다.</dd>
  <dd>또한 input 입력 때 <strong>","</strong> 키를 인식하여 해당 키가 눌렸을 때에는 onChange가 아니라 onKeyDown으로 진행되도록 만들기 위해 로직이 두개로 분리된 것이 몹시 아쉬웠습니다.</dd>

  <dd>
  react에서 제공하는 Synthetic event를 만드는 생성자 함수가 무엇인지를 찾지 못해서 조금 난잡하게 로직이 분리된 것이 조금 섭섭합니다.</dd>

> <p align="center"> <img src="/client/public/readme/4.png" width="450px"> </p>

</br>

  <dt>자세한 실행방법</dt>
  <dd>
  <details>
    <summary>태그 입력후 엔터나 ","를 누르면 추가</summary>
        <img width="500" src="/client/public/readme/gif/tag.gif"/>
    </details>
  </dd>
</dl>

</br>

## ⚙️ Click-To-Edit

---

<dl>
  <dt>구현방법과 이유</dt>
  <dd>누르는 input 위에 wrapper가 될 요소를 추가한 후, 해당 래퍼를 누르면 useRef를 통해 등록된 current 안의 input에 포커싱이 되게 하였습니다.</dd>
    <dd>그 후 포커싱이 사라지면 onBlur을 통해 해당 내용에 상태로 저장되도록 만들었습니다.</dd>
        <dd>wapper로 감싼 이유는 클릭 후에 입력창을 입력하는 형태로 만들기 위해서입니다.</dd>
</br>
  <dt>어려웠던 점</dt>
  <dd>wrapper의 위치를 input보다 상위에 놓기 위해서 z-index와 부모 요소가 더 필요했습니다</dd>
  <dd>이에 따라 내부적인 클래스명의 복잡도가 증가하여 개발을 하던 도중에 수정이 필요하면 상당히 시간이 걸리게 되었습니다</dd>
<dd>그래서 유저정보 변경 서비스 부분에서는 래퍼 컴포넌트 대신 input 텍스트 요소를 자식으로 품는 Element가 클릭되면 input으로 대체되게 해보았지만 두 요소의 스타일적인 형태가 달라 클릭시 살짝 css가 어긋나는걸 막기 위해 임시로 크기를 하드코딩으로 맞춘 부분도 너무 아쉽습니다.</dd>
</br>
  <dt>자세한 실행방법</dt>
  <dd>
    <details>
    <summary>로그인 후 설정창에서 닉네임 클릭후 저장시 변경</summary>
        <img width="500" src="/client/public/readme/gif/clickToEdit.gif"/>
    </details>
    </dd>
</dl>

## 🗄 Tab

---

<dl>
  <dt>구현방법과 이유</dt>
  <dd>현재 idx정보와, 탭 리스트를 상태로 저장한 후, 탭 리스트를 li 형태로 변형하여 요소를 생성하였습니다.</dd>

  <dd>map을 이용하여 요소를 제작한 이유는 map에서 제공하는 index의 정보를 이용해 onClick시의 인덱스를 추적하기 용이하도록 만들기 위해서입니다.</dd>
</br>
  <dt>어려웠던 점</dt>
  <dd>각 탭에 모두 다 함수를 설정하기 보다 이벤트 위임을 통해 상위 부모가 이벤트를 인식하고 처리하도록 만들기 위해 event bubbling을 활용하였습니다.</dd>

  <dd>이 과정에서 평소 react를 사용하며 제어 컴포넌트를 이용하다 보니 dom이 제공하는 API가 손에 익지 않아 구현하는 내용이 조금 길어지기 시작했습니다.</dd>

  <dd>추가적으로, 초기 유저 데이터를 가져오는 로딩 과정이 추가되어있는데 탭이 바뀔 때 이게 깜빡이듯이 보여서 해당 내용을 어떻게하면 더 자연스럽게 보일지 고민됩니다</dd>

> <p align="center"> <img src="/client/public/readme/5.png" width="450px"> </p>

</br>
  <dt>자세한 실행방법</dt>
  <dd>
   <details>
    <summary>로그인 후 설정창에서 메뉴 탭 클릭</summary>
        <img width="500" src="/client/public/readme/gif/tab.gif"/>
    </details>
    </dd>
</dl>
