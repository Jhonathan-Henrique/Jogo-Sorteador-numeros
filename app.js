function sortear() {
  let quantidade = document.getElementById('quantidade').value; // recuperei o valor do imput quantidade
  let de = document.getElementById('de').value; // recuperei o valor no input de
  let ate = document.getElementById('ate').value; // recuperei o valor do input ate.

  
  let sorteados = [];
  let numero;


 //OBS: Nesse laço de repetiçao eu tive que criar uma variavel 'Numero' para receber os valores aleatorios que serao gerados dentro do laço enquanto o i for menor que a quantidade que a pessoa colocou.
  for (let i = 0; i < quantidade; i++){
    numero = gerarNumeroAleatorio(de, ate); // Aqui estou guardando os numeros gerados dentro da variavel numero.
    
    while (sorteados.includes(numero)){
      numero = gerarNumeroAleatorio(de, ate);
    }
    
    sorteados.push(numero); // aqui estou pegando nosso array e usando o push para adicionar no nosso array todos os numeros que foram salvos na variavel numero.
  }

  let mensagemSorteados = document.getElementById('resultado');
  mensagemSorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`

  botaoResetar();
}

function gerarNumeroAleatorio(min, max){ // Cria uma função onde posso receber 2 parâmetros, min (minimo) max (maximo)
  min = Math.ceil(min);  // Arredonda o valor minimo para cima
  max = Math.floor(max); // Arredonda o valor maximo para baixo
  return Math.floor(Math.random() * (max - min + 1)) + min; // return : retorno o resultado / Math.floor() arrendondo para baixo / Math.random() gero um numero (0-1) 0 inclusivo e 1 exclusivo

}

function botaoResetar(){
  let btnResete = document.getElementById('btn-reiniciar');
  if (btnResete.classList.contains('container__botao-desabilitado')) {
    btnResete.classList.remove('container__botao-desabilitado');
    btnResete.classList.add('container__botao');
  } else {
    btnResete.classList.remove('container__botao');
    btnResete.classList.add('container__botao-desabilitado');
  }
}

function reiniciar(){
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'

  botaoResetar();
}