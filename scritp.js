document.addEventListener("DOMContentLoaded", () => {
document.getElementById("menu-icon").addEventListener("click", function () {
    const menu = document.getElementById("menu");


    menu.classList.toggle("hidden");
});

    const form = document.getElementById("calculadora-form");
    if (!form) return;

    form.addEventListener("submit", e => {
        e.preventDefault();
        const n = parseInt(document.getElementById("txt_operador1").value, 10);
        const salida = document.getElementById("lb_resultado");

    // Fibonacci iterativo en una sola función interna
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
    salida.textContent = "Resultado: " + (n < 2 ? n : b);
    });
});