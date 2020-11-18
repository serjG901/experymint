import React, { useContext } from "react";
import AccountIcon from "./AccountIcon.js";
import GameIcon from "./GameIcon.js";
import ChatIcon from "./ChatIcon.js";
import Copyright from "./Copyright.js";
import ThemeColorContext from "./ThemeColorContext.js";
import UserIDContext from "./UserIDContext.js";

export default function Hello() {
  const userID = useContext(UserIDContext);
  const themeColor = useContext(ThemeColorContext);

  const textBlockStyle = `${themeColor.bg200} text-black p-4`;

  return (
    <div className="flex flex-col">
      <div className="break-word font-bold text-2xl">Hello {userID}!</div>
      <div className="text-justify">
        <div className={textBlockStyle}>
          <p>Проходите нашу игру и находите близких Вам людей.</p>
          <p>
            Мотивация приложения - найти собеседника со схожими взглядами и
            компанию для общего дела.
          </p>
        </div>
        <br />

        <div className={textBlockStyle}>
          <div className="flex justify-center">
            <AccountIcon />
          </div>
          <p>
            Вкладка Вашего аккаунта, в котором Вы можете узнать результат
            прохождения игры, установить свою аватарку, указать информацию о
            себе в поле тэгов, чтобы пользователи могли Вас найти, применив
            фильтр.
          </p>
          <p>Score - это общее количество Ваших ответов.</p>{" "}
          <p>
            Mistruth - это количество изменения Ваших ответов при прохождении
            игры.
          </p>
          <p>
            Uniqum - процент уникальности Вашего результата в сравнении с общим
            результатом пользователей, отсеянных относительно установленного
            фильтра.
          </p>{" "}
        </div>
        <br />
        <div className={textBlockStyle}>
          <div className="flex justify-center">
            <GameIcon />
          </div>
          <p>
            Вкладка игры, при прохождении которой приложение определяет процент
            уникальности Вашего результата (показатель Uniqum) по сравнению с
            остальными пользователями.{" "}
          </p>
          <p>
            Также результат игры (и чем больше вы ее пройдете) помогает находить
            пользователей, что наиболее близки к Вашему результату.
          </p>{" "}
        </div>
        <br />
        <div className={textBlockStyle}>
          <div className="flex justify-center">
            <ChatIcon />
          </div>
          <p>
            Вкладка чата, где вы увидете список пользователей приложения,
            отсортированный по показателю IC, равному проценту совпадения ваших
            результатов, и значению установленного фильтра.
          </p>
          <p>
            В чате вы можете оставить свой manifest, что будет виден всем
            пользователям.{" "}
          </p>
          <p>
            Manifest других пользователей Вы можете увидеть в списке чата справа
            от имени пользователя и его статистики (IC, Am, MT).{" "}
          </p>
          <p>IC - процент схожести результата игры. </p>
          <p>Am - количество сравниваемых картинок.</p>
          <p>MT - mistruth пользователя.</p>

          <p>
            Нажав на пользователя в списке Вы сможете увидеть дополнительную
            информацию о нем, а также отправить ему сообшение.
          </p>
        </div>
        <br />
        <div className={textBlockStyle}>
          <p className="text-center">
            Найдите действительно близких Вам людей!
          </p>
        </div>
        <div className="flex justify-center">
          <Copyright>&copy;2020 ExperyMint.</Copyright>
        </div>
      </div>
    </div>
  );
}
