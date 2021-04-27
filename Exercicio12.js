var convidado = [];

while(true) {
	var entrada = prompt("Digite S para sair ou I para iniciar/continuar");
	if (entrada == 'S') {
		break;
	} else if (entrada == "I") {
		 convidado.push({nome: (prompt("Digite seu nome:")), idade: (prompt("Digite sua idade:")), cpf: (prompt("Digite seu cpf"))});
	}
}

console.log(convidado);