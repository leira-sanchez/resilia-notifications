import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { getNotifications, toggleRead } from "./api";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 20%;
  }
`;

const Notification = styled.div`
  width: 100%;
  background: ${({ isRead }) => (isRead ? "lightgray" : "lightpink")};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin: 1px;
  border: none;
  text-align: left;
  cursor: pointer;

  p {
    margin: 0;
    width: 400px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    font-size: 0.75em;
    color: ${({ isRead }) => (isRead ? "#404040" : "gray")};
  }
`;

const makeId = () => {
  let result = "";
  const validCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < 6; i++) {
    result += validCharacters.charAt(
      Math.floor(Math.random() * validCharacters.length)
    );
  }
  return result;
};

function App() {
  const [notifications, setNotifications] = useState([]);

  const allNotifications = notifications.map((notification) => (
    <Notification
      key={notification.id}
      isRead={notification.isRead}
      onClick={() =>
        console.log("redirecting to notification source: ", notification.title)
      }
    >
      <div>
        <p>{notification.title}</p>
        <span>{notification.date}</span>
      </div>
      <button
        title={`Click to mark as ${notification.isRead ? "unread" : "read"}`}
        onClick={() => {
          toggleRead(notification.id);
          setNotifications(getNotifications());
        }}
      >
        {`Mark as ${notification.isRead ? "unread" : "read"}`}
      </button>
    </Notification>
  ));

  useEffect(() => {
    if (!localStorage.getItem("resilia-user")) {
      localStorage.setItem("resilia-user", { userId: makeId() });
    }
    setNotifications(getNotifications());
  }, []);

  return (
    <div>
      <GlobalStyle />
      <header>
        <h1>Resilia Notifications</h1>
        <p>by Leira C Sánchez Quiñones</p>
      </header>
      <main>{allNotifications}</main>
    </div>
  );
}

export default App;
