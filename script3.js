let nomeDigitado = prompt("Digite o seu nome")

    alert(`O seu nome tem ${nomeDigitado.length} letras`)

let nomeInvertido = " "

for(let i = nomeDigitado.length - 1; i >= 0; i--){
    nomeInvertido += nomeDigitado[i]
}

alert(`O nome ${nomeDigitado}, invertido fica${nomeInvertido}`)

// const nome = "Arthur Pires"
// const nomeSemEspaço = nome
// console.log(nome.length,'tamanho da palavra')