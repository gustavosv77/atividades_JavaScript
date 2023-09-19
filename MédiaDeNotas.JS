const prompt = require('prompt-sync')();


console.log("\nDescubra se foi aprovado inserindo suas notas\n")
    
console.log("\nLembre que as notas vão de 0 a 10 \n")

const nota1 = parseFloat(prompt("Primeira Nota:"))
const nota2 = parseFloat(prompt("Segunda Nota:"))
console.clear()
const nota3 = parseFloat(prompt("Terceira Nota:"))
const nota4 = parseFloat(prompt("Quarta Nota:"))
console.clear()

        

        media = (nota1 + nota2 + nota3 + nota4 ) / 4


        console.log(`\nSua média foi de ${media.toFixed(1)} pontos\n`)

        

            if (media >= 6){
                console.log('\nVocê foi aprovado!')
            }
            else if(media<6){
                console.log('\nVocê foi reprovado!')
            }
            
       
    
