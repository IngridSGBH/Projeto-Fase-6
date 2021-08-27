var lista = ["uva", "cama", "cadeira"];

function preencherSelect(){
  var x = '';
  var tamanhoLista = lista.length;
  
  for(var i = 0; i < tamanhoLista; i++){
    x += "<option>" + lista[i] + "<option>"
  }
  document.getElementById("a").innerHTML = x;
}


function adicionarItem(){
  var valorInput = document.getElementById("z").value;
  
  lista.push(valorInput);
  preencherSelect();
}


function soma(){
  var num1 = parseFloat(document.getElementById("input1").value);
  var num2 = parseFloat(document.getElementById("input2").value);
  
  document.getElementById("resultado").innerHTML = num1 + num2;
}


function sub(){
   var num1 = parseInt(document.getElementById("input1").value);
  var num2 = parseInt(document.getElementById("input2").value);
  
  document.getElementById("resultado").innerHTML = num1 - num2;
  
}

function mult(){
   var num1 = parseInt(document.getElementById("input1").value);
  var num2 = parseInt(document.getElementById("input2").value);
  
  document.getElementById("resultado").innerHTML = num1 * num2;
  
}

function divisao(){
   var num1 = parseInt(document.getElementById("input1").value);
  var num2 = parseInt(document.getElementById("input2").value);
  
  document.getElementById("resultado").innerHTML = num1 / num2;
  
}