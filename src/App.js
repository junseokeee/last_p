import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Board from "./component/Board";
import Recom from "./component/Recom";
import Today from "./component/Today";
import MyPage from "./component/MyPage";
import Search from "./component/Search";
import MainHeader from "./MainHeader";
import swal from "sweetalert";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission and page refresh

    // Perform login authentication logic here
    if (username === "이준석" && password === "1234") {
      // Simulating an asynchronous delay of 2 seconds for the success message
      await new Promise((resolve) => setTimeout(resolve, 100));

      setLoggedIn(true);
      navigate("/Today");
      swal({
        title: "로그인 성공",
        text: "다시 오신 것을 환영합니다!",
        icon: "success",
        timer: 2000, // Adjust the duration (in milliseconds) as needed
        buttons: false,
      });
    } else {
      swal({
        title: "아이디나 비밀번호가 틀렸습니다.",
        text: "다시 시도해 주세요.",
        icon: "error",
        timer: 3000, // Adjust the duration (in milliseconds) as needed
        buttons: false,
      });
    }
  };

  const handleLogout = () => {
    swal({
      title: "로그아웃",
      text: "로그아웃 하시겠습니까?",
      icon: "warning",
      buttons: ["취소", "로그아웃"],
      dangerMode: true,
    }).then((willLogout) => {
      if (willLogout) {
        setLoggedIn(false);
        setUsername("");
        setPassword("");
        swal("로그아웃", "로그아웃이 완료되었습니다.", "success");
      }
    });
  };

  const handleUpdateUsername = (updatedUsername) => {
    setUsername(updatedUsername);
  };

  return (
    <div className="App">
      <MainHeader />
      <main className="main">
        {loggedIn ? (
          <div>
            <div className="logout-button-container">
              <span>Logged in as {username}</span>
              <button onClick={handleLogout}>Log Out</button>
            </div>
            <Routes>
              <Route path="/Today" element={<Today />} />
              <Route path="/Board" element={<Board />} />
              <Route path="/Recom" element={<Recom />} />
              <Route path="/Search" element={<Search />} />
              <Route
                path="/Mypage"
                element={<MyPage updateUsername={handleUpdateUsername} />}
              />
            </Routes>
          </div>
        ) : (
          <div className="login-container">
            <h1>WELCOME !</h1>
            <br />
            <h1>Please log in to view Song Scope.</h1>
            <br />
            <br />
            <br />
            <br />
            <br />

            <form onSubmit={handleLogin}>
              <label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="아이디"
                />
              </label>
              <br />
              <label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호"
                />
              </label>
              <br />
              <button type="submit">Log In</button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
