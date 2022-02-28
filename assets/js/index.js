let li = document.querySelectorAll('[data-option]');
let liImgs = document.querySelectorAll('[data-img]');
// função que desmarca a li opção
function desmarcado() {
    li.forEach(itens => {itens.classList.remove('opcao');});
    liImgs.forEach(item => {item.classList.remove('marcada');});
}
// função que marca a li opção
function marcado(opcao) {
    const liOpcao = document.querySelector(`[data-option=${opcao}]`);
    const liImg = document.querySelector(`[data-img=${opcao}]`)
    liOpcao.classList.add('opcao');
    liImg.classList.add('marcada')
}
// função que exibe a div das transações
function exibeDiv() {
    const divs = document.querySelectorAll(`[data-div]`);
    divs.forEach(div => { div.classList.add('invisivel');});
}
// função que oculta a div das transações
function ocultaDiv(opcao) {
    const opcaoDiv = document.querySelector(`[data-div=${opcao}]`);
    opcaoDiv.classList.remove('invisivel');
}
//função que verifica opção li selecionada
li.forEach(lista => { lista.addEventListener('click', () => {
        const opcao = lista.dataset.option;
        desmarcado();
        marcado(opcao);
        exibeDiv();
        ocultaDiv(opcao);
    });
});