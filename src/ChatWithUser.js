import React, { useEffect, useState, useContext } from "react";
import { sendMessage, getMessages, deleteMessage } from "./messageData.js";
import UserIDContext from "./UserIDContext.js";
import Message from "./Message.js";
import SendButton from "./SendButton.js";
import TextareaAutosize from "react-textarea-autosize";

export default function ChatWithUser({ otherUserID }) {
  const userID = useContext(UserIDContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(getMessages(otherUserID));

  function getMessageID(...args) {
    console.log([...args].join(""));
    return [...args].join("");
  }

  function handleMessageChange(event) {
    const draft = event.currentTarget.value;
    setMessage(draft);
  }

  function handleMessageSubmit(event) {
    event.preventDefault();
    const currentDate = Date.now();
    const oldMessages = messages;
    const oldMessage = message;
    setMessages([
      ...messages,
      {
        id: getMessageID(otherUserID, currentDate),
        from: userID,
        to: otherUserID,
        text: message,
        date: currentDate
      }
    ]);
    setMessage("");
    const status = sendMessage(otherUserID, message, currentDate);
    if (!status) {
      setMessages(oldMessages);
      setMessage(oldMessage);
    }
  }

  useEffect(() => {
    setMessages(getMessages(otherUserID));
  }, [otherUserID]);

  function handleDeleteMessage(id) {
    const oldMessages = messages;
    setMessages(messages.filter((msg) => msg.id !== id));
    const status = deleteMessage(id);
    if (!status) setMessages(oldMessages);
  }

  return (
    <div>
      <span className="text-gray-700">chat</span>

      <div className="flex flex-col">
        {messages.map((msg) => (
          <Message
            key={msg.id}
            msg={msg}
            onDeleteMessage={handleDeleteMessage}
          />
        ))}
      </div>

      <form className="flex justify-end" onSubmit={handleMessageSubmit}>
        <TextareaAutosize
          type="text"
          className="w-2/3             
            mb-4 py-2 px-2 
            text-gray-700
            rounded shadow
            appearance-none 
            focus:outline-none 
            focus:shadow-outline"
          placeholder={`message for ${otherUserID}`}
          onChange={handleMessageChange}
          value={message}
        />
        <SendButton>Send</SendButton>
      </form>
    </div>
  );
}
