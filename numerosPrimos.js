const prompt = require('prompt-sync')();
	
        let novoCalculo=""

        function reiniciar(){							
        console.log("\nDeseja calcular novamente?\n\n")
        console.log("Digite 'S' para sim ou qualquer tecla para sair:\n\n")      
        novoCalculo= (prompt())     
        console.clear()
            if(novoCalculo =="S" || novoCalculo =="s" || novoCalculo =="Sim" || novoCalculo =="sim"){
            console.clear()
                procurar()     	    	      	
                    }else{
                    }
                } 



        function procurar(){
	
		    let x , divisores = 0 , valor = 1

			console.log("Digite um valor maior que 0 para saber se ele é um número primo!\n")
			console.log("Digite o valor:\n")
	        x = parseFloat(prompt(x))
            console.clear()
            if(x<=0){
            console.log("\n\nO valor é negativo ou igual a zero!\n")}		

		    else if(x > 0){
			while(valor <=x){
				if(x % valor == 0){
					divisores++
							}
				valor++
				}
			
			if(divisores == 2){
			console.log("O número ", x , " é primo!\n")
			}
			else{
			console.log("O número ", x , " não é primo!\n")
			}
				}	
                reiniciar()	     
            }
            procurar()