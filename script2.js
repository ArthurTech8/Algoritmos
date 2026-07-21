const produtoDigitado = prompt("Digite o valor do produto")
const produto = parseInt(produtoDigitado)
const descontoDigitado = prompt("Digite a porcentagem do desconto")
const desconto = parseFloat(descontoDigitado)

const valorFinal = produto - (produto * (desconto / 100))
alert(`O valor do produto é ${produto} com desconto de ${desconto}% fica ${valorFinal}`)


const pesoDigitado = prompt("Digite o seu peso(Kg):")
const peso = parseFloat(pesoDigitado)
const alturaDigitada = prompt("Digite a sua altura(M):")
const altura = parseFloat(alturaDigitada)
const imcFinal = peso / (altura * altura)

alert(`Seu IMC é de ${imcFinal.toFixed(2)}`)

if(imcFinal >=18.5 && imcFinal <25){
    alert(`Seu imc é ${imcFinal.toFixed(2)}.\nClassificação de Peso: Normal`)
}
else if(imcFinal >=25 && imcFinal <30){
    alert(`Seu imc é ${imcFinal.toFixed(2)}.\nClassificação de Peso: Sobrepeso`)
}
else if(imcFinal >=30 && imcFinal <35){
    alert(`Seu imc é ${imcFinal.toFixed(2)}.\nClassificação de Peso: Obeso classe 1`)
}
else if(imcFinal >=35 && imcFinal <40){
    alert(`Seu imc é ${imcFinal.toFixed(2)}.\nClassificação de Peso: Obeso classe 2`)
}
else{
    alert(`Seu imc é ${imcFinal.toFixed(2)}.\nClassificação de Peso: Obeso classe 3`)
}



const numero3 = prompt("Digite um número");
const numero = parseInt(numero3);

if (numero % 2 == 0 && numero % 3 == 0 && numero % 5 == 0) {
    alert(`O número ${numero} é par e múltiplo de 3 e 5.`);
}
else if (numero % 2 == 0) {
    alert(`O número ${numero} é par.`);
}
else if (numero % 3 == 0 && numero % 5 == 0) {
    alert(`O número ${numero} é múltiplo de 3 e de 5.`);
}
else if (numero % 3 == 0) {
    alert(`O número ${numero} é múltiplo de 3.`);
}
else if (numero % 5 == 0) {
    alert(`O número ${numero} é múltiplo de 5.`);
}
else {
    alert(`O número ${numero} é ímpar e não é múltiplo de 3 nem de 5.`);
}