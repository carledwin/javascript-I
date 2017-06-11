var botaoBuscarPacientes = document.querySelector("#buscar-pacientes");

botaoBuscarPacientes.addEventListener("click", function(){
    //event.preventDefault();//previne o evento padrão
    //console.log("Buscou os pacientes");

    /*
      api - neste caso é uma interface de programação que disponibiliza
      os dados solicitados para a url:
       https://api-pacientes.herokuapp.com/pacientes
    */

    /*
      objeto javascript responsavel por fazer requisições HTTP
      o mesmo trasporta alguns tipos de dados: XML, JSON...

    */
    var xhr = new XMLHttpRequest();


    /*
      REQUISIÇÃO AJAX ASSINCRONA
      define a requisição e para onde
      abre a conexão
      .open(tipoRequisicao, url);
      .send(); envia a requisição para api
    */
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    /*
      listener para quando os dados estiverem prontos/carregados
      executar uma ação.
      .responseText - contem o texto de resposta

      Somente dará erro de 404 caso ele encontre o endereço da api
      e não encontre o final do endereço ex. pacientes, caso não encontre nem
      o caminho base ex. api-pacientes, dará outro erro e não cairá neste
      fluxo, pois não terá conseguido concluir a conexão.
    */
    xhr.addEventListener("load", function(){
      var erroAjax = document.querySelector("#erro-ajax");
      //sucesso
      if(xhr.status == 200){
        erroAjax.classList.add("invisivel");
        var resposta = xhr.responseText;

        /*
          JavaScript Object Notation
         string = [{},{}]
         typeof object - verifica o tipo do objeto
        */
        //console.log(typeof resposta);
        //console.log(resposta);
        /*
          parceador de objetos json para objeto javascript
          JSON.parse(texto_json); // return obejto javascript
        */
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente){
          adicionaPacienteNaTabela(paciente);
        });

        //console.log(typeof pacientes);
        //console.log(pacientes);
        //console.log(xhr.status);
        //console.log(xhr.responseText);
      }else{
        //console.log(xhr.status);
        //console.log(xhr.responseText);
        erroAjax.classList.remove("invisivel");
      }
    });

      xhr.send();//envia a requisição
    //console.log("Executou a requisição");
});
