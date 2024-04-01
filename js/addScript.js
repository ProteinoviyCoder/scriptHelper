let dataScript;
if (localStorage.getItem("myScripts") !== null) {
  dataScript = JSON.parse(localStorage.getItem("myScripts"));
} else {
  dataScript = {};
}

function addScript() {
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
  titleHeader.textContent = "Добавить скрипт";

  headerDiv2.append(partClose1, partClose2);
  header.append(headerDiv1, titleHeader, headerDiv2);

  //Делаем тело окна
  const main = document.createElement("div");
  main.classList.add("main__seting-window");

  const divInput = document.createElement("div");
  divInput.classList.add("add-script__div-input");
  const nameInput = document.createElement("div");
  nameInput.classList.add("add-script__name-input");
  nameInput.textContent = "Имя скрипта";
  const input = document.createElement("input");
  input.classList.add("add-script__input");
  input.addEventListener("input", function () {
    input.value = input.value.replace(/[<>]/g, "");
  });

  const divInput2 = document.createElement("div");
  divInput2.classList.add("add-script__div-input");

  const nameInput2 = document.createElement("div");
  nameInput2.classList.add("add-script__name-input");
  nameInput2.textContent = "Скрипт";

  const input2 = document.createElement("input");
  input2.classList.add("add-script__input");

  divInput.append(nameInput, input);
  divInput2.append(nameInput2, input2);

  const hr = document.createElement("hr");

  main.append(divInput, divInput2, hr);

  //делаем футер окна
  const footer = document.createElement("div");
  footer.classList.add("add-script__footer");

  const addBtn = document.createElement("button");
  addBtn.style.backgroundColor = "rgb(73, 168, 73)";
  addBtn.classList.add("btn-getInfo");
  addBtn.textContent = "Добавить скрипт";
  addBtn.addEventListener("click", function () {
    if (input.value.length !== 0 && input2.value.length !== 0) {
      const newScript = {
        name: input.value.replace(/\\/g, "\\").replace(/"/g, '\\"'),
        script: input2.value.replace(/\\/g, "\\").replace(/"/g, '\\"'),
      };

      console.log(input.value);

      for (let i in dataScript) {
        if (dataScript[i].name.toUpperCase() === input.value.toUpperCase()) {
          const wrongText = document.createElement("div");
          wrongText.textContent = "Имя уже занято";
          wrongText.style.color = "red";
          wrongText.style.textAlign = "center";
          main.append(wrongText);

          return;
        }
      }

      dataScript[input.value] = newScript;
      localStorage.setItem("myScripts", JSON.stringify(dataScript));
      renderMyScripts();
      div.remove();
    }
  });

  footer.append(addBtn);

  //Собираем окно
  settingWindow.append(header, main, footer);
  div.append(settingWindow);
  document.body.append(div);
}

function renderMyScripts() {
  if (localStorage.getItem("myScripts") !== null) {
    const myScripts = JSON.parse(localStorage.getItem("myScripts"));
    const placeScripts = document.querySelector(".personal-script");
    placeScripts.innerHTML = "";

    for (let i in myScripts) {
      const htmlScript = `<div class="rule">
      <div>
        <p class="name-personal-scripts">${myScripts[i].name
          .replace(/\\/g, "\\")
          .replace(/`/g, "\\`")
          .replace(/\${/g, "\\${")}</p>
      </div>
      <hr />
      <div>
        <p class="help-buttons-rule"></p>
        <div class="buttons-rule">
        <button onclick="deleteScript(this)" class="btn-event-time">X</button>
          <button onclick="copyText(\`${myScripts[i].script
            .replace(/\\/g, "\\\\")
            .replace(/`/g, "\\`")
            .replace(
              /\${/g,
              "\\${"
            )}\`, this)" class="btn-getInfo">Получить ${myScripts[i].name
        .replace(/\\/g, "\\")
        .replace(/`/g, "\\`")
        .replace(/\${/g, "\\${")}</button>
        </div>
      </div>
    </div>`;
      placeScripts.insertAdjacentHTML("beforeend", htmlScript);
      console.log(
        myScripts[i].script.replace(/\\/g, "\\").replace(/`/g, "\\`")
      );
    }
  }
}
renderMyScripts();

function deleteScript(elem) {
  const script = elem.nextElementSibling.textContent.split(" ");
  script.forEach((element, index) => {
    if (element.includes("Получить")) {
      script.splice(index, 1);
    }
  });

  for (let i in dataScript) {
    if (dataScript[i].name === script.join(" ")) {
      delete dataScript[dataScript[i].name];
    }
    localStorage.setItem("myScripts", JSON.stringify(dataScript));
    renderMyScripts();
  }
  console.log(dataScript);
}
