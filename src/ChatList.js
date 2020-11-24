import React, { useEffect, useState } from "react";
import { getUserData, getDataForType } from "./usersData";
import { getClosestUsers } from "./getIndexFunctions";
import ChatListItem from "./ChatListItem";
import FormSendAndShowText from "./FormSendAndShowText";
import { useUserID } from "./UserIDProvider";

export default function ChatList() {
  const userID = useUserID();
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
      manifest: getDataForType(userID, "manifest"),
      avatar: getDataForType(userID, "avatar"),
      tags: getDataForType(userID, "tags")
    });
  }, [userID, changeData]);

  useEffect(() => {
    if (userData && resultsData) {
      const closestUsers = getClosestUsers(userData, resultsData);
      setChatList(closestUsers);
    }
  }, [userData, resultsData, changeData]);

  function handleChangeData() {
    setChangeData(!changeData);
  }

  return (
    <div>
      <p className="text-gray-700">Closest people</p>
      <FormSendAndShowText onChangeData={handleChangeData} typeText="filter" />
      {chatList
        ? chatList.map((item) => {
            const userData = {
              name: item.name,
              indexOfClosest: item.indexOfClosest,
              mistruth: data.mistruth[item.name],
              manifest: data.manifest[item.name],
              avatar: data.avatar[item.name],
              tags: data.tags[item.name]
            };

            return <ChatListItem key={item.name} userData={userData} />;
          })
        : null}
    </div>
  );
}
