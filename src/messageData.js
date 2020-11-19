import { User } from "./currentUser.js";

let messages = Array.from(
  JSON.parse(window.localStorage.getItem("messages")) || []
);

console.log(messages);

function getMessageID(...args) {
  return [...args].join("");
}

export function setIsRead(id) {
  messages = messages.map((msg) =>
    msg.id === id ? { ...msg, isRead: true } : msg
  );
  addMessagesInStorage();
  return true;
}

export function sendMessage(otherUserID, message, currentDate) {
  messages = [
    ...messages,
    {
      id: getMessageID(otherUserID, currentDate),
      from: User.currentID,
      to: otherUserID,
      text: message,
      date: currentDate,
      isSend: true,
      isRead: false
    }
  ];
  addMessagesInStorage();
  return true;
}

export function getMessages(otherUserID) {
  const curentUserID = User.currentID;
  const filtredMessages = messages.filter(
    (msg) =>
      (msg.from === curentUserID && msg.to === otherUserID) ||
      (msg.from === otherUserID && msg.to === curentUserID)
  );
  return filtredMessages;
}

export function deleteMessage(id) {
  messages = messages.filter((msg) => msg.id !== id);
  addMessagesInStorage();
  return true;
}

function addMessagesInStorage() {
  let err = false;
  try {
    window.localStorage.setItem("messages", JSON.stringify(messages));
  } catch (e) {
    console.log(e);
    err = e;
  }
  if (err) return false;
  return true;
}
