let numero = 0;
let novoNumero = document.getElementById('idNumero');
let botaoMais = document.getElementsByTagName("input")[1].disabled;

function menos(){
    numero -= 1;
    novoNumero.innerHTML = numero;
    if(numero < 0 ){
        novoNumero.style.color = "red";
    }
}

function mais(){
    numero += 1;
    novoNumero.innerHTML = numero;
    if(numero >= 0){
        novoNumero.style.color = "black";
    }
    if(numero > 10){
        botaoMais.disabled = true;
    }
}