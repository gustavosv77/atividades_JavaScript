const prompt = require('prompt-sync')();
	
    let novoCalculo=""

    function reiniciar(){							
    console.log("\nDeseja calcular novamente?\n\n")
    console.log("Digite 'S' para sim ou qualquer tecla para sair:\n\n")      
        novoCalculo= (prompt())     
        console.clear()
            if(novoCalculo =="S" || novoCalculo =="s" || novoCalculo =="Sim" || novoCalculo =="sim"){
            console.clear()
            converter()     	    	      	
            }else{
            }
        } 


    function converter(){

    let opcao , Celsius , Fahrenheit , result 
   
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
    reiniciar()
}
    converter()

    