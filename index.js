var num = 0;

function add() {
    if(num<0){
        num=0
        mostrar(num);
    }else{
        num++;
        mostrar(num);
}
}

function sub() {
    num--;
    if(num<0){
        mostrar(0);
    }else{
        mostrar(num);
    }
}

function mostrar(valor) {
    document.getElementById("resultado").innerHTML = valor;
}