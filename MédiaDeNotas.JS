console.log("Descubra se foi aprovado inserindo suas notas\n")
    
console.log("\nLembre que as notas vão de 0 a 10 \n")

const nota1 = parseFloat(prompt("Primeira Nota"))
const nota2 = parseFloat(prompt("Segunda Nota"))
const nota3 = parseFloat(prompt("Terceira Nota"))
const nota4 = parseFloat(prompt("Quarta Nota"))
const nota5 = parseFloat(prompt("Quinta Nota"))


        media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5


        console.log(`\nA média é ${media.toFixed(1)}\n`)




            if (media >= 6){
                console.log('\nVocê foi aprovado')
            }
            else if(media<6){
                console.log('\nVocê foi reprovado')
            }
