var convidados = [
    {nome: 'Felipe', idade: 29, genero: 'masculino'},
    {nome: 'Allana', idade: 22, genero: 'feminino'},
    {nome: 'Thiago', idade: 33, genero: 'masculino'},
    {nome: 'Carlos', idade: 16, genero: 'masculino'},
    {nome: 'Aline', idade: 15, genero: 'feminino'}
];

var barrados = convidados.filter(function(convidadobarrado){
    return convidadobarrado.idade<18;
});

var naoBarrados = convidados.filter(function(convidadoNaoBarrado){
    return convidadoNaoBarrado.idade>=18;
})

var ordemBarrados = barrados.sort(function (x, y){
    let a = x.nome.toUpperCase(),
        b = y.nome.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
}); // responsável por colocar os nomes barrados em ordem alfabética.

var ordemNaoBarrados = naoBarrados.sort(function (x, y) {
    let a = x.nome.toUpperCase(),
        b = y.nome.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
}); // responsável por colocar os convidados não barrados em ordem alfabética.

console.log(ordem); // apresentará apenas os convidados não barrados em ordem alfabética.