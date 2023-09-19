const prompt = require('prompt-sync')();


let fator1, fator2, result

console.log("\nCalculadora Simples!\n")
console.log("\nDigite o primeiro fator:\n\n")
console.log("Resposta: ")
fator1 = parseFloat(prompt(fator1))
console.clear()
console.log("\nDigite o segundo fator:\n\n")
console.log("Resposta: ")
fator2 = parseFloat(prompt(fator2))
console.clear()

console.log("\nEscolha uma operação:\n")
console.log("1 - ADIÇÃO\t\t 2 - SUBTRAÇÃO\n")
console.log("3 - MULTIPLICAÇÃO\t 4 - DIVISÃO\n\n")
console.log("Resposta: ")
opcao=parseInt(prompt())
console.clear()



if (opcao == 1) {	 
    result= fator1 + fator2
    console.log(`\nO resultado da Adição é: ${result} \n`)
  }

  if (opcao == 2) {  	    
    result = fator1 - fator2
    console.log(`\nO resultado da Subtração é: ${result} \n`)
  }

  if (opcao == 3) { 	
    result = fator1 * fator2
    console.log(`\nO resultado da Multiplicação é: ${result} \n`)
  }

  if (opcao == 4) {   	 
    result = fator1 / fator2
    console.log(`\nO resultado da Divisão é: ${result} \n`)
  }
    


