import React, { useContext, useEffect, useState } from "react";

const LanguageContext = React.createContext();

export const useLanguage = () => {
  return useContext(LanguageContext).language;
};

export const useLanguageSet = () => {
  return useContext(LanguageContext).setCurrentLanguage;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(
    window.localStorage.getItem("language") || "by"
  );

  useEffect(() => {
    window.localStorage.setItem("language", currentLanguage);
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider
      value={{ language: languageText[currentLanguage], setCurrentLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const languageText = {
  by: {
    name: "by",
    loginConnect: "Падключэнне...",
    loginCrash: "Даныя не захаваны! Паспрабуй яшчэ.",
    loginLabelName: {
      1: "ُУнікальнае імя",
      2: "Добрае новае імя",
      3: "Гэта імя занята"
    },
    loginLabelPassword: {
      1: "Пароль",
      2: "Пароль няправільны"
    },
    loginButton: "Увайсці",
    languageSetter: "Задайце мову",
    languageSetterSample: {
      1: "Задаць",
      2: "мову"
    },
    languageName: {
      by: "беларускую",
      en: "англійскую",
      ru: "рускую"
    },
    colorSetter: "Задайце каляровую тэму",
    colorSetterSample: {
      1: "Задаць",
      2: "тэму"
    },
    themeName: {
      red: "чырвоную",
      orange: "аранжавую",
      yellow: "жоўтую",
      green: "зялёную",
      blue: "блакітную",
      indigo: "сінюю",
      purple: "фіялетавую",
      pink: "ружовую",
      gray: "шэрую",
      teal: "бірузовую",
      dark: "цёмную",
      light: "светлую",
      bee: "пчаліную",
      glam: "гламурную",
      fruit: "фруктовую",
      mint: "мятную"
    },
    sendButtonDefault: "Адправіць",
    formExplane: "Націсніце, каб змяніць",
    formTags: "тэгі",
    formFilter: "фільтр",
    formManifest: "маніфест",
    refreshData: "Загружаем вашыя дадзеныя...",
    updateData: "Абнаўляем вашыя дадзеныя...",
    computingAll: "Вылічаем вынікі ўсіх карыстальнікаў...",
    computingUnique: "Вылічаем ваш унікальны індэкс...",
    refreshOthers: "Загружаем іншых карыстальнікаў...",
    refreshClosest: "Загружаем самых блізкіх карыстальнікаў...",
    gameExplane: `, уявіце, што вы дырэктар галерэі сучаснага мастацтва.
    Пакіньце на сцяне карціны, якія вам спадабаюцца.`,
    leaveTitle: "Павесіць гэту карціну",
    leave: "Павесіць",
    removeTitle: "Наступная карціна",
    remove: "Наступная",
    setAvatarTitle: "Націсніце, каб усталяваць свой аватар",
    setAvatar: "Аватар",
    deleteAvatarTitle: "Націсніце, каб выдаліць свой аватар",
    deleteAvatar: "X",
    filterStatus: "адфільтравана па",
    filterStatusDefault: "ўсім",
    simpleIndexScore: "лік",
    simpleIndexMistruth: "пераменлівы",
    uniqueIndex: "унікальны",
    linkAccount: "На ўліковы запіс карыстальніка",
    linkGame: "Да гульні",
    linkChat: "У чат",
    linkQuit: "Выйсці",
    hello: {
      1: "Вітаю",
      2: "!"
    },
    helloText: {
      1: "Праходзіце нашу гульню і знаходзіце блізкіх Вам людзей.",
      2: "Матывацыя прыкладання - знайсці суразмоўцы з падобнымі поглядамі і кампанію для агульнага справы.",
      3: "Ўкладка вашага акаўнта, у якім вы можаце даведацца вынік праходжання гульні, усталяваць сваю аватарку, пазначыць інфармацыю аб сабе ў поле тэгаў, каб карыстальнікі маглі вас знайсці, ужыўшы фільтр.",
      4: "Лік - гэта агульная колькасць вашых адказаў.",
      5: "Пераменлівы - гэта колькасць змены вашых адказаў пры праходжанні гульні.",
      6: "Унікальны - працэнт унікальнасці вашага выніку ў параўнанні з агульным вынікам карыстальнікаў, адсеяных адносна ўсталяванага фільтра.",
      7: "Ўкладка гульні, пры праходжанні якой прыкладанне вызначае працэнт унікальнасці вашага выніку (унікальны паказчык) у параўнанні з астатнімі карыстальнікамі.",
      8: "Таксама вынік гульні (і чым больш вы яе пройдзеце) дапамагае знаходзіць карыстальнікаў, што найбольш блізкія да вашага выніку.",
      9: "Ўкладка чата, дзе вы пабачыце спіс карыстальнікаў прыкладання, адсартаваны па паказчыку, роўнаму адсотку супадзення вашых вынікаў, колькасці параўноўваных малюнкаў і значэнні устаноўленага фільтра.",
      10: "У чаце вы можаце пакінуць свой маніфест, што будзе бачны ўсім карыстальнікам.",
      11: "Маніфест іншых карыстальнікаў вы можаце ўбачыць у спісе чата справа ад імя карыстальніка.",
      12: "Націснуўшы на карыстальніка ў спісе вы зможаце ўбачыць дадатковую інфармацыю пра яго, а таксама адправіць яму сообшение.",
      13: "Знайдзіце сапраўды блізкіх Вам людзей!"
    },
    closestPeople: "Бліжэйшыя людзі",
    openUserInfo: "Націсніце, каб адкрыць інфармацыю пра карыстальніка",
    otherAvatarDefault: "аватарка",
    otherTagsDefault: "тэгі",
    otherManifestDefault: "маніфест",
    otherCloseness: "блізкасць",
    otherCompared: "параўнаў малюнкі",
    otherMistruth: "пераменлівы",
    otherChat: "чат з",
    messageFor: "паведамленне для",
    otherMessagesRefresh: "Загружаем паведамленні...",
    otherMessageSend: "Адпраўляем паведамленне...",
    otherMessageSendCrash: "Паведамленне не адпраўлена! Паспрабуйце яшчэ.",
    otherMessageDelete: "Выдаляем паведамленне...",
    otherMessageDeleteCrash: "Паведамленне не выдалена! Паспрабуй яшчэ."
  },
  en: {
    name: "en",
    loginConnect: "Connecting...",
    loginCrash: "Data not saved! Try again",
    loginLabelName: {
      1: "Unique name",
      2: "Good new name",
      3: "This name is occupied"
    },
    loginLabelPassword: {
      1: "Password",
      2: "Password is wrong"
    },
    loginButton: "Sign in",
    languageSetter: "Set language",
    languageSetterSample: {
      1: "Set",
      2: "language"
    },
    languageName: {
      by: "belarusian",
      en: "english",
      ru: "russian"
    },
    colorSetter: "Set color theme",
    colorSetterSample: {
      1: "Set",
      2: "theme"
    },
    themeName: {
      red: "red",
      orange: "orange",
      yellow: "yellow",
      green: "green",
      blue: "blue",
      indigo: "indigo",
      purple: "purple",
      pink: "pink",
      gray: "gray",
      teal: "teal",
      dark: "dark",
      light: "light",
      bee: "bee",
      glam: "glamur",
      fruit: "fruit",
      mint: "mint"
    },
    sendButtonDefault: "Send",
    formExplane: "Click to change",
    formTags: "tags",
    formFilter: "filter",
    formManifest: "manifest",
    refreshData: "Download your data...",
    updateData: "Update your data...",
    computingAll: "Computing all users results...",
    computingUnique: "Computing your unique index...",
    refreshOthers: "Download other users...",
    refreshClosest: "Download closest users...",
    gameExplane: `, imagine that you're the director of an modern art gallery.
    Leave on the wall pictures that you'd like.`,
    leaveTitle: "Hang the picture",
    leave: "Hang",
    removeTitle: "Next picture",
    remove: "Next",
    setAvatarTitle: "Click to set your avatar",
    setAvatar: "Avatar",
    deleteAvatarTitle: "Click to delete your avatar",
    deleteAvatar: "X",
    filterStatus: "filtred by",
    filterStatusDefault: "all",
    simpleIndexScore: "score",
    simpleIndexMistruth: "fickle",
    uniqueIndex: "unique",
    linkAccount: "To the user account",
    linkGame: "To the game",
    linkChat: "To the chat",
    linkQuit: "Sign out",
    hello: {
      1: "Hello",
      2: "!"
    },
    helloText: {
      1: "Go through our game and find people close to you.",
      2: "The motivation of the application is to find an interlocutor with similar views and a company for a common cause.",
      3: "The tab of your account, in which you can find out the result of passing the game, set your avatar, indicate information about yourself in the tags field so that users can find you by applying a filter.",
      4: "Score - this is the total number of your responses.",
      5: "Fickle - it is the number of changes in your answers as you progress through the game.",
      6: "Unique - the percentage of uniqueness of your result in comparison with the total result of users eliminated relative to the set filter.",
      7: "The game tab, during the passage of which the application determines the percentage of uniqueness of your result (unique indicator) in comparison with other users.",
      8: "Also, the result of the game (and the more you complete it) helps to find users that are closest to your result.",
      9: "Chat tab, where you will see a list of application users sorted by an indicator equal to the percentage of matches of your results, the number of compared pictures and the value of the filter set.",
      10: "In the chat, you can leave your manifest, which will be visible to all users.",
      11: "Manifest of other users you can see in the chat list to the right of the username.",
      12: "By clicking on a user in the list, you can see additional information about him, as well as send him a message.",
      13: "Find people who are really close to you!"
    },
    closestPeople: "Closest people",
    openUserInfo: "Click for open user info",
    otherAvatarDefault: "avatar",
    otherTagsDefault: "tags",
    otherManifestDefault: "manifest",
    otherCloseness: "closeness",
    otherCompared: "compared pictures",
    otherMistruth: "fickle",
    otherChat: "chat with",
    messageFor: "message for",
    otherMessagesRefresh: "Download messages...",
    otherMessageSend: "Send message...",
    otherMessageSendCrash: "Message not sent! Try again.",
    otherMessageDelete: "Delete message...",
    otherMessageDeleteCrash: "Message not deleted! Try again."
  },
  ru: {
    name: "ru",
    loginConnect: "Соединяемся...",
    loginCrash: "Данные не сохранены! Попробуйте еще.",
    loginLabelName: {
      1: "Уникальное имя",
      2: "Хорошее новое имя",
      3: "Это имя занято"
    },
    loginLabelPassword: {
      1: "Пароль",
      2: "Пароль не верен"
    },
    loginButton: "Войти",
    languageSetter: "Задайте язык",
    languageSetterSample: {
      1: "Задать",
      2: "язык"
    },
    languageName: {
      by: "белорусский",
      en: "английский",
      ru: "русский"
    },
    colorSetter: "Задайте цветовую тему",
    colorSetterSample: {
      1: "Задать",
      2: "тему"
    },
    themeName: {
      red: "красную",
      orange: "оранжевую",
      yellow: "желтую",
      green: "зеленую",
      blue: "голубую",
      indigo: "синюю",
      purple: "фиолетовую",
      pink: "розовую",
      gray: "серую",
      teal: "бирюзовую",
      dark: "темную",
      light: "светлую",
      bee: "пчелиную",
      glam: "гламурную",
      fruit: "фруктовую",
      mint: "мятную"
    },
    sendButtonDefault: "Отправить",
    formExplane: "Нажмите, чтобы изменить",
    formTags: "тэги",
    formFilter: "фильтр",
    formManifest: "манифест",
    refreshData: "Загружаем ваши данные...",
    updateData: "Обновляем ваши данные...",
    computingAll: "Вычисляем результаты всех пользователей...",
    computingUnique: "Вычисляем ваш уникальный индекс...",
    refreshOthers: "Загружаем данные других пользователей...",
    refreshClosest: "Загружаем близких людей...",
    gameExplane: `, представьте что вы директор галереи современного искусства.
    Оставьте на стене картины, которые вам нравятся.`,
    leaveTitle: "Оставить картину",
    leave: "Оставить",
    removeTitle: "Следующая картина",
    remove: "Следующая",
    setAvatarTitle: "Нажмите, чтобы установить свой аватар",
    setAvatar: "Аватар",
    deleteAvatarTitle: "Нажмите, чтобы удалить свой аватар",
    deleteAvatar: "X",
    filterStatus: "фильтруем по",
    filterStatusDefault: "всем",
    simpleIndexScore: "счет",
    simpleIndexMistruth: "переменчивый",
    uniqueIndex: "уникальный",
    linkAccount: "К учетной записи пользователя",
    linkGame: "К игре",
    linkChat: "В чат",
    linkQuit: "Выход",
    hello: {
      1: "Привет",
      2: "!"
    },
    helloText: {
      1: "Проходите нашу игру и находите близких вам людей.",
      2: "Мотивация приложения - найти собеседника со схожими взглядами и компанию для общего дела.",
      3: "Вкладка вашего аккаунта, в котором вы можете узнать результат прохождения игры, установить свою аватарку, указать информацию о себе в поле тэгов, чтобы пользователи могли вас найти, применив фильтр.",
      4: "Счет - это общее количество ваших ответов.",
      5: "Переменчивый - это количество изменения ваших ответов при прохождении игры.",
      6: "Уникальный - процент уникальности вашего результата в сравнении с общим результатом пользователей, отсеянных относительно установленного фильтра.",
      7: "Вкладка игры, при прохождении которой приложение определяет процент уникальности вашего результата (показатель - уникальный) по сравнению с остальными пользователями.",
      8: "Также результат игры (и чем больше вы ее пройдете) помогает находить пользователей, что наиболее близки к вашему результату.",
      9: "Вкладка чата, где вы увидете список пользователей приложения, отсортированный по показателю, равному проценту совпадения ваших результатов, количеству сравниваемых картинок и значению установленного фильтра.",
      10: "В чате вы можете оставить свой манифест, что будет виден всем пользователям.",
      11: "Манифест других пользователей вы можете увидеть в списке чата справа от имени пользователя.",
      12: "Нажав на пользователя в списке вы сможете увидеть дополнительную информацию о нем, а также отправить ему сообшение.",
      13: "Найдите действительно близких вам людей!"
    },
    closestPeople: "Близкие люди",
    openUserInfo: "Нажмите чтобы открыть информацию о пользователе",
    otherAvatarDefault: "аватар",
    otherTagsDefault: "тэги",
    otherManifestDefault: "манифест",
    otherCloseness: "близость",
    otherCompared: "сравнили картины",
    otherMistruth: "переменчивый",
    otherChat: "чат с",
    messageFor: "сообщение для",
    otherMessagesRefresh: "Загружаем сообщения...",
    otherMessageSend: "Отправляем сообщение...",
    otherMessageSendCrash: "Сообщение не отправлено! Попробуйте еще.",
    otherMessageDelete: "Удаляем сообщение...",
    otherMessageDeleteCrash: "Сообщение не удалено! Попробуйте еще."
  }
};
