const prompt = require('prompt-sync')();
	
    let novoCalculo=""


        function reiniciar(){							
            console.log("\nDeseja calcular novamente?\n\n")
            console.log("Digite 'S' para sim ou qualquer tecla para sair:\n\n")      
            novoCalculo= (prompt())     
                console.clear()
                if(novoCalculo =="S" || novoCalculo =="s" || novoCalculo =="Sim" || novoCalculo =="sim"){
                console.clear()
                composto()     	    	      	
                }else{
                }
        } 

        function composto(){
            
            let taxa , porcentagem , tempo , montante , capital , juros , base , resultado 

            console.log("\n\nCalculadora de Juros Compostos!\n")
            console.log("\nDigite o valor do Capital:\n")
            capital = parseFloat(prompt(capital))
            console.clear()
            console.log("\nDigite o valor da taxa ao ano em porcentagem:\n")
            porcentagem = parseFloat(prompt(porcentagem))
            console.clear()
            console.log("\nDigite o tempo em anos: ; ex: se for 24 meses informe 2 anos\n")
            tempo = parseFloat(prompt(tempo))
            console.clear()

            taxa = porcentagem / 100

            montante =  capital * (taxa+1) **tempo

            console.log(`\n\nO montante é de: ${montante.toFixed(2)} R$\n`)

            juros= montante - capital

            console.log(`\nO total de juros foi de: ${juros.toFixed(2)} R$`)
        
            reiniciar()
        }
        composto()
        