import React, { useEffect, useState } from "react";
import { sendMessage, getMessages, deleteMessage } from "./messageData";
import { useUserID } from "./UserIDProvider";
import Message from "./Message";
import SendButton from "./SendButton";
import TextareaAutosize from "react-textarea-autosize";

export default function OtherUserChat({ isOpen, otherUserID }) {
  const userID = useUserID();
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState([]);
  const [isSync, setIsSync] = useState(true);

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
            isSeen={isOpen}
            key={msg.date}
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
