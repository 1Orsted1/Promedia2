window.onload = function () {
  var agregar = document.getElementById("agregarAlumno");
  agregar.addEventListener("click", revisarDatos);

  var calcularPromedio = document.getElementById("calcularPromedio");
  calcularPromedio.addEventListener("click", calcular);


};

function agregarDato(valor, result) {
  var lista = document.querySelector("#lista");
  var campo = document.createElement("tr");
  var tdValor = document.createElement("td");
  tdValor.setAttribute("class", "es");
  var tdResult = document.createElement("td");
  tdResult.setAttribute("class", "rs");

  tdValor.append(valor);
  tdResult.append(result);
  campo.append(tdValor);
  campo.append(tdResult);
  lista.appendChild(campo);
}

let revisarDatos = () => {
  var valor = document.getElementById("materia").value;
  var result = parseInt(document.getElementById("calificacion").value);
  var ac = document.querySelector(".red2");
  var am = document.querySelector(".red1");



  if (valor.trim() == null || valor.trim() == "" ) {
    am.style.display = "block";
    if (result == null || result < 50 || isNaN(result) || result > 100) {
      ac.style.display = "block";
    } else {
      ac.style.display = "none";
    }
    return false;
  }

  am.style.display = "none";


  if (result == null || result < 50 || isNaN(result) || result > 100) {
    ac.style.display = "block";

    if (valor.trim() == null || valor.trim() == "") {
      am.style.display = "block";
    } else {
      am.style.display = "none";
    }
    return false;
  }

  ac.style.display = "none";

  agregarDato(valor, result);
};

function calcular() {
  var todosLosth = document.getElementsByTagName("td");
  var sumador = 0;
  console.log(todosLosth);
  for (var z in todosLosth) {
    console.log(parseInt(todosLosth[z].textContent));
    if (parseInt(todosLosth[z].textContent)) {
      sumador = sumador + parseInt(todosLosth[z].textContent);
    }
  }
  var dividir = todosLosth.length / 2;
  var resultado = sumador / dividir;
  alert("El promedio es: " + resultado);
}
