import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyPage.css";

function MyPage({ updateUsername }) {
  const [username, setUsername] = useState("이준석");
  const [password, setPassword] = useState("1234");
  const [updatedUsername, setUpdatedUsername] = useState("");
  const [updatedPassword, setUpdatedPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUpdatedUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setUpdatedPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUsername(updatedUsername);
    setPassword(updatedPassword);
    updateUsername(updatedUsername);
    setUpdatedUsername("");
    setUpdatedPassword("");
    navigate("/Today"); // Optional: Navigate to a different route after updating the username
  };

  return (
    <div className="mypage-container">
      <h2>My Page</h2>
      <br />
      <br />
      <form onSubmit={handleFormSubmit}>
        <div className="input-container">
          <label htmlFor="newUsername"></label>
          <input
            placeholder="새로운 아이디를 입력해주세요"
            type="text"
            id="newUsername"
            value={updatedUsername}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="newPassword"></label>
          <input
            placeholder="새로운 비밀번호를 입력해주세요"
            type="password"
            id="newPassword"
            value={updatedPassword}
            onChange={handlePasswordChange}
          />
        </div>
        <br />
        <button type="submit" className="borderless-button">
          Update
        </button>
      </form>
      <br />
      <h3>Current Information</h3>
      <br />
      <p>ID: {username}</p>
      <p>Password: {password}</p>
    </div>
  );
}

export default MyPage;
