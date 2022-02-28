let li = document.querySelectorAll('[data-option]');

li.forEach(lista => {
    lista.addEventListener('click', () => {
        const divs = document.querySelectorAll(`[data-div]`);

        divs.forEach(div => { div.classList.add('invisivel')});

        const opcao = lista.dataset.option;
        const div = document.querySelector(`[data-div=${opcao}]`);
        div.classList.remove('invisivel');
    });
});