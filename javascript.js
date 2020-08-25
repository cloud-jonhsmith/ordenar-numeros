
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
    let num = input.value

    if(!filtrar(num)){
      alert("Número repetido, por favor ingresar otro número")
    } else {
      arregloNum.push(num)
      console.log(arregloNum)
      
      listIn.value = arregloNum //muestra en el textarea los números ingresados
    }
      
      event.preventDefault()

  }

  //limpia la casilla del input para agregar más números
  let clear = function(){
    input.value = ""

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

    for (let i in arregloOrdenados) {
      for (let j in arregloOrdenados) {
        if (arregloOrdenados[i]<arregloOrdenados[j]) {
          aux = arregloOrdenados[j]
          arregloOrdenados[j] = arregloOrdenados[i]
          arregloOrdenados[i] = aux
        }
      }
    }

    listOut.value = arregloOrdenados

    event.preventDefault()
  }

  //Eventos
  btnAgregar.addEventListener("click", agregarNum);
  btnOrdenar.addEventListener("click", ordenar);
  cls.addEventListener("click", clear);
