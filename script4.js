const numerointeiro = [1,2,3,4,5,6]
console.log(numerointeiro,"listacompleta")
console.log(numerointeiro[0],"lista na posição 0")
console.log(numerointeiro,"lista completa",numerointeiro[2],"lista na 3º posição")
const nomes = ["Arthur","Pedro","Andre","Augusto"]
console.log(nomes,"lista nomes")
nomes.push(9)
nomes.push("Maiara")

const palavradigitada = prompt("Digite uma palavra: ")
const palavra = (palavradigitada)
nomes.push(palavra)

for(let i = 0; i< nomes.length; i++){
    console.log(nomes[i])
}