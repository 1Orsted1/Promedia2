window.onload = function () {
  var form1 = document.getElementById("registrarse");
  form1.addEventListener("click", mostrarFormR);
  var form2 = document.getElementById("iniciar");
  form2.addEventListener("click", mostrarFormI);

  function mostrarFormR() {
    document.querySelector(".formulario1").style.display = "block";
    document.querySelector(".botones-centrales").style.display = "none";
  }

   function mostrarFormI() {
    document.querySelector(".formulario2").style.display = "block";
    document.querySelector(".botones-centrales").style.display = "none";
  }

}; 



