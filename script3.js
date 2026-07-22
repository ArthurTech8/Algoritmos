let nomeDigitado = prompt("Digite o seu nome")

    alert(`O seu nome tem ${nomeDigitado.length} letras`)

let nomeInvertido = " "

for(let i = i < nomeDigitado.length; i++){
    if(i % 2 == 0){
        nomeDigitado + nomeInvertido[i].toUpperCase();
    }else{
        nomeDigitado + nomeInvertido[i].toLowerCase();
    }    
}
alert(`Nome original: ${nomeDigitado}`);
alert(`Nome alternado: ${nomeAlternado}`);

// const nome = "Arthur Pires"
// const nomeSemEspaço = nome
// console.log(nome.length,'tamanho da palavra')