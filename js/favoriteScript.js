const listScripts = document.querySelector(".list__special-info-script");
const allScripts = Array.from(listScripts.children);

let favoriteScript = [];
if (localStorage.getItem("favoriteScript") !== null) {
  favoriteScript = JSON.parse(localStorage.getItem("favoriteScript"));
}

allScripts.forEach((element, index) => {
  const star = element.firstElementChild.lastElementChild;
  star.addEventListener("click", function () {
    star.classList.toggle("fas");
    if (star.classList.contains("fas")) {
      listScripts.prepend(element);
      favoriteScript.push(index);
      localStorage.setItem("favoriteScript", JSON.stringify(favoriteScript));
    } else {
      listScripts.append(element);
      if (favoriteScript.indexOf(index) !== -1) {
        favoriteScript.splice(favoriteScript.indexOf(index), 1);
      }
      localStorage.setItem("favoriteScript", JSON.stringify(favoriteScript));
    }
    console.log(favoriteScript);
  });
});

function renderScript() {
  allScripts.forEach((element, index) => {
    favoriteScript.forEach((data) => {
      if (index === data) {
        element.firstElementChild.lastElementChild.classList.add("fas");
        listScripts.prepend(element);
      }
    });
  });
}
renderScript();
