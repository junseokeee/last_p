import Board from "./component/Board";
import Recom from "./component/Recom";
import Today from "./component/Today";
import MyPage from "./component/MyPage";
import Search from "./component/Search";
import MainHeader from "./MainHeader";
import { Route, Routes } from "react-router-dom";

import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main className="main">
        <Routes>
          <Route path="/Today" element={<Today />} />
          <Route path="/Board" element={<Board />} />
          <Route path="/Recom" element={<Recom />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Mypage" element={<MyPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
