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

   const valor = input.value.trim();
   if (!valor) return;

    if (itemJaExiste(valor)) {
    showAlert("Item já existe na lista", "#FFD700", "#000");
    return;
  }

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

  // chamando a funçao alerta
    showAlert("Item adicionado com sucesso", "#4BB543", "#fff");

})

// função  de alerta

function showAlert(message, background = "#4BB543", color = "#fff")  {
  alertspan.textContent = message;
  alertPopup.style.background = background;
  alertPopup.style.color = color;

  alertPopup.classList.add("show");
  alertPopup.classList.remove("hide");
 
  setTimeout(() => {
    alertPopup.classList.remove("show");
    alertPopup.classList.add("hide");
  }, 5000);
  
}



// função para remover o elemento li
ulList.addEventListener("click", (event) => {
  if (event.target.tagName === "I") {
    const li = event.target.closest("li");
    li.remove();


  // função para marcar o item como concluído
    showAlert("O texto foi removido da lista", "#C93847", "#fff");

  }
});


// função para verificar se já existe um item na lista

function itemJaExiste(valor) {
  const items = ulList.querySelectorAll("label");
  return Array.from(items).some(item => item.textContent.trim().toLowerCase() === valor.trim().toLowerCase());
}

