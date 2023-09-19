const prompt = require('prompt-sync')();
	

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
  
