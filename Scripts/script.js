const miBoton = document.getElementById("miBoton");
const miInput = document.getElementById("miInput");
const miLista = document.getElementById("miLista");

// Inicializa el valor del input con lo que haya en localStorage
if (localStorage.getItem("miInputValue")) {
  miInput.value = localStorage.getItem("miInputValue");
}

miBoton.addEventListener("click", function() {
  const nuevoElemento = document.createElement("li");
  nuevoElemento.className = "asideOpciones";
  nuevoElemento.innerHTML = '<a href="">' + miInput.value + '</a>';
  miLista.appendChild(nuevoElemento);

  // Guarda el valor del input en localStorage
  localStorage.setItem("miInputValue", miInput.value);

  // Limpia el input para la próxima entrada
  miInput.value = "";
});