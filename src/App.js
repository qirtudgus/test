import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

//데브 브랜치의 주석
function App() {
  const 로컬호출 = () => {
    axios({
      url: "http://localhost:3002/api/test", // 통신할 웹문서
      method: "post", // 통신할 방식
      data: {
        // 인자로 보낼 데이터
        foo: "diary",
      },
    }).then((res) => {
      console.log(res.data);
    });
  };

  const 아이피호출 = () => {
    axios({
      url: "http://54.180.46.178:3002/api/test", // 통신할 웹문서
      method: "post", // 통신할 방식
      data: {
        // 인자로 보낼 데이터
        foo: "diary",
      },
    }).then((res) => {
      console.log(res.data);
    });
  };

  const 도메인호출 = () => {
    axios({
      url: "https://sungtt.com/api/test", // 통신할 웹문서
      method: "post", // 통신할 방식
      data: {
        // 인자로 보낼 데이터
        foo: "diary",
      },
    }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      <button onClick={로컬호출}>
        http://localhost:3002/api/test API테스트
      </button>
      <button onClick={아이피호출}>
        http://54.180.46.178:3002/api/test API테스트
      </button>
      <button onClick={도메인호출}>
        https://sungtt.com/api/test API테스트
      </button>
    </>
  );
}

export default App;
