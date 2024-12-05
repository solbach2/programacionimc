// Capturar los elementos del DOM
const convertButton = document.getElementById("convertButton");
const valueInput = document.getElementById("value");
const conversionType = document.getElementById("conversionType");
const output = document.getElementById("output");

// Función para realizar la conversión
function convertUnits() {
  const value = parseFloat(valueInput.value);
  const type = conversionType.value;

  if (isNaN(value) || value < 0) {
    output.textContent = "Por favor, ingresa un número válido.";
    return;
  }

  let result;

  if (type === "cmToMeters") {
    result = value / 100;
    output.textContent =  ` ${value} cm = ${result.toFixed(2)} metros ` ;
  } else if (type === "kmToMiles") {
    result = value * 0.621371;
    output.textContent =  ` ${value} km = ${result.toFixed(2)} millas ` ;
  }
}

// Asignar el evento al botón
convertButton.addEventListener("click", convertUnits);