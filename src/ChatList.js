import React, { useEffect, useState } from "react";
import { getUserData, getDataForType } from "./UsersData.js";
import { getCloseIndex } from "./functionChat.js";
import ChatListItem from "./ChatListItem.js";
import InputFormData from "./InputFormData.js";

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

function ChatList({ CS, userID }) {
  const [userData, setUserData] = useState(() => {
    return {};
  });
  const [resultsData, setResultsData] = useState(() => {
    return {};
  });
  const [mistruthData, setMistruthData] = useState(() => {
    return {};
  });

  const [scoreData, setScoreData] = useState(() => {
    return {};
  });

  const [manifestData, setManifestData] = useState(() => {
    return {};
  });

  const [avatarData, setAvatarData] = useState(() => {
    return {};
  });

  const [tagsData, setTagsData] = useState(() => {
    return {};
  });

  const [chatList, setChatList] = useState(() => {
    return null;
  });

  const [changeData, setChangeData] = useState(true);

  useEffect(() => {
    setUserData(getUserData(userID));
  }, [userID, changeData]);

  useEffect(() => {
    setResultsData(getDataForType(userID, "results"));
  }, [userID, changeData]);

  useEffect(() => {
    setMistruthData(getDataForType(userID, "mistruth"));
  }, [userID, changeData]);

  useEffect(() => {
    setScoreData(getDataForType(userID, "score"));
  }, [userID, changeData]);

  useEffect(() => {
    setManifestData(getDataForType(userID, "manifest"));
  }, [userID, changeData]);

  useEffect(() => {
    setAvatarData(getDataForType(userID, "avatar"));
  }, [userID, changeData]);

  useEffect(() => {
    setTagsData(getDataForType(userID, "tags"));
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
      <InputFormData
        CS={CS}
        onChangeData={handleChangeData}
        userID={userID}
        typeData="filter"
      />
      {chatList
        ? chatList.map((item) => {
            const userData = {
              name: item.name,
              closeIndex: item.closeIndex,
              mistruth: mistruthData[item.name],
              score: scoreData[item.name],
              manifest: manifestData[item.name],
              avatar: avatarData[item.name],
              tags: tagsData[item.name]
            };

            return <ChatListItem key={item.name} CS={CS} userData={userData} />;
          })
        : ""}
    </div>
  );
}

export default ChatList;
