document.addEventListener("DOMContentLoaded", function () {
  let addBtn = document.getElementById("btn-add");
  let titleInput = document.getElementById("task-title");
  let descInput = document.getElementById("task-desc");
  let list = document.getElementById("task-list");
  let titleError = document.getElementById("title-error");

  addBtn.addEventListener("click", function () {
    titleError.textContent = "";

    let title = titleInput.value.trim();
    let desc = descInput.value.trim();

    if (title === "") {
      titleError.textContent = "Введите название задачи";
      return;
    }

    let card = document.createElement("div");
    card.className = "card";

    let h3 = document.createElement("h3");
    h3.className = "card-title";
    h3.textContent = title;

    let p = document.createElement("p");
    p.className = "card-desc";
    if (desc !== "") {
      p.textContent = desc;
    } else {
      p.textContent = "Без описания";
    }

    let actions = document.createElement("div");
    actions.className = "card-actions";

    let delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.className = "btn-danger";
    delBtn.textContent = "Удалить";

    delBtn.addEventListener("click", function () {
      list.removeChild(card);
    });

    actions.appendChild(delBtn);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(actions);
    list.appendChild(card);

    titleInput.value = "";
    descInput.value = "";
  });
});
