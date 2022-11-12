let submit = document.querySelector(".submit");
let title = document.getElementById("title");
let desc = document.getElementById("desc");
let notesEl = document.querySelector(".notes");
let notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
  notes.forEach((element) => {
    addNotes(element);
  });
}
submit.addEventListener("click", (e) => {
  e.preventDefault();
  addNotes();
});
function addNotes(obj) {
  let titleVal = title.value;
  let descVal = desc.value;
  if (obj) {
    titleVal = obj.title;
    descVal = obj.desc;
  }
  let card = document.createElement("div");
  if (titleVal) {
    card.classList.add("card");
    card.innerHTML = `<h3>${titleVal}</h3>
 <p>${descVal}</p>
 <button class="del">Delete</button>`;
    notesEl.appendChild(card);
    updateLs();
  }
  let clear = card.querySelector(".del");
  clear.addEventListener("click", () => {
    card.remove();
    updateLs();
  });
}
//we want to add our notes in local storage

function updateLs() {
  let card = document.querySelectorAll(".card"); //selects all the notes created
  let arr = [];
  card.forEach((elememt) => {
    arr.push({
      title: elememt.children[0].innerText,
      desc: elememt.children[1].innerText,
    });
  });
  localStorage.setItem("notes", JSON.stringify(arr));
}
