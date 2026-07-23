let valorEmprestimo = prompt("Qual o valor do emprestimo: ")
let emprestimo = parseInt(valorEmprestimo)
let valorParcelas = prompt("Em quantas parcelas gostaria: ")
let parcelas = parseInt(valorParcelas)
let valorJuros = prompt("Quantos % de juros seria sobre a parcela: ")
let juros = parseFloat(valorJuros)

let parcelaValor = emprestimo / parcelas;
    alert(`O valor da parcela é de ${parcelaValor}`);
let jurosValor = parcelaValor * (juros / 100);
    alert(`O valor do juros sobre a parcela é ${jurosValor}`);
let parcelaJuros = parcelaValor + jurosValor;
    alert(`O valor da parcela com juros é de ${parcelaJuros}`);
let valorTotal = parcelaJuros * parcelas;
    alert(`O total do emprestimo seria de ${valorTotal}`);

//prompt parcelas
//prompt juros parcela
//10000 / 10 = 1000* juros = 1050
//1050 * 10 = total
// 1050 - parcela






let nomeDigitado = prompt("Digite uma frase:");

let nomeAlternado = "";

for (let i = 0; i < nomeDigitado.length; i++) {

    if (i % 2 == 0) {
        nomeAlternado += nomeDigitado[i].toUpperCase();
    } else {
        nomeAlternado += nomeDigitado[i].toLowerCase();
    }

}

alert(`Nome original: ${nomeDigitado}`);
alert(`Nome alternado: ${nomeAlternado}`);

// const nome = "Arthur Pires"
// const nomeSemEspaço = nome
// console.log(nome.length,'tamanho da palavra')