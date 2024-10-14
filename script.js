/*  OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto 
    e mostrar o cartão correspondente ao que foi selecionado na listagem

    PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
    PASSO 2 - Identificar o evento de clique no elemento da listagem
    PASSO 3 - remover a classe aberto só do cartão que tá aberto
    PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual 
    cartão abrir
    PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
    PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem 
*/

// PASSO 1
const pokelista = window.document.querySelectorAll('li');

// PASSO 2
pokelista.forEach(li =>{
    li.addEventListener("click", () => {

        // PASSO 3
        esconderCartaoAtivado();

        // PASSO 4
        const idSelecionado = pegarId(li);

        // PASSO 5
        const cardAtivo = document.querySelector('.aberto');
        cardAtivo.classList.remove("aberto");

        // PASSO 6
        const cardSelecionado = document.getElementById(idSelecionado);
        cardSelecionado.classList.add("aberto");
    })
})

function pegarId(li) {
    const idSelecionado = li.attributes.id.value;
    const idAbrir = "cartao-" + idSelecionado;
    const abrir = document.getElementById(idAbrir);

    abrir.classList.add("ativado");
    
    return idSelecionado;
}

function esconderCartaoAtivado() {
    const ativo = document.querySelector('.ativado');
    ativo.classList.remove("ativado");
}
