//cadastro
nomes = [];

        function cadastrar() {
            nome = document.getElementById('nome').value;
            nomes.push(nome);
            document.getElementById('nome').value = '';
        }

        function cadastrados() {
            for (let i = 0; i < nomes.length; i++) {
                alert("Foram cadastrados: " + nomes) 
            }
        }
    //planetas

    
       
       function rplanetas(){
        planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];
        busca = document.getElementById('busca').value;
      // pf = planetas.find((planetas) => {
       //  return planetas&&busca === planetas
       // })
      pf = planetas.includes(busca)
        if(pf){
            alert("temos " + busca)
        }
        else{
            alert("não temos")
        }
       }
       //lista fruta
       function bf(){
        frutas = ["laranja", "uva", "manga", "goiaba", "morango"];
          digite = document.getElementById('pesquisa').value;
          if(frutas.includes(digite)){
            r = frutas.indexOf(digite)
                alert(r + " foi removida")
                 frutas.splice(r, 1)
                 alert("Estão disponíveis: " + frutas)
                 digite = prompt("qual")
                 alert("indisponivel")}}