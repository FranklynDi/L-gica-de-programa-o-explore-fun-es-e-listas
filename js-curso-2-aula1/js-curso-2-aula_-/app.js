//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo Do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um Número entre 1 e 10';
//function verificarChute() {
  //  console.log('O botão foi clicado')
//}
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    }

    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha a um número entre 1 e 10');

    function verficarChute() {
        let chute = document.querySelector('input').value;
        console.log(chute == numeroSecreto);
    }
    function gerarNumeroAleatorio() {
       return parseInt(Math.random() * 10 + 1);
    }