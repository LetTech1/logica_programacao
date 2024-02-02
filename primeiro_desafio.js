alert('Boas vindas ao nosso site!');

let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;

let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

nome = prompt('Digite o nome do usuário');
idade = prompt('Digite a idade do usuário');

if(idade >= 18){
    alert('Pode tirar habilitação!');
}
