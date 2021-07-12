  //variables
  var listOut = document.getElementById("arrayOut"),
      listIn = document.getElementById("arrayIn"),
      arregloNum = [],
      input = document.getElementById("numAdd"),
      btnAgregar = document.getElementById("btn-add"),
      btnOrdenar = document.getElementById("order"),
      cls = document.getElementById("clear");

  //función para agregar números y mostrarlos en el textarea
  let agregarNum = function(){

    let num = input.value;
    let numero
    let bandera = false

    if (is_number(num)) {
      numero = parseInt(num)
      if (numero <= 0) {
        alert("Debe ingresar un número positivo")
      } else {
        bandera = true
      }
    } else {
      alert("Debe ingresar un número")
      bandera=false
    }

    if(filtrar(numero) && bandera === true){
      arregloNum.push(numero)
      //console.log(arregloNum)
      
      listIn.value = arregloNum //muestra en el textarea los números ingresados
    } else if(!filtrar(numero) && bandera === true){
      alert("Número repetido, por favor ingresar otro número")
    }

    input.value = "";
    input.focus();
      
    event.preventDefault()

  }

  function is_number(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n);}

  //limpia la casilla del input para agregar más números
  let clear = function(){
    var listIn = document.getElementById("arrayIn");
    var listOut = document.getElementById("arrayOut");

    input.value = "";
    //console.log(listOut);
    listOut.value = ""
    listOut = []
    listIn.value = ""
    listIn = []
    //console.log(listIn);
    arregloNum = []

    input.focus();

    event.preventDefault()
  }

  //función para que no ingrese un número duplicado
  let filtrar = function(numero){
    for (i in arregloNum){
      if(numero===arregloNum[i])
      return false
    }
    return true

    event.preventDefault()
  }

  //función para ordenar los números
  let ordenar = function() {
    let arregloOrdenados = arregloNum
    let aux = 0

    for(var i=0;i<arregloOrdenados.length;i++){
      for(var j=i+1;j<arregloOrdenados.length;j++){
        if (arregloOrdenados[i]>arregloOrdenados[j]) {
          aux = arregloOrdenados[i]
          arregloOrdenados[i] = arregloOrdenados[j]
          arregloOrdenados[j] = aux          
        }
      }
    }

    /* for (let i in arregloOrdenados) {
      for (let j in arregloOrdenados) {
        if (arregloOrdenados[i]<arregloOrdenados[j]) {
          aux = arregloOrdenados[j]
          arregloOrdenados[j] = arregloOrdenados[i]
          arregloOrdenados[i] = aux
        }
      }
    } */

    listOut.value = arregloOrdenados
    //console.log(listOut);

    event.preventDefault()
  }

  //Eventos
  btnAgregar.addEventListener("click", agregarNum);
  btnOrdenar.addEventListener("click", ordenar);
  cls.addEventListener("click", clear);