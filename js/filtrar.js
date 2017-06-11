var campoFiltro = document.querySelector('#filtrar-tabela');

//console.log(campoFiltro);

//
campoFiltro.addEventListener('input', function(){
  //console.log(campoFiltro.value); funciona pois campoFiltro é o dono do evento
  //console.log(this.value);

  //captura TRs com a classe .paciente
  var trsPacientes = document.querySelectorAll('.paciente');

  for(var i=0; i < trsPacientes.length; i++){

    if(this.value.length > 0){
      //captura cada tr
      var trPaciente = trsPacientes[i];

      //captura somente a td com classe .info-nome
      var tdNome = trPaciente.querySelector('.info-nome');
      var nome = tdNome.textContent;

      /*
        expressao regular utilizando o objeto new RegExp(textoBusca, formaBusca);
        caseInsensitive = "i" maiusculo e minusculo
        this.value é o valor do campo de pesquisa sendo ouvido
      */
      var expressao = new RegExp(this.value, "i");

      //console.log(nome);

      ///if(nome != this.value){ //compara exatamente os valores

      /*
        utiliza RegExp(); para compara, avaliando se o
        inicio de uma palavra é semelhante ao texto informado
        expresao.test(texto_a_ser_avaliado)
        retorna verdadeiro caso encontre e retorna falso caso não encontre nada
        o parametro nome em .test(nome) se refere ao valor
        selecionado no tr.td.classList('info-nome')
      */
      if(!expressao.test(nome)){
        trPaciente.classList.add("invisivel");
      }else{
        trPaciente.classList.remove("invisivel");
      }

    }else{
      // for(var i =  0; i < trsPacientes.length; i++){
      //   trsPacientes[i].classList.remove("invisivel");
      // }

      trsPacientes.forEach(function(item){
        item.classList.remove("invisivel");
      });
    }

  }
});
