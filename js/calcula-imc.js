
//console.log('fui carregado');
var titulo = document.querySelector('.titulo');
//titulo.textContent = "Novo titulo";


//querySelector >> retorna somente um elemento
//querySelectorAll >> retorna todos os elementos que encontrar
var pacientes = document.querySelectorAll('.paciente');
//console.log(pacientes);

/*
for(var i = 0; i<5; i++){
  console.log(i);
}
*/

for(var i = 0; i< pacientes.length; i++){
    var paciente = pacientes[i];
    //var paciente = document.querySelector('#primeiro-paciente');
    var tdPeso = paciente.querySelector('.info-peso');
    var tdAltura = paciente.querySelector('.info-altura');
    var tdImc = paciente.querySelector('.info-imc');
    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido){
      tdPeso.textContent = "Peso inválido!";
      //pesoValido = false;
      ///console.log('Peso inválido');
    }

    if(!alturaValida){
      tdAltura.textContent = "Altura inválida!";
      //alturaValida = false;
      //console.log('Altura inválida');
    }

    if(pesoValido && alturaValida){
      var calc_imc = peso/(altura*altura);// 100/2.0*2.0 = 100/4 >>>>> 25
      tdImc.textContent = calculaImc(peso, altura);
    }else{
      tdImc.textContent = "Não foi possível calcular IMC.";
      //paciente.style.color = "white";
      //paciente.style.background-color = "lightcoral"; // não funciona
      //paciente.style.backgroundColor = "orange";//"lightcoral";

      //adiciona uma classe ao elemento DOM
      paciente.classList.add("paciente-invalido");
    }

    //console.log(paciente);//tr
    //console.log(tdPeso);//tdPeso
    //console.log(peso);//td.textContent
    //console.log(tdAltura);//tdAltura
    //console.log(altura);//td.textContent
    //console.log(tdImc);//tdImc
    //console.log(calc_imc);

}

function validaGordura(gordura){
  if(gordura > 0){
    return true;
  }else{
    return false;
  }
}

function validaNome(nome){
  if(nome.length == 0){
    return false;
  }else{
    return true;
  }
}

function validaPeso(peso){
  if(peso > 0 && peso < 600){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura > 0 && altura < 3.0){
    return true;
  }else{
    return false;
  }
}

function calculaImc(peso, altura){
  var imc = 0
  imc = peso / (altura * altura);
  return imc.toFixed(2);
};
