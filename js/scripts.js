var base=200;

function calculo() {
    var cant = parseInt(document.getElementById('cantidad').value);
    var cat = parseFloat(document.getElementById('categoria').value);
    let result = base*cant*cat;
    document.getElementById("total").innerHTML= "Total a pagar: $ "+result;
}

let = document.getElementById(calculo);

