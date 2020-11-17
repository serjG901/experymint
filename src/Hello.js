import React, { useContext } from "react";
import TestIcon from "./TestIcon.js";
import ThemeColorContext from "./ThemeColorContext.js";
import UserIDContext from "./UserIDContext.js";

export default function Hello() {
  const userID = useContext(UserIDContext);
  const themeColor = useContext(ThemeColorContext);

  const textBlockStyle = `bg-${themeColor}-200 text-black p-4`;

  return (
    <div>
      <div className="break-word font-bold text-2xl">Hello {userID}!</div>
      <div className="text-justify">
        <div className={textBlockStyle}>
          <p>
            ExperyMint предлагает пользователю проходить игру и, на основе ее
            результата, находит пользователей со схожим результатом.
          </p>
          <p>
            Мотивация приложения - найти собеседника и компанию для общего дела
            или понять, что ты не одинок в своих взглядах и убеждениях.
          </p>
        </div>
        <br />
        <div className={textBlockStyle}>
          <p>
            {userID} - это вкладка Вашего аккаунт, в котором Вы можете узнать
            результат прохождения игры, установить свою аватарку, указать
            информацию о себе в поле тэгов, чтобы пользователи могли Вас найти,
            применив фильтр.
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
          <p>
            <TestIcon isActive={true} /> - это вкладка игры, при прохождении
            которой приложение определяет процент уникальности Вашего результата
            (показатель Uniqum) по сравнению с остальными пользователями.{" "}
          </p>
          <p>
            Также результат игры (и чем больше вы ее пройдете) помогает находить
            пользователей, что наиболее близки к Вашему результату.
          </p>{" "}
        </div>
        <br />
        <div className={textBlockStyle}>
          <p>
            ЧАТ - это вкладка чата, где вы увидете список пользователей
            приложения, отсортированный по показателю IC, равному проценту
            совпадения ваших результатов, и значению установленного фильтра.
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
            информацию о нем.
          </p>
        </div>
      </div>
    </div>
  );
}
