import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches); // 윈도우 리사이즈마다 상태가 업데이트하는 리스너 (단 같은값이 업데이트되면 리랜더링 안함)
    window.addEventListener("resize", listener); //윈도우 리사이즈마다 해당 이벤트 감지

    return () => window.removeEventListener("resize", listener); // 사용된 컴포넌트 마운트 해제시 해당 이벤트 리스너 해제
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
