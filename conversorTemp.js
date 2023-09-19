const prompt = require('prompt-sync')();
	


   let opcao
   let Celsius
   let Fahrenheit
   let result 
    
   
      console.log("Convertor de Temperatura\n")
      console.log("\nEscolha a Conversão:\n")
      console.log("1 - Celsius para Fahrenheit \n")
      console.log("2 - Fahrenheit para Celsius\n")
      opcao = parseFloat(prompt(opcao))
      console.clear()

    if (opcao == 1) {
        console.log("\nConvertor de Celsius para Fahrenheit\n")
        console.log("\nDigite a temperatura em Celsius:\t\n")   
        Celsius = parseFloat(prompt(Celsius))
        result = Celsius * 1.8 + 32
        console.clear()
        console.log(`\nO resultado é:\t ${result} °F\n`)
    }
    
    if (opcao == 2) {
        console.log("\nConvertor de Fahrenheit para Celsius\n")
        console.log("\nDigite a temperatura em Fahrenheit:\t\n")   
        Fahrenheit = parseFloat(prompt(Fahrenheit))
        result = (Fahrenheit - 32) / 1.8
        console.clear()
        console.log(`\nO resultado é:\t ${result} °C\n`)
    }
    
    

    
