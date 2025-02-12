document.getElementById("aumentar-texto").addEventListener("click", function() {
    const body = document.body;
    let currentFontSize = window.getComputedStyle(body).fontSize;
    currentFontSize = parseFloat(currentFontSize);

    // Aumenta a fonte
    body.style.fontSize = (currentFontSize * 1.2) + "px";
});

document.getElementById("diminuir-texto").addEventListener("click", function() {
    const body = document.body;
    let currentFontSize = window.getComputedStyle(body).fontSize;
    currentFontSize = parseFloat(currentFontSize);

    // Diminui a fonte
    body.style.fontSize = (currentFontSize / 1.2) + "px";
});