const checkbox = document.querySelector("#checkboxSong");
const songs = document.querySelector("#songs");
let song = songs.options[songs.selectedIndex].textContent;

let timeNotification;
let audioElements = [];

//Проверяем включены ли уведомления. Включаем/выключаем уведомления
let checkboxFlag;
if (localStorage.getItem("checkboxFlag") !== null) {
  checkboxFlag = localStorage.getItem("checkboxFlag");
  if (checkboxFlag === "true") {
    checkbox.checked = true;
    document.querySelector("#songs").parentNode.classList.remove("none");
  } else if (checkboxFlag === "false") {
    checkbox.checked = false;
    document.querySelector("#songs").parentNode.classList.add("none");
  }
} else {
  checkboxFlag = "true";
  checkbox.checked = true;
  document.querySelector("#songs").parentNode.classList.remove("none");
  localStorage.setItem("checkboxFlag", "true");
}

checkbox.addEventListener("change", function () {
  document.querySelector("#songs").parentNode.classList.toggle("none");
  if (checkboxFlag === "true") {
    checkboxFlag = "false";
    checkbox.checked = false;
    localStorage.setItem("checkboxFlag", "false");
    if (localStorage.getItem("song") !== null) {
      songs.selectedIndex = [localStorage.getItem("song")];
      song = songs.options[songs.selectedIndex].textContent;
    }
  } else if (checkboxFlag === "false") {
    checkboxFlag = "true";
    checkbox.checked = true;
    localStorage.setItem("checkboxFlag", "true");
    if (localStorage.getItem("song") !== null) {
      songs.selectedIndex = [localStorage.getItem("song")];
      song = songs.options[songs.selectedIndex].textContent;
    }
  }
});

//--------------------------------------------------------------------

//Проверяем песню, если уведомления включены
if (checkboxFlag === "true") {
  if (localStorage.getItem("song") !== null) {
    songs.selectedIndex = [localStorage.getItem("song")];
  }
  song = songs.options[songs.selectedIndex].textContent;
}
songs.addEventListener("change", function () {
  localStorage.setItem("song", songs.selectedIndex);
  song = songs.options[songs.selectedIndex].textContent;
});

function testSong() {
  audioElements.forEach((audioElements) => {
    audioElements.pause();
  });
  audioElements = [];
  audio = new Audio(`./audio/${song}.mp3`);
  audio.play();
  audioElements.push(audio);

  const div = document.createElement("div");
  div.classList.add("show-img");
  div.addEventListener("click", () => {
    div.remove();
    audioElements.forEach((audioElements) => {
      audioElements.pause();
    });
    audioElements = [];
  });

  const text = document.createElement("p");
  text.textContent = "Время созвона!";
  text.style.padding = "30px";
  text.style.backgroundColor = "rgb(21, 20, 20)";
  text.style.borderRadius = "10px";
  text.style.width = "70%";
  text.style.textAlign = "center";
  text.style.fontSize = "48px";

  div.append(text);
  document.body.append(div);
}

function updateCurrentTime() {
  // Создаем объект Date для текущего времени в Москве
  const moscowTime = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Moscow",
  });

  // Получаем часы, минуты и секунды из времени в Москве
  const hours = new Date(moscowTime).getHours().toString().padStart(2, "0");
  const minutes = new Date(moscowTime).getMinutes().toString().padStart(2, "0");
  const seconds = new Date(moscowTime).getSeconds().toString().padStart(2, "0");

  // Формируем строку времени в формате "чч:мм:сс"
  const timeString = hours + ":" + minutes + ":" + seconds;

  // Создаем объект Date для текущей даты и времени
  const currentDate = new Date();

  // Получаем день недели (от 0 до 6, где 0 - воскресенье, 1 - понедельник, и т.д.)
  const dayOfWeek = currentDate.getDay();

  // Преобразуем номер дня недели в текстовое представление
  const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const currentDayOfWeek = daysOfWeek[dayOfWeek];

  // Выводим время в элемент с id="moscow-time"
  const palacesTime = document.querySelectorAll(".moscow-time");
  for (let i of palacesTime) {
    i.textContent = currentDayOfWeek + " " + timeString;
  }

  if (localStorage.getItem("timeEvents") !== null) {
    timeNotification = JSON.parse(localStorage.getItem("timeEvents"));
    if (
      timeNotification.includes(timeString) === true &&
      checkboxFlag === "true"
    ) {
      testSong();
    } else {
      return;
    }
  } else {
    if (timeString === "12:55:00" && checkboxFlag === "true") {
      testSong();
    } else {
      return;
    }
  }

  if (
    (currentDayOfWeek === "Пятница" &&
      timeString === "16:25:00" &&
      checkboxFlag === "true") ||
    (currentDayOfWeek === "Вторник" &&
      timeString === "16:25:00" &&
      checkboxFlag === "true")
  ) {
    testSong();
  }
}

// Вызываем функцию updateCurrentTime() один раз сразу после загрузки страницы
updateCurrentTime();

// Затем вызываем ее каждую секунду с помощью setInterval()
setInterval(updateCurrentTime, 1000);
