function calculadoraDeEdad() {
    let añoActual = new Date().getFullYear();
    let añoNacimiento = prompt("Por favor, introduce tu año de nacimiento:");

    if (!añoNacimiento || isNaN(añoNacimiento)) {
        alert("Por favor, introduce un año válido.");
        return;
    }

    let edad1 = añoActual - añoNacimiento;
    let edad2 = edad1 - 1;

    alert(`Tienes ${edad2} o ${edad1} años.`);
}

