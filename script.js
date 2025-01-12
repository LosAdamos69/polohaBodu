let bod = document.getElementById("displej");
let tlacitko = document.getElementById("tlacitko");

tlacitko.onclick = function(event) {
    event.preventDefault();

    let x = Number(document.getElementById("x").value);
    let y = Number(document.getElementById("y").value);

    const pole = x <= 25 && x >= -25 && y <= 25 && y >= -25;
    if (pole) {
        bod.innerHTML = "Bod je uvnitř čtverce";
    } else {
        bod.innerHTML = "Bod není uvnitř čtverce";
    }
};
