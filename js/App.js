// Pego os elementos html por aqui usando formas diferentes apenas para exercitar.
const darkMain = document.querySelector('main');
console.log(darkMain)
const darkH1 = document.querySelector('.tag-h1');
const darkBotao = document.querySelector('.btn');
const darkFooter = document.querySelector('footer')

// /adicionei o evento no botão e chamei as fuções
darkBotao.addEventListener('click', () => {
    trocarMode();
    trocarTexto();
});

//declaração das funções
darkH1.innerText = 'Light Mode On';

const darkClasses = 'ativo'
function trocarMode() {
    darkMain.classList.toggle(darkClasses);
    darkH1.classList.toggle(darkClasses);
    darkBotao.classList.toggle(darkClasses);
    darkFooter.classList.toggle(darkClasses);
}
function trocarTexto() {
    if (darkBotao.classList.contains(darkClasses)) {
        darkH1.innerText = 'Dark Mode On';
        darkBotao.innerText = 'Light Mode'
    } else {
        darkH1.innerText = 'Light Mode On';
        darkBotao.innerText = 'Dark Mode'
    }
}
