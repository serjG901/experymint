import { useEffect, useState } from "react";

function ConstantStyle(theme) {
  const getTheme = () => {
    return theme;
  };

  const logoText = `
    text-${theme}-300 
    font-bold
    text-5xl
    `;

  const Login = ` 
    flex 
    flex-col 
    items-center 
    justify-center
    `;

  const Main = `
    h-screen
    App
    text-white
    bg-gradient-to-b 
    from-${theme}-500
    via-${theme}-600 
    to-${theme}-300
    `;

  const nameUser = `
    break-word
    font-bold
    text-5xl
    `;

  const buttonSend = `
    shadow-md
    bg-${theme}-500 
    hover:bg-${theme}-700 
    mb-4
    mx-4 
    py-2 
    px-4 
    rounded 
    cursor-pointer
    focus:outline-none 
    focus:shadow-outline
    `;

  const routerLi = `
    flex-1
    w-1/4
    `;

  const routerLinkStyle = `
    text-black 
    py-2 
    px-4 
    block
    text-center
    h-full
    `;

  const routerLink = `
    bg-${theme}-300 
    hover:bg-${theme}-500 
    ${routerLinkStyle}
    `;

  const routerLinkActive = `
    bg-${theme}-500
    `;

  const routerLinkQuit = `
    text-white
    font-bold 
    bg-gray-600 
    hover:bg-gray-700 
    ${routerLinkStyle}
    `;

  const itemChatList = `
    cursor-pointer
    bg-${theme}-200 
    hover:bg-${theme}-400 
    text-black
    `;

  const itemChatListHeader = `
    flex 
    items-center 
    p-2 
    my-2
    `;

  const itemChatListHeaderLeft = `
    flex 
    w-1/2
    items-center
    `;

  const itemChatListHeaderLeftName = `
    flex-1 
    font-bold
    w-1/2
    break-word
    `;

  const itemChatListHeaderLeftStatistic = `
    flex-1 
    `;

  const itemChatListHeaderRight = `
    w-1/2
    font-bold
    break-word
    `;

  const itemChatListBody = `
    flex
    `;

  const itemChatListBodyLeft = `
    w-1/3 p-4
    `;

  const itemChatListBodyRight = `
    w-2/3 p-4
    `;

  const formData = ` 
    px-2 
    pt-2 
    pb-2 
    mb-2
    `;

  const labelForm = `
    block 
    text-sm 
    mb-2
    cursor-pointer
    `;

  const inputText = `
  w-full
    text-center
    shadow 
    appearance-none 
    rounded  
    py-2 
    px-2 
    text-gray-700  
    focus:outline-none 
    focus:shadow-outline
    `;

  const textData = `
    break-word 
    text-black
    rounded
    text-2xl 
    font-bold 
    hover:bg-${theme}-100 
    cursor-pointer
    `;

  const CS = {
    getTheme,
    logoText,
    Login,
    Main,
    nameUser,
    buttonSend,
    routerLi,
    routerLink,
    routerLinkActive,
    routerLinkQuit,
    itemChatList,
    itemChatListHeader,
    itemChatListHeaderLeft,
    itemChatListHeaderLeftName,
    itemChatListHeaderLeftStatistic,
    itemChatListHeaderRight,
    itemChatListBody,
    itemChatListBodyLeft,
    itemChatListBodyRight,
    formData,
    labelForm,
    inputText,
    textData
  };

  return CS;
}

function useConstantStyle(theme = "teal") {
  const [themeColor, setThemeColor] = useState(() => {
    return window.localStorage.getItem("theme") || theme;
  });

  const [CS, setCS] = useState(() => {
    return ConstantStyle(themeColor);
  });

  useEffect(() => {
    setCS(ConstantStyle(themeColor));
    window.localStorage.setItem("theme", themeColor);
  }, [themeColor]);

  return [CS, setThemeColor];
}

export { useConstantStyle };
