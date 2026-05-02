

let nome = prompt("digite seu nome");
let sobrenome = prompt("digite um sobrenome")
let profissao = prompt("digite sua profissao");

nome = nome[0].toUpperCase() + nome.substring(1);
sobrenome = sobrenome[0].toUpperCase() + sobrenome.substring(1);
profissao = profissao[0].toUpperCase() + profissao.substring(1);

export{nome , sobrenome, profissao};