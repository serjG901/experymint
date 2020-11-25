import React, { useEffect, useState } from "react";
import { getUserData, getDataForType } from "../../lib/usersData";
import { getClosestUsers } from "../../lib/getIndexFunctions";
import OtherUser from "./OtherUser";
import FormSendAndShowText from "../common/FormSendAndShowText";
import { useUserID } from "../core/UserIDProvider";
import { useTheme } from "../core/ThemeProvider";
import { PropertyUserProvider } from "../core/PropertyUserProvider";

export default function ChatList() {
  const userID = useUserID();
  const [userData, setUserData] = useState({});
  const [data, setData] = useState({});
  const [resultsData, setResultsData] = useState({});
  const [chatList, setChatList] = useState([]);
  const themeColor = useTheme();

  useEffect(() => {
    setUserData(getUserData(userID));
  }, [userID]);

  useEffect(() => {
    setResultsData(getDataForType(userID, "results"));
  }, [userID]);

  useEffect(() => {
    setData({
      mistruth: getDataForType(userID, "mistruth"),
      manifest: getDataForType(userID, "manifest"),
      avatar: getDataForType(userID, "avatar"),
      tags: getDataForType(userID, "tags")
    });
  }, [userID]);

  useEffect(() => {
    if (userData && resultsData) {
      const closestUsers = getClosestUsers(userData, resultsData);
      setChatList(closestUsers);
    }
  }, [userData, resultsData]);

  return (
    <div>
      <p className={`${themeColor.colorTextExplane}`}>Closest people</p>
      <PropertyUserProvider>
        <FormSendAndShowText nameProperty="filter" />
      </PropertyUserProvider>
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

            return <OtherUser key={item.name} userData={userData} />;
          })
        : null}
    </div>
  );
}
