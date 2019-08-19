var num = 0;

function add() {
    num++;
    mostrar(num);
}

function sub() {
    num--;
    if(num){
        num<0;
        mostrar(num);
    }else{
        mostrar("0");
    }
}
    


function mostrar(valor) {
    document.getElementById("resultado").innerHTML = valor;
}