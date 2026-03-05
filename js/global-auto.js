//  1. logica automatica para o Menu(Index)
// buscamos todos os inputs do tipo botao dentro da classe .project__button-group
const botoesProjeto = document.querySelectorAll('.project__button-group input[type="button"]');
console.log(botoesProjeto);

if (botoesProjeto.length > 0) {
    botoesProjeto.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            //  o index começa em 0, entao somamos 1 para bater com " porojeto 01", "projeto 02"...
            const numeroProjeto = (index + 1).toString().padStart(2, '0');
            alert(numeroProjeto)
            window.location.href = `./pages/projeto${numeroProjeto}.html`;
        });
    });
}

const criarBotaoVoltar = () => {
    const btnVoltar = document.createElement('button');
    btnVoltar.innerText = 'Voltar';

    btnVoltar.className = 'btn-navegacao';

    btnVoltar.addEventListener('click', () =>{
        window.location.href = '../index.html';
    });

    document.body.appendChild(btnVoltar);
}

// Se não houver botões de projeto na pagina, assume-se que é uma página interna
if (botoesProjeto.length === 0){
    // Adicionando um evento de escuta no navegador (objeto window).
    //Após o carregamento da pagina a função será invocada
    window.addEventListener('load', ()  => {
        criarBotaoVoltar();
    })
}