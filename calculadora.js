const prompt = require("prompt-sync")()

let fator1, fator2, result

console.log("Calculadora Simples!\n")
console.log("\nDigite o primeiro fator:\n\n")
console.log("Resposta: ")
prompt(fator1)
console.log("\nDigite o segundo fator:\n\n")
console.log("Resposta: ")
prompt(fator2)

console.log("\nEscolha uma operação:\n")
console.log("1 - ADIÇÃO\t\t 2 - SUBTRAÇÃO\n")
console.log("3 - MULTIPLICAÇÃO\t 4 - DIVISÃO\n\n")
console.log("Resposta: ")
opcao=parseFloat(prompt())



if (opcao == 1) {	 
    result=parseFloat(fator1() + fator2())
    console.log(result)
  }

  if (opcao == 2) {  	    
    result = fator1 - fator2
    console.log("\nO resultado da Subtração é: ", result, "\n")
  }

  if (opcao == 3) { 	
    result = fator1 * fator2
    console.log("\nO resultado da Multiplicação é: \n")
  }

  if (opcao == 4) {   	 
    result = fator1 / fator2
    console.log("\nO resultado da Divisão é: ", result, "\n")
  }
    


