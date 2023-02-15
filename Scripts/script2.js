const miBoton = document.getElementById("miBoton2");
const miInput = document.getElementById("miInput2");
const miLista = document.getElementById("miLista2");

miBoton.addEventListener("click", function() {
  const nuevoElemento = document.createElement("li");
  nuevoElemento.className = "asideOpciones";
  nuevoElemento.innerHTML = '<a href="">' + miInput.value + '</a>';
  miLista.appendChild(nuevoElemento);
});