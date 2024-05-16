function jugar(usuarioChoice) {
            
    // Generar una elección aleatoria para la computadora
    const opciones = ["piedra", "papel", "tijera"];
    const eleccionComputadora = opciones[Math.floor(Math.random()*3)];
    // console.log(eleccionComputadora)

    // Determinar el resultado del juego
    let resultado;
    if (usuarioChoice === eleccionComputadora) {
        resultado = alert("¡Es un empate!");
    } else if (
        (usuarioChoice === "piedra" && eleccionComputadora === "tijera") ||
        (usuarioChoice === "papel" && eleccionComputadora === "piedra") ||
        (usuarioChoice === "tijera" && eleccionComputadora === "papel")
    ) {
        resultado = alert("¡Ganaste!");
    } else {
        resultado = alert("¡Perdiste!");
    }

    // Mostrar resultados
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `Tu elección: ${usuarioChoice}. Elección de la computadora: ${eleccionComputadora}. ${resultado}`;
}

function reiniciar() {
    // Limpiar el resultado
    document.getElementById("resultado").textContent = "";
} 
