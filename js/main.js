const cod = document.querySelector(".cod-information");
const ss = document.querySelector(".ss-information");
const scripts = document.querySelector(".scripts-information");
const btnGetInfo = document.querySelectorAll(".btn-getInfo");
const controlPanel = document.querySelector(".selector__script-notebook");
const notebook = document.querySelector("#notebook");

const scriptValid =
  "<script>$('.ss').on('input', function(e){this.value = this.value.replace(/[^a-zA-ZáéíñóúüÁÉÍÑÓÚÜ\\s.]/g, '');});$('.pp').on('input', function(e){this.value = '+' + this.value.replace(/[^0-9\\.]/g, '');});</script>";

const timer60min =
  "<script>function createTimer(element) {const startTime = Date.now();const endTime = startTime + 60 * 60 * 1000; function updateTimer() {const remainingTime = endTime - Date.now();const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);const seconds = Math.floor((remainingTime / 1000) % 60);const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;element.textContent = formattedTime;if (remainingTime <= 0) {clearInterval(timerInterval);element.textContent = '00:00';}}const timerInterval = setInterval(updateTimer, 1000);updateTimer();}const timerElements = document.querySelectorAll('.my-timer-now');timerElements.forEach((element) => {createTimer(element);});</script>";

const scriptValid2 =
  "<script>$('.ss').on('input', function (e) {this.value = this.value.replace(/[^a-zA-ZáéíñóúüÁÉÍÑÓÚÜ\\s.]/g, '');});$(function () {$('.pp').one('focus', function () {$(this).val('+90');});});$('.pp').on('input', function (e) {this.value = '+' + this.value.replace(/[^0-9\\.]/g, '');});</script>";

const scriptScroll1 =
  "<script>$('a').on('click', function(e) {e.preventDefault();$('html, body').animate({scrollTop: $('#form-wrap').offset().top}, 'slow');})</script>";

const scriptScroll2 =
  "<script>document.querySelectorAll('a[href^=`#`]').forEach(function(link) {link.addEventListener('click', function(e) {e.preventDefault();var href = this.getAttribute('href');var target = document.querySelector(href);var offsetTop = target.offsetTop;console.log(offsetTop);window.scrollTo({top: offsetTop,behavior: 'smooth'});});});</script>";

const scriptScroll3 =
  "<script>document.addEventListener('DOMContentLoaded', function () {document.querySelectorAll('a').forEach((item) => {const href = item.getAttribute('href');if (href && href.startsWith('#') && !!href.replace('#', '')) {const elementId = href.replace('#', '');item.addEventListener('click', (event) => {event.preventDefault();document.querySelector(`#${elementId}`).scrollIntoView({behavior: 'smooth',});});}});});</script>";

const jQueryCDN =
  "<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js'></script>";

const scriptDate1 =
  "<script> function formatDate(date) { const day = date.getDate().toString().padStart(2, '0'); const month = (date.getMonth() + 1).toString().padStart(2, '0'); const year = date.getFullYear().toString();  return `${day}.${month}.${year}`;}  const currentDate = new Date();  const elements = document.querySelectorAll('.date-now'); elements.forEach((element) => { element.textContent = formatDate(currentDate); }); </script>";

const scriptDate2 =
  "<script> function formatDate(date) { const months = ['January','February','March', 'April','May','June','July','August','September','October','November','December',];const month = months[date.getMonth()];const day = date.getDate();const year = date.getFullYear();return `${month} ${day}, ${year}`;} const currentDate = new Date(); const dateElements = document.querySelectorAll('.date-now');dateElements.forEach(function (element) {element.textContent = formatDate(currentDate);});</script>";

const scriptDate3 =
  "<script> function formatDate(date) { let day = date.getDate(); let month = date.getMonth() + 1; let year = date.getFullYear(); if (day < 10) { day = '0' + day;}if (month < 10) {month = '0' + month;}return day + '.' + month + '.' + year;}let today = new Date();let yesterday = new Date(today);yesterday.setDate(today.getDate() - 1);let dayBeforeYesterday = new Date(today);dayBeforeYesterday.setDate(today.getDate() - 2);let twoDaysBeforeYesterday = new Date(today);twoDaysBeforeYesterday.setDate(today.getDate() - 3);let formattedToday = formatDate(today);let formattedYesterday = formatDate(yesterday);let formattedDayBeforeYesterday = formatDate(dayBeforeYesterday);let formattedTwoDaysBeforeYesterday = formatDate(twoDaysBeforeYesterday);let date0Elements = document.getElementsByClassName('date-0');for (let i = 0; i < date0Elements.length; i++) {date0Elements[i].innerText = formattedToday;}let date1Elements = document.getElementsByClassName('date-1');for (let i = 0; i < date1Elements.length; i++) {date1Elements[i].innerText = formattedYesterday;}let date2Elements = document.getElementsByClassName('date-2');for (let i = 0; i < date2Elements.length; i++) {date2Elements[i].innerText = formattedDayBeforeYesterday;}let date3Elements = document.getElementsByClassName('date-3');for (let i = 0; i < date3Elements.length; i++) {date3Elements[i].innerText = formattedTwoDaysBeforeYesterday;}</script>";

const fontAwesome =
  "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'>";

for (let i of btnGetInfo) {
  i.addEventListener("click", function () {
    i.classList.add("btn-getInfo-click");
    setTimeout(() => {
      i.classList.remove("btn-getInfo-click");
    }, 200);
  });
}

function copyText(text, elem) {
  navigator.clipboard.writeText(text);

  const style = document.createElement("style");
  style.textContent = `.div-copy-text {
    position: fixed;
    top:0;
    bottom: 90px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 2;
    pointer-events: none;
  }
  .text__div-copy-text {
    transition: 0.9s ease;
    background-color: #646363;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    opacity:1;
  }
  .transition-text {
    opacity: 0.2;
    transition: 0.9s ease;
  }
  
  `;

  const div = document.createElement("div");
  div.classList.add("div-copy-text");

  const itog = [];
  elem.textContent.split(/["'\n\s.]/).forEach((element) => {
    if (element === "Получить" || element === "") {
      return;
    } else {
      itog.push(element);
    }
  });

  const message = document.createElement("p");
  message.classList.add("text__div-copy-text");
  message.textContent = itog.join("") + " " + "скопривано";

  div.append(message);
  document.head.append(style);
  document.body.append(div);

  setTimeout(() => {
    message.classList.add("transition-text");
  }, 700);

  setTimeout(() => {
    div.remove(), style.remove();
  }, 1200);
}

function selectSection() {
  const items = document.querySelectorAll(".item__header-list");
  for (let i of items) {
    if (i.textContent === "SCRIPTS") {
      i.classList.add("item__header-list-active");
    }
    i.addEventListener("click", function () {
      for (let t of items) {
        t.classList.remove("item__header-list-active");
      }

      if (i.textContent === "COD") {
        cod.classList.remove("none");
        ss.classList.add("none");
        scripts.classList.add("none");
        i.classList.add("item__header-list-active");
      } else if (i.textContent === "SS") {
        ss.classList.remove("none");
        cod.classList.add("none");
        scripts.classList.add("none");
        i.classList.add("item__header-list-active");
      } else if (i.textContent === "SCRIPTS") {
        ss.classList.add("none");
        cod.classList.add("none");
        scripts.classList.remove("none");
        i.classList.add("item__header-list-active");
      }
    });
  }
}
selectSection();

function showInfo(elem) {
  elem.nextElementSibling.classList.toggle("none");
  elem.parentNode.classList.toggle("item__special-info-active");
  elem.lastElementChild.classList.toggle("arrow-up");
}

function showImg(elem) {
  const div = document.createElement("div");
  div.classList.add("show-img");
  div.addEventListener("click", function () {
    div.remove();
  });

  const img = document.createElement("img");
  let http = elem.src.split("//");
  http = http[0];
  const path = elem.src.split("/");
  path.splice(0, 2);
  const lastPath = path.splice(path.length - 2, 2);
  img.src = http + "//" + path.join("/") + "/" + lastPath.join("/");
  img.style.width = "70%";
  img.style.maxHeight = "70%";
  img.style.cursor = "pointer";

  div.append(img);

  document.body.append(div);
}

function showSalut() {
  const div = document.createElement("div");
  div.classList.add("salut");

  const img1 = document.createElement("img");
  img1.src = "./images/salut.gif";

  div.append(img1);
  document.body.append(div);

  setTimeout(() => {
    const img2 = document.createElement("img");
    img2.src = "./images/salut.gif";
    img2.style.position = "absolute";
    img2.style.bottom = "0px";
    img2.style.left = "0px";
    div.append(img2);
    document.body.append(div);
    img1.remove();
  }, 1500);

  setTimeout(() => {
    const img3 = document.createElement("img");
    img3.src = "./images/salut.gif";
    img3.style.position = "absolute";
    img3.style.top = "0px";
    img3.style.right = "0px";
    div.append(img3);
    document.body.append(div);
    setTimeout(() => {
      const img4 = document.createElement("img");
      img4.src = "./images/salut.gif";
      img4.style.position = "absolute";
      img4.style.top = "0px";
      img4.style.right = "0px";
      img4.style.left = "0px";
      img4.style.margin = "0 auto";
      div.append(img4);
      document.body.append(div);
      img3.remove();
    }, 500);
  }, 2000);

  setTimeout(() => {
    div.remove();
  }, 5000);
}

//функция для переключения версий скриптов во вкладке SCRIPTS
function changeScript() {
  const btnScripts = document.querySelectorAll(".choose-script");
  btnScripts.forEach((btnAll) => {
    const btn = Array.from(btnAll.children);
    btn.forEach((button, indexButton) => {
      button.addEventListener("click", function () {
        //меняем активный класс на кнопке
        if (!button.classList.contains("version-script-active")) {
          Array.from(button.parentElement.children).forEach((knopka) => {
            knopka.classList.remove("version-script-active");
            knopka.classList.add("btn-script__hover-none");
            knopka.disabled = true;
            setTimeout(() => {
              knopka.disabled = false;
              knopka.classList.remove("btn-script__hover-none");
            }, 1150);
            button.classList.add("version-script-active");
          });

          //-----------------------------------------------

          //выводим нужный скрипт в зависимости от кнопки
          const scripts = Array.from(btnAll.nextElementSibling.children);
          scripts.forEach((script, indexScript) => {
            if (indexButton === indexScript) {
              if (script.classList.contains("none")) {
                script.classList.add("add-script");
                setTimeout(() => {
                  script.classList.remove("none");
                  setTimeout(() => {
                    script.classList.remove("add-script");
                  }, 50);
                }, 400);
              } else {
                return;
              }
            } else {
              script.classList.add("remove-script");
              setTimeout(() => {
                script.classList.remove("remove-script");
                script.classList.add("none");
              }, 400);
            }
          });
          //------------------------------
        }
      });
    });
  });
}
changeScript();

function switchSection() {
  console.log(controlPanel);
  const array = Array.from(controlPanel.children);
  array.forEach((elem) => {
    elem.addEventListener("click", function (e) {
      array.forEach((elem2) => {
        elem2.classList.remove("active-btn-selector__script-notebook");
      });
      e.target.classList.add("active-btn-selector__script-notebook");
      console.log(e.target.textContent);
      if (e.target.textContent.trim().toUpperCase() === "SCRIPTS") {
        document.querySelector(".section-notebook").classList.add("none");
        document.querySelector(".section-script").classList.remove("none");
      } else if (e.target.textContent.trim().toUpperCase() === "БЛОКНОТ") {
        document.querySelector(".section-script").classList.add("none");
        document.querySelector(".section-notebook").classList.remove("none");
      }
    });
  });
}
switchSection();

function autoResize(textarea) {
  textarea.style.height = "auto"; // Сбрасываем высоту до автоматической
  textarea.style.height = textarea.scrollHeight + "px"; // Устанавливаем высоту равной высоте контента

  localStorage.setItem("text-notebook", JSON.stringify(textarea.value));
}

// if (localStorage.getItem("text-notebook") !== null) {
notebook.value = JSON.parse(localStorage.getItem("text-notebook"))
  .replace(/\\/g, "\\")
  .replace(/`/g, "\\`")
  .replace(/\${/g, "\\${");
// }
