// const produtoDigitado = prompt("Digite o valor do produto")
// const produto = parseInt(produtoDigitado)
// const descontoDigitado = prompt("Digite a porcentagem do desconto")
// const desconto = parseFloat(descontoDigitado)

// const valorFinal = produto - (produto * (desconto / 100))
// alert(`O valor do produto é ${produto} com desconto de ${desconto}% fica ${valorFinal}`)


const pesoDigitado = prompt("Digite o seu peso(Kg):")
const peso = parseFloat(pesoDigitado)
const alturaDigitada = prompt("Digite a sua altura(M):")
const altura = parseFloat(alturaDigitada)
const imcFinal = peso / (altura * altura)

alert(`Seu IMC é de ${imcFinal.toFixed(2)}`)

if(imcFinal < 18.5){
    alert(`Seu imc é ${imcFinal.toFixed(2)}.\nClassificação abaixo do peso`)
}