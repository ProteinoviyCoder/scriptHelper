const cod = document.querySelector(".cod-information");
const ss = document.querySelector(".ss-information");
const scripts = document.querySelector(".scripts-information");
const btnGetInfo = document.querySelectorAll(".btn-getInfo");

const scriptValid =
  "<script>$('.ss').on('input', function(e){this.value = this.value.replace(/[^a-zA-ZáéíñóúüÁÉÍÑÓÚÜ\\s.]/g, '');});$('.pp').on('input', function(e){this.value = '+' + this.value.replace(/[^0-9\\.]/g, '');});</script>";

const scriptScroll1 =
  "<script>$('a').on('click', function(e) {e.preventDefault();$('html, body').animate({scrollTop: $('#form-wrap').offset().top}, 'slow');})</script>";

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
}

function selectSection() {
  const items = document.querySelectorAll(".item__header-list");
  for (let i of items) {
    if (i.textContent === "COD") {
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
  console.log(elem.lastElementChild);
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
