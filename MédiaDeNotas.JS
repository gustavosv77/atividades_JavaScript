let result
    let nota1, nota2, nota3, nota4, nota5
    Boolean reiniciar = true

     while(reiniciar){
        calcularMedia()
        reiniciarMedia()
       
    function reiniciarMedia(){
     respostaReiniciar

    console.log("\n\nPara calcular novamente digite 's' ou 'sim' ou qualquer letra para finalizar\n")
    console.log("Resposta:\t")
    prompt(respostaReiniciar)
    clear()

    if (respostaReiniciar == "s" || respostaReiniciar == "S" || respostaReiniciar == "sim" || respostaReiniciar == "Sim" || respostaReiniciar == "SIM"){
      reiniciar = 
    
    else{
      reiniciar = false
    }
  }

    function calcularMedia(){
    console.log("Descubra se foi aprovado inserindo suas notas\n")
    
    console.log("\nLembre que as notas vão de 0 a 10 \n")

    

        console.log ("\nDigite a primeira nota:")
        prompt(nota1)
        clear()
                
           
        console.log ("Digite a segunda nota:")
        prompt(nota2)
        clear() 
            
     
        console.log ("Digite a terceira nota:")
        prompt(nota3)
        clear()
            

        console.log ("Digite a quarta nota:")
        prompt(nota4)
        clear()

      
        console.log ("Digite a quinta nota:")
        prompt(nota5)
        clear()


        result= (nota1 + nota2 + nota3 + nota4 + nota5) / 5


        console.log("Sua média foi de:" , result, "\tpontos\n")


            if (result >= 6) {
                console.log("\nVocê foi aprovado")}
            
            else if(result<6){
                console.log("\nVocê foi reprovado")
}
    }
     
     
     
    }
     
  
