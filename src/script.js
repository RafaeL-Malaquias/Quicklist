/*

*/

const form = document.querySelector("#form");
const input = document.querySelector("#input-value");
const ulList = document.querySelector("#ul-list");

// box popup  (caixa de alerta)

const alertspan = document.querySelector(".alert-span");
const alertPopup = document.querySelector(".alert-popup");





form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita recarregar a página

  // criar elemento
const li = document.createElement("li");
const chackBox = document.createElement("input");
chackBox.type = "checkbox";
 const checkBox = `item-${Date.now()}`;
chackBox.id = checkBox;
chackBox.required = true;

const label = document.createElement("label");
label.setAttribute("for", checkBox);
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

  // Limpa o campo de entrada
  input.value = "";

  showAlert("Item adicionado com sucesso", "#4BB543");

})

// função para alert de item adicionado

function alertAdd() {
  alertPopup.hidden = false;

  alertspan.textContent = "O texo foi adicionado com sucesso ";
  alertPopup.style.background = "#4BB543";
  alertPopup.style.color = "#fff";

  setTimeout(() => {
    alertPopup.hidden = true;
  }, 5000);

}




// função para remover o elemento li
ulList.addEventListener("click", (event) => {
  if (event.target.tagName === "I") {
    const li = event.target.closest("li");
    li.remove();


  alertPopup.hidden = false;

  alertspan.textContent = "O texo foi removido com sucesso ";
  alertPopup.style.background = "#C93847";
  alertPopup.style.color = "#fff";


  /* usando metodo de classe, addicionar e remover
  // mostrar alert
  alertPopup.classList.add("show");
  alertPopup.classList.remove("hide");

  */

  setTimeout(() => {
  alertPopup.hidden = true;
  }, 5000);
  }

});

