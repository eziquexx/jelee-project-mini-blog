import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
import MainPage from "./component/page/MainPage.jsx";
import PostViewPage from "./component/page/PostViewPage.jsx";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>JELEE의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage />}/>
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
