var numero = Number(prompt("Digite um número para que seja implementado na função fatorial."));
     
function fatorial(numero){

    if(numero == 0) {
        document.write("O resultado é igual a 1.");

    } else if (numero > 0) {
                
        var fator = (parseInt(numero) * fatorial(numero - 1));

        document.write("O resultado é igual a " + fator + ".");
    }
}

fatorial(numero);