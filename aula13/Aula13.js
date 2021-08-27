var nome = "Ingrid";
var sobrenome = "Obana";
var idade = 25;

console.log("Nome: " + nome);
console.log("Sobrenome: " + sobrenome);
console.log("Idade: " + idade);

var nome1 = "Petersen";
var sobrenome1 = "Dias";
var idade1 = 30;


console.log("Nome: " + nome1);
console.log("Sobrenome: " + sobrenome1);
console.log("Idade: " + idade1);

var ingridArray = [25, "Ingrid", "Obana"];

console.log("Nome: " + ingridArray[0]);
console.log("Sobrenome: " + ingridArray[1]);
console.log("Idade: " + ingridArray[2]);

var nome1 = "Petersen";
var sobrenome1 = "Dias";
var idade1 = 29;

console.log("Nome: " + nome1);
console.log("Sobrenome: " + sobrenome1);
console.log("Idade: " + idade1);


var ingridArray = ["Ingrid", "Obana", 25];
var petersenArray = ["Dias", 29, "Petersen"];

console.log("Nome: " + ingridArray[0]);
console.log("Sobrenome: " + ingridArray[1]);
console.log("Idade: " + ingridArray[2]);

console.log("Nome: " + petersenArray[0]);
console.log("Sobrenome: " + petersenArray[1]);
console.log("Idade: " + petersenArray[2]);

var pessoaIngrid = {nome:"Ingrid", sobrenome:"Obana", idade: 25};

var pessoaPetersen = {
  nome:"Petersen", 
  sobrenome:"Dias", 
  idade:29,
  andar:function() {
  alert("Andando");
  },
  nomeCompleto: function(){
     return this.nome + this.sobrenome;
  }
}


console.log("Nome: " + pessoaIngrid.nome);
console.log("Sobrenome: " + pessoaIngrid.sobrenome);
console.log("Idade: " + pessoaIngrid.idade);

console.log("Nome: " + pessoaPetersen.nome);
console.log("Sobrenome: " + pessoaPetersen.sobrenome);
console.log("Idade: " + pessoaPetersen.idade);

pessoaPetersen.andar();
console.log(pessoaPetersen.nomeCompleto());

var pessoas = [pessoaIngrid, pessoaPetersen];

console.log(pessoas[0].nome);

function Pessoa (_nome, _sobrenome, _idade){
   this.nome = _nome;
   this.sobrenome = _sobrenome;
   this.idade = _idade;
}

var pessoaHarry = new Pessoa("Harry", "Potter", 11);
var pessoaRony = new Pessoa("Rony", "Weasley", 11);

console.log("Nome: " + pessoaHarry.nome);
