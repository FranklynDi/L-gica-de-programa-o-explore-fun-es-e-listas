function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    }

    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Esa um número entre 1 e 10');

    function verficarChute() {
        console.log('O botão foi clicado!');
    }