import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
function App() {
  return (
    <button
      onClick={() => {
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
      }}
    >
      API테스트
    </button>
  );
}

export default App;
