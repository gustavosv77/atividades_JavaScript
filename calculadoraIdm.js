const prompt = require('prompt-sync')();
	
			let peso
			let altura, result, arredonda		 
      
     
			console.log("Informe o seu peso e altura para calcular o IDM!\n")
			console.log("Digite o seu peso em Kg:\n")
			console.log("\nResposta:")
			peso = parseFloat(prompt(peso))
			console.clear()
			console.log("Digite a sua altura em Metros ; ex: 1.80 se você tiver 1 metro e 80 cm:\n")
			console.log("\nResposta:")
			altura = parseFloat(prompt(altura))
			console.clear()

			result= peso / (altura*altura)
			
		
			console.log(`\nSeu indice de Massa Corporal é de: ${result.toFixed(1)} \n`)

		
				if(result < 18.50){
					console.log("\nVocê está abaixo do peso ideal!\n")
		}
				else if(result < 25){
					console.log("\nVocê está no peso ideal!\n")
		}
				else if(result < 30){
					console.log("\nVocê está no quadro de sobrepeso!\n")
		}
				else if(result >=30 ){
					console.log("\nVocê está no quadro de obesidade!\n")
		}
      
		
     
       
        
    
		
		
		
	
