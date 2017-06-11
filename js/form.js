var botaoAdicionar = document.querySelector('#adicionar-paciente');
console.log(botaoAdicionar);

/*
adiciona um escutador/ouvinte no elemento selecionado a partir de algum evento
algo será feito a partir de uma função
*/

/*titulo.addEventListener("click", mostraMensagem);
//função nomeada
function mostraMensagem(){
  console.log("O título foi clicado");
}*/

//função anonima é mais utilizada em eventos
titulo.addEventListener("click", function(){
  console.log("O título foi clicado.")
});

botaoAdicionar.addEventListener("click", function(event){

  /*solicita ao elemento para não executar seu evento padrão e execute o comportamento padrão
    previne o comportamento padrão
    esta função necessita receber o event do elemento selecionado
  */
  event.preventDefault();

  var form = document.querySelector('#form-adiciona');

  var paciente = obtemPacienteDoFormulario(form);
  //console.log(paciente);
  //var pacienteTr = montaTr(paciente);

 /*
  if(!validaPaciente(paciente)){
    console.log("Paciente inválido.");
    return;
  }else{
  //adicionando o paciente na tabela
  var tabelaPacientes = document.querySelector('#tabela-pacientes');
  tabelaPacientes.appendChild(pacienteTr);

}
*/

  // var erro = validaPaciente(paciente);
  var erros = validaPaciente(paciente);
  if(erros.length > 0){
    //var mensagemErro = document.querySelector('#mensagem-erro');
    //mensagemErro.textContent = erro;
    //console.log(erro);

    exibeMensagensDeErro(erros);
    return;
  }else{
    //var tabelaPacientes = document.querySelector('#tabela-pacientes');
    //tabelaPacientes.appendChild(pacienteTr);

    adicionaPacienteNaTabela(paciente);

    //limpa as informações do form
    form.reset();
    //console.log(pacienteTr);

    limpaMensagensErro();
  }



});

function adicionaPacienteNaTabela(paciente){
  var trPaciente = montaTr(paciente);
  var tabela = document.querySelector('#tabela-pacientes');
  tabela.appendChild(trPaciente);
}

function limpaMensagensErro(){
  var ulMensagensErro = document.querySelector('#mensagens-erro');
  ulMensagensErro.innerHTML = "";
}

function obtemPacienteDoFormulario(form){
  //extraindo informações de paciente do form.

  //var nome = form.nome.value;
  //var peso = form.peso.value;
  //var altura = form.altura.value;
  //var gordura = form.gordura.value;

  //console.log(form);
  //console.log(form.nome);//acessa um elemento filho do elemento a partir do atributo name do elemento filho
  //console.log(form.peso);
  //console.log(form.altura);
  //console.log(form.gordura);
  //console.log(form.nome.value);//acessa o atributo do elelmento filho chamando-o diretamente
  //console.log(form.peso.value);
  //console.log(form.altura.value);
  //console.log(form.gordura.value);
  //console.log("Botão adicionar foi clicado.");
  //console.log(nome);
  //console.log(peso);
  //console.log(altura);
  //console.log(gordura);

  var paciente = {
    nome:form.nome.value,
    peso:form.peso.value,
    altura:form.altura.value,
    gordura:form.gordura.value,
    imc:calculaImc(form.peso.value, form.altura.value)
  };

  return paciente;
}

function montaTr(paciente){
  //cria tr e tds
    var pacienteTr = document.createElement("tr");

    /*
    var pacienteTdNome = document.createElement("td");
    pacienteTdNome.textContent = paciente.nome;
    pacienteTdNome.classList.add('info-nome');
    */

    //var pacienteTdNome = montaTd(paciente.nome, 'info-nome');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    pacienteTr.classList.add('paciente');

    return pacienteTr;
}

function exibeMensagensDeErro(erros){

  limpaMensagensErro();

  var ul = document.querySelector('#mensagens-erro');

  /*
  elemento.innerHTML permite controlar os elementos html dentro do elemento.
  elemento.innerHTML = "" remove todos os elementos do elemento
    */
  ul.innerHTML= "";
  /*
    elemento.forEach(function(item){});
  */
  erros.forEach(function(itemErro){
    var li = document.createElement('li');
    li.textContent = itemErro;

    //adiciona o elemento filho no elemento pai
    ul.appendChild(li);
  });
}

function validaPaciente(paciente){

  // if(validaPeso(paciente.peso)){
  //   return "";
  // }else{
  //   return "Peso inválido.";
  // }
  //
  // if(validaAltura(paciente.altura)){
  //   return "";
  // }else{
  //   return "Altura inválida.";
  // }

  var erros = [];
  if(!validaPeso(paciente.peso)) erros.push("Peso inválido.");
  if(!validaAltura(paciente.altura)) erros.push("Altura inválida.");
  if(!validaNome(paciente.nome)) erros.push("Nome inválido.");
  if(!validaGordura(paciente.gordura)) erros.push("Gordura inválida.");
  return erros;
}

function montaTd(dado, classe){
  var td = document.createElement('td');
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}
