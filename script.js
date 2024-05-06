function cambiarColor(elemento) {
 
    const colores = ["green", "blue", "red"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

    elemento.style.color = colorAleatorio; }