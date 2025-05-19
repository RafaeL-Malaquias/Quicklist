/*

*/

const form = document.querySelector("#form");
const input = document.querySelector("#input-value");
const ulList = document.querySelector("#ul-list");

// box popup  (caixa de alerta)

const alertBox = document.querySelector("#alert-box");





form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita recarregar a página

  // criar elemento
const li = document.createElement("li");
const chackBox = document.createElement("checkBox");
chackBox.type = "checkbox";
 const itemId = `item-${Date.now()}`;
chackBox.id = itemId;
chackBox.required = true;

const label = document.createElement("label");
label.setAttribute("for", itemId);
label.classList.add("label");
label.textContent =  input.value;

const a = document.createElement("a");
a.href = "#";

const icons = document.createElement("i");
icons.className = "ph ph-trash"



// Adiciona o valor do input ao elemento li
a.appendChild(icons);
  li.append( chackBox, label, a);
  ulList.appendChild(li);

})


// função para remover o elemento li
ulList.addEventListener("click", (event) => {
  if (event.target.tagName === "I") {
    const li = event.target.closest("li");
    li.remove();
  }

});
