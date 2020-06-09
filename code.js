function plus(){
var a, b, res;
    a = document.getElementById('n1').value;
    a = parseInt(a);

    b = document.getElementById('n2').value;
    a = parseInt(b);
    res = a+b;
    document.getElementById(out).innerHTML = res;
}

function minus(){
var a, b, res;
    a = document.getElementById('n1').value;
    a = parseInt(a);

    b = document.getElementById('n2').value;
    a = parseInt(b);
    res = a-b;
    document.getElementById(out).innerHTML = res;
}
