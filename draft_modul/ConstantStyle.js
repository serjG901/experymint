let theme = "teal";
const setTheme = (newTheme) => {
  theme = newTheme;
  console.log(theme);
};

const getTheme = () => {
  return theme;
};

const colorTheme = (color) => {
  return `
  flex-1
  h-6 
  w-6
  cursor-pointer
  bg-${color}-500
  `;
};

let logoText = `
text-${theme}-300 
font-bold
text-6xl
`;

const divLogin = ` 
  flex 
  flex-col 
  items-center 
  justify-center`;

//h-screen
const divMain = `
  App
  text-white
  bg-gradient-to-b 
  from-${theme}-500
  via-${theme}-600 
  to-${theme}-300`;
/*
const loginForm = `
  shadow-md 
  rounded 
  px-8 
  pt-4 
  pb-4 
  mb-4
  bg-gradient-to-b 
  from-${theme}-200 
  via-${theme}-400 
  to-${theme}-200`;
*/
const nameUser = `
  font-bold
  text-6xl`;

const buttonSend = `
  bg-${theme}-500 
  hover:bg-${theme}-700 
  m-2 
  py-2 
  px-4 
  rounded 
  focus:outline-none 
  focus:shadow-outline
  `;

const routerLinkStyle = `
  text-black 
  font-bold 
  py-2 
  px-4 
  focus:outline-none 
  block
  text-center
  `;

const routerLink = `
  bg-${theme}-300 
  hover:bg-${theme}-500 
  ${routerLinkStyle}
  `;

const routerLinkActive = `bg-${theme}-500`;

const routerLinkQuit = `
  bg-gray-500 
  hover:bg-gray-700 
  ${routerLinkStyle}
  `;

const textStyle = (color) => {
  return `text-${color} font-bold text-2xl`;
};

const itemChatList = `
bg-${theme}-200 
hover:bg-${theme}-400 
text-black`;
/*
const formDataBG = `
  shadow-md 
  bg-${theme}-200`;
*/

const formData = ` 
  px-2 
  pt-2 
  pb-2 
  mb-2`;

const label = `
  block 
  text-sm 
  mb-2`;

const inputText = `
  text-center
  shadow 
  appearance-none 
  border 
  rounded 
  w-full 
  py-2 
  px-2 
  text-gray-700 
  leading-tight 
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
  cursor-pointer`;

const copyright = `
  text-xs 
  absolute 
  bottom-0`;

let CS = {
  setTheme,
  getTheme,
  colorTheme,
  logoText,
  divLogin,
  divMain,
  nameUser,
  buttonSend,
  routerLink,
  routerLinkActive,
  routerLinkQuit,
  textStyle,
  itemChatList,
  formData,
  label,
  inputText,
  textData,
  copyright
};

export default CS;
