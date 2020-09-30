window.onload = function () {
//Agregan los eventos al los componentes de la vista.
  viewDidLoad();
//revisa si existen las banderas y si no las crea.
  setearBanderas();
//valida las entradas de los input.
  validacion();
//rellena los campos de la tabla.  
  rellenarTabla();
};


function validacion() {
  if (localStorage.getItem("calificacionIncorrecta") == "true") {
    document.querySelector(".red2").style.display = "block";
  }

  if (localStorage.getItem("nombreIncorrecto") == "true") {
    document.querySelector(".red1").style.display = "block";
  }
}


function agregarDato(valor, result) {
  var condicion1 = localStorage.getItem("calificacionIncorrecta");
  var condicion2 = localStorage.getItem("nombreIncorrecto");
  if (condicion1 == "false" && condicion2 == "false") {
    localStorage.setItem(valor, result);
  }
}


const revisarDatos = () => {
  var valor = document.getElementById("materia").value;
  var result = parseInt(document.getElementById("calificacion").value);
  //var ac = document.querySelector(".red2");
  //var am = document.querySelector(".red1");

  if (valor.trim() == null || valor.trim() == "") {
    localStorage.setItem("nombreIncorrecto", true);
    if (result == null || result < 50 || isNaN(result) || result > 100) {
      localStorage.setItem("calificacionIncorrecta", true);
    } else {
      localStorage.setItem("calificacionIncorrecta", false);
    }
    return false;
  }

  localStorage.setItem("nombreIncorrecto", false);

  if (result == null || result < 50 || isNaN(result) || result > 100) {
    localStorage.setItem("calificacionIncorrecta", true);
    if (valor.trim() == null || valor.trim() == "") {
      localStorage.setItem("nombreIncorrecto", true);
    } else {
      localStorage.setItem("nombreIncorrecto", false);
    }
    return false;
  }

  localStorage.setItem("calificacionIncorrecta", false);

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


function rellenarTabla(){
  var lista = document.querySelector("#lista");
  var contador = 0;
  for (var key in localStorage) {
    if (
      typeof localStorage.getItem(key) == "string" &&
      localStorage.key(contador) != "calificacionIncorrecta" &&
      localStorage.key(contador) != "nombreIncorrecto"
    ) {
      var campo = document.createElement("tr");
      var tdValor = document.createElement("td");
      tdValor.setAttribute("class", "es");
      var tdResult = document.createElement("td");
      tdResult.setAttribute("class", "rs");

      tdValor.append(localStorage.key(contador));
      tdResult.append(localStorage.getItem(key));
      campo.append(tdValor);
      campo.append(tdResult);
      lista.appendChild(campo);
    }
    contador++;
  }
}

function setearBanderas(){

  if (
    !localStorage.getItem("nombreIncorrecto") ||
    !localStorage.getItem("calificacionIncorrecta")
  ) {
    localStorage.setItem("nombreIncorrecto", false);
    localStorage.setItem("calificacionIncorrecta", false);
  }

}
function viewDidLoad(){
  var agregar = document.getElementById("agregarAlumno");
  agregar.addEventListener("click", revisarDatos);

  var calcularPromedio = document.getElementById("calcularPromedio");
  calcularPromedio.addEventListener("click", calcular);

  var eliminarAlumno = document.querySelector("#eliminarAlumno");
  eliminarAlumno.addEventListener("click", () => {
    localStorage.removeItem(document.querySelector("#materia").value);
  });

}
