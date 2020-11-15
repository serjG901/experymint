import React, { useEffect, useState } from "react";
import { getUserData, getDataForType } from "./UsersData.js";
import { getCloseIndex } from "./functionChat.js";
import ChatListItem from "./ChatListItem.js";
import SaSTextForm from "./SaSTextForm.js";

function getChatList(userData, resultsData) {
  const arrKeysAllResult = Object.keys(resultsData);
  const chatList = arrKeysAllResult.map((key) => {
    return {
      name: key,
      closeIndex: getCloseIndex(userData.results, resultsData[key])
    };
  });
  chatList.sort((a, b) => {
    return b.closeIndex - a.closeIndex;
  });
  return chatList;
}

function ChatList({ userID }) {
  const [userData, setUserData] = useState({});
  const [data, setData] = useState({});
  const [resultsData, setResultsData] = useState({});
  const [chatList, setChatList] = useState([]);
  const [changeData, setChangeData] = useState(true);

  useEffect(() => {
    setUserData(getUserData(userID));
  }, [userID, changeData]);

  useEffect(() => {
    setResultsData(getDataForType(userID, "results"));
  }, [userID, changeData]);

  useEffect(() => {
    setData({
      mistruth: getDataForType(userID, "mistruth"),
      score: getDataForType(userID, "mistruth"),
      manifest: getDataForType(userID, "manifest"),
      avatar: getDataForType(userID, "avatar"),
      tags: getDataForType(userID, "tags")
    });
  }, [userID, changeData]);

  useEffect(() => {
    if (userData && resultsData) {
      const list = getChatList(userData, resultsData);
      setChatList(list);
    }
  }, [userData, resultsData, changeData]);

  function handleChangeData() {
    setChangeData(!changeData);
  }

  return (
    <div>
      <SaSTextForm
        onChangeData={handleChangeData}
        userID={userID}
        typeText="filter"
      />
      {chatList ? (
        chatList.map((item) => {
          const userData = {
            name: item.name,
            closeIndex: item.closeIndex,
            mistruth: data.mistruth[item.name],
            score: data.score[item.name],
            manifest: data.manifest[item.name],
            avatar: data.avatar[item.name],
            tags: data.tags[item.name]
          };

          return <ChatListItem key={item.name} userData={userData} />;
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default ChatList;
