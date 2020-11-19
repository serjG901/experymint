import React, { useEffect, useState, useContext } from "react";
import { sendMessage, getMessages, deleteMessage } from "./messageData.js";
import UserIDContext from "./UserIDContext.js";
import Message from "./Message.js";
import SendButton from "./SendButton.js";
import TextareaAutosize from "react-textarea-autosize";

export default function ChatWithUser({ openBody, otherUserID }) {
  const userID = useContext(UserIDContext);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState([]);
  const [isSync, setIsSync] = useState(true);

  function getMessageID(...args) {
    return [...args].join("");
  }

  function handleDraftChange(event) {
    setDraft(event.currentTarget.value);
  }

  function handleMessageSubmit(event) {
    event.preventDefault();
    const currentDate = Date.now();
    const oldMessages = messages;
    const oldMessage = draft;
    setMessages([
      ...messages,
      {
        id: getMessageID(otherUserID, currentDate),
        from: userID,
        to: otherUserID,
        text: draft,
        date: currentDate,
        isSend: false,
        isRead: false
      }
    ]);
    setDraft("");
    const status = sendMessage(otherUserID, draft, currentDate);
    if (!status) {
      setMessages(oldMessages);
      setDraft(oldMessage);
      return;
    }
    setIsSync(true);
  }

  useEffect(() => {
    setMessages(getMessages(otherUserID));
    setIsSync(false);
  }, [otherUserID, isSync]);

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
            openBody={openBody}
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
          onChange={handleDraftChange}
          value={draft}
        />
        <SendButton>Send</SendButton>
      </form>
    </div>
  );
}
