// 1. Lógica do menu principal

const btnP1 = document.querySelector('#inputP1');
const btnP2 = document.querySelector('#inputP2');
const btnP3 = document.querySelector('#inputP3');

// 2. Mdetódo addEventListener com uma função anonima

btnP1.addEventListener('click', (){
    window.location.href='./pages/projeto01.html'
});

btnP2.addEventListener('click', function(){
    window.location.href='./pages/projeto02.html'
});

btnP3.addEventListener('click', function(){
    window.location.href='./pages/projeto03.html'
});

function cacho(x,y){
    return x + y
};

const banana = cacho

//Arrow Function
const uva = () => 'Sou uma fruta';