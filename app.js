function sortear() {
  let quantidade = document.getElementById('quantidade').value; // recuperei o valor do imput quantidade
  let de = document.getElementById('de').value; // recuperei o valor no input de
  let ate = document.getElementById('ate').value; // recuperei o valor do input ate.

  
  let sorteados = [];
  let numero;


//OBS: Nesse laço de repetiçao eu tive que criar uma variavel 'Numero' para receber os valores aleatorios que serao gerados dentro do laço enquanto o i for menor que a quantidade que a pessoa colocou.
  for (let i = 0; i < quantidade; i++){
    numero = gerarNumeroAleatorio(de, ate); // Aqui estou guardando os numeros gerados dentro da variavel numero.
    sorteados.push(numero); // aqui estou pegando nosso array e usando o push para adicionar no nosso array todos os numeros que foram salvos na variavel numero.
  }

  alert (sorteados);
}

function gerarNumeroAleatorio(min, max){ // Cria uma função onde posso receber 2 parâmetros, min (minimo) max (maximo)
  min = Math.ceil(min);  // Arredonda o valor minimo para cima
  max = Math.floor(max); // Arredonda o valor maximo para baixo
  return Math.floor(Math.random() * (max - min + 1)) + min; // return : retorno o resultado / Math.floor() arrendondo para baixo / Math.random() gero um numero (0-1) 0 inclusivo e 1 exclusivo

}