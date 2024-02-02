alert('Boas vindas ao Jogo Secreto!');

let numeroMaximo = parseInt(prompt('Digite o limite do seu número secreto'));
let numeroSecreto = parseInt(Math.random() * casaDecimal + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto){

    chute = prompt(`Digite um número de 1 a ${casaDecimal}`);

    if(chute == numeroSecreto){
        break;
    }else{
        if(chute > numeroSecreto){
            alert(`Número Secreto é menor que ${chute}`);
        }else{
            alert(`Número Secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

//Operador Ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, vocês acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

/* if(tentativas > 1){
    alert(`Parabéns, vocês acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else{
    alert(`Parabéns, vocês acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
} */


