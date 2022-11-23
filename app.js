var nbr1 = document.getElementById("nbr1");
var nbr2 = document.getElementById("nbr2");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  if (nbr1.value == "" || nbr2.value == "") {
    document.getElementById("erreur").innerHTML = "Entrer des valeurs";
  } else {
    x = nbr1.value;
    y = nbr2.value;
    x = parseFloat(x);
    y = parseFloat(y);
    plus = x + y;
    mod = x % y;
    mult = x * y;
    div = x / y;
    document.getElementById("erreur").innerHTML = "";
    document.getElementById("plus").innerHTML = "La somme est : " + plus;
    document.getElementById("mod").innerHTML = "Le modulo est :  " + mod;
    document.getElementById("mult").innerHTML =
      "La multiplication est : " + mult;
    document.getElementById("divise").innerHTML = "La division est : " + div;
  }
});
