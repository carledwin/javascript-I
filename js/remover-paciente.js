// var pacientes = document.querySelector('.paciente'); //seleciona somente um paciente
var pacientes = document.querySelectorAll('.paciente'); //seleciona todos os pacientes
//console.log(pacientes);

/* aqui funciona somente para o primeiro carregamento dos elementos da pagina
  quando novos elementos são incluidos na pagina a partir do formulario
  os mesmos não são configurados como ouvintes e não escutam o evento de duplo
  click para serem removidos

pacientes.forEach(function(paciente){
  //evento de duplo click
  paciente.addEventListener("dblclick",function(){
    //remove o elemento selecionado
    //paciente.remove();// não funciona

    //
    //deve ser utilizada a palavra reservada this para
    //remover o elemento que sofreu o evento/dono do evento
    //
    this.remove();
    //console.log("Foi clicado com duplo click.");
  });

});
*/

//capturando elemento
/*
  Delegando eventos para o elemento pai com event bubble onde o event ocorrido
  em um elemento filho vai subindo até que o elemento pai escute.
*/

var tabela = document.querySelector('#tabelaPacientes');

//adicionando listener de evento de click/dblclick
/*
  event é o evento / elemento(filho)/ elemento target(elemento alvo) que foi executado - neste caso o dblclick
  o mesmo informa quem disparou este evento
*/
tabela.addEventListener("dblclick", function(event){
  //console.log("A tabela foi clicada");

  //this.remove();// não pode ser utilizado pois irá remover a tabela toda.

  //captura o elemento target do evento - responsável por disparar o evento
  //console.log(event.target);

 //event.target.remove();// não funciona pois irá remover somente o td e não todo o tr

 /*
    para subir para o parent do elemento que disparou o evento utiliza-se
    evet.target.parentNode ou seja, o pai do nó, neste caso o tr.
    devemos neste caso remover o tr inteiro.
  */

  var alvoEvento = event.target;
  var paiDoAlvo = alvoEvento.parentNode;
  /*adiciona uma classe ao elemento
  para esmaecer e remover com um transição de 0.7s.
  */
  paiDoAlvo.classList.add('fadeOut');

  /*
    solicitar ao javascript para segurar/aguardar um determinado periodo
    antes de de executar uma determinada ação,
    setTimeout(function(){}, timemillis); 1000
    */
    setTimeout(function(){
      paiDoAlvo.remove();
    }, 300);

});
