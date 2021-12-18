
let h1 = document.getElementsByTagName("h1")[0];
let p1 = document.getElementsByTagName("p")[0];
let input = document.getElementById("h1")
let input2 = document.getElementById("paragrafo");



function titulo(){
    h1.innerHTML = input.value;
}
function paragrafo(){
    p1.innerHTML = input2.value;
}

function muda_cor(botao){
    h1.style.color = botao.innerHTML;
    p1.style.color = botao.innerHTML;
}

function texto(botao){
    h1.style.textAlign = botao.innerHTML;
    p1.style.textAlign = botao.innerHTML;
}
