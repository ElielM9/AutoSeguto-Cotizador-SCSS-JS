/* Funciones constructoras */
function Insurance(brand, year, type) {
  this.brand = brand;
  this.year = year;
  this.type = type;
}

function UI() {}

/* Llenar los años */
UI.prototype.fillOptions = () => {
  const selectYear = document.querySelector(`#year`);
  const max = new Date().getFullYear(),
    min = max - 20;

  for (let i = max; i >= min; i--) {
    // Crear un nuevo elemento <option> para cada año
    const optionYear = document.createElement(`option`);
    optionYear.value = i;
    optionYear.textContent = i;

    // Añadir los años al select en el HTML
    selectYear.appendChild(optionYear);
  }
};

// Instanciar el objeto UI
const ui = new UI();

document.addEventListener(`DOMContentLoaded`, () => {
  // Llenar los años en el select
  ui.fillOptions();
});
