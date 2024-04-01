const divLogo = document.querySelector(".div-logo__header");
const logo = document.querySelector(".logo__header");
const imgSetting = document.querySelector(".img-setting__header");
let timeEvents = [];
if (localStorage.getItem("timeEvents") === null) {
  timeEvents = ["12:25:00"];
  localStorage.setItem("timeEvents", JSON.stringify(timeEvents));
} else {
  timeEvents = JSON.parse(localStorage.getItem("timeEvents"));
}
const timeNotifications = [
  "06:25:00",
  "06:55:00",
  "07:25:00",
  "07:55:00",
  "08:25:00",
  "08:55:00",
  "09:25:00",
  "09:55:00",
  "10:25:00",
  "10:55:00",
  "11:25:00",
  "11:55:00",
  "12:25:00",
  "12:55:00",
  "13:25:00",
  "13:55:00",
  "14:25:00",
  "14:55:00",
  "15:25:00",
  "15:55:00",
  "16:25:00",
  "16:55:00",
  "17:25:00",
  "17:55:00",
  "18:25:00",
  "18:55:00",
  "19:25:00",
  "19:55:00",
  "20:25:00",
  "20:55:00",
  "21:25:00",
  "21:55:00",
  "22:25:00",
  "22:55:00",
  "23:25:00",
  "23:55:00",
  "00:25:00",
  "00:55:00",
  "01:25:00",
  "01:55:00",
  "02:25:00",
  "02:55:00",
  "03:25:00",
  "03:55:00",
  "04:25:00",
  "04:55:00",
  "05:25:00",
  "05:55:00",
  "14:10:00",
];

function addTimeEvent(elem) {
  const time = elem.parentNode.firstElementChild.value;
  if (timeEvents.includes(time) === true) {
    return;
  } else {
    timeEvents.push(time);
    localStorage.setItem("timeEvents", JSON.stringify(timeEvents));
    document
      .querySelector(".our-time-event")
      .insertAdjacentHTML(
        "beforeend",
        `<span class="notification-time">${time} <button class="btn-event-time" onclick="deleteTimeEvent(this)">X</button></span> `
      );
  }
}

function getTimeEvents() {
  let resultText = `Уведомление на: <br /><br />`;
  for (let element of timeEvents) {
    resultText =
      resultText +
      `<span class="notification-time">${element} <button class="btn-event-time" onclick="deleteTimeEvent(this)">X</button></span> `;
  }
  return resultText;
}

function chooseTime() {
  let resultText;

  timeNotifications.forEach((element, index) => {
    if (resultText === undefined) {
      resultText = `<option value="${element}">${element}</option>`;
    } else {
      resultText =
        resultText + `<option value="${element}">${element}</option>`;
    }
  });
  return resultText;
}

function deleteTimeEvent(elem) {
  let time = elem.parentNode.textContent.split(" ");
  time = time[0];
  timeEvents.forEach((element, index) => {
    if (element === time) {
      timeEvents.splice(index, 1);
      localStorage.setItem("timeEvents", JSON.stringify(timeEvents));
    }
  });
  elem.parentNode.remove();
}

divLogo.addEventListener("mouseover", function () {
  logo.classList.add("move-logo");

  divLogo.addEventListener("mouseleave", function () {
    logo.classList.remove("move-logo");
  });
});

imgSetting.addEventListener("click", function () {
  const div = document.createElement("div");
  div.classList.add("background-setting-window");
  div.addEventListener("click", function (e) {
    if (
      e.target === div ||
      e.target === headerDiv2 ||
      e.target === partClose1 ||
      e.target === partClose2
    ) {
      div.remove();
    } else {
      return;
    }
  });

  const settingWindow = document.createElement("div");
  settingWindow.classList.add("setting-window");

  //Делаем шапку окна
  const header = document.createElement("div");
  header.classList.add("header__seting-window");

  const partArrow1 = document.createElement("p");
  const partArrow2 = document.createElement("p");

  const headerDiv1 = document.createElement("div");
  headerDiv1.classList.add("div-header1__seting-window");
  headerDiv1.addEventListener("mouseover", function () {
    partArrow1.style.borderTop = "3px solid rgb(128, 128, 128)";
    partArrow1.style.borderLeft = "3px solid rgb(128, 128, 128)";
    partArrow1.style.transform = "rotate(-45deg) scale(0.9)";

    partArrow2.style.borderTop = "3px solid rgb(128, 128, 128)";
    partArrow2.style.transform = "translateX(-13.5px) scale(0.9)";

    headerDiv1.addEventListener("mouseleave", function () {
      partArrow1.style.borderTop = "";
      partArrow1.style.borderLeft = "";
      partArrow1.style.transform = "";

      partArrow2.style.transform = "";
      partArrow2.style.borderTop = "";
    });
  });

  headerDiv1.append(partArrow1, partArrow2);

  const partClose1 = document.createElement("p");
  const partClose2 = document.createElement("p");

  const headerDiv2 = document.createElement("div");
  headerDiv2.classList.add("div-header2__seting-window");
  headerDiv2.addEventListener("mouseover", function () {
    partClose1.style.borderLeft = "3px solid rgb(128, 128, 128)";
    partClose1.style.transform = "rotate(40deg) scale(0.9)";

    partClose2.style.borderLeft = "3px solid rgb(128, 128, 128)";
    partClose2.style.transform =
      "rotate(-40deg) translateX(-2px) translateY(-1.8px) scale(0.9)";

    headerDiv2.addEventListener("mouseleave", function () {
      partClose1.style.borderLeft = "";
      partClose1.style.transform = "";

      partClose2.style.borderLeft = "";
      partClose2.style.transform = "";
    });
  });

  const titleHeader = document.createElement("h2");
  titleHeader.classList.add("title-header__seting-window");
  titleHeader.textContent = "Настройки";

  headerDiv2.append(partClose1, partClose2);
  header.append(headerDiv1, titleHeader, headerDiv2);

  //Делаем тело окна
  const main = document.createElement("div");
  main.classList.add("main__seting-window");

  const listMain = document.createElement("ul");
  listMain.classList.add("list-main__seting-window");

  function createItemListMain(data) {
    listMain.insertAdjacentHTML("afterbegin", data);
  }

  createItemListMain(`<li class="item__special-info">
  <h2 class="title__special-info" onclick="showInfo(this)">
    - Мои уведомления <span class="arrow-down"></span>
  </h2>
  <div class="special-info none">
    <div class="rule">
      <div>
        <p class="our-time-event">
          ${getTimeEvents()}
        </p>
      </div>
      <hr />
      <div>
        <p class="help-buttons-rule"></p>
        <div class="buttons-rule">
            <select>
            ${chooseTime()}
            </select>
            <button
                class="btn-getInfo"
                onclick="addTimeEvent(this)"
            >
                Добавить время
            </button>
        </div>
      </div>
    </div>
  </div>
</li>`);

  main.append(listMain);

  //Собираем окно
  settingWindow.append(header, main);
  div.append(settingWindow);
  document.body.append(div);
});
