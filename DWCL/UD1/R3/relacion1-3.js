function ageCalculator() {
  let currentYear = new Date().getFullYear();
  let birthYear = prompt("Por favor, introduce tu año de nacimiento:");
  
  if (!birthYear || isNaN(birthYear)) {
    alert("Por favor, introduce un año válido.");
    return;
  }

  let age1 = currentYear - birthYear;
  let age2 = age1 - 1;

  alert(`Tienes ${age2} o ${age1} años.`);
}
