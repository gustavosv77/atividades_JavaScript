const prompt = require('prompt-sync')();

      
      let numero, sorteio, tentativas = 1, menuOpcao, valorMaximo, chances
      let novoJogo=""

                 
      function menuJogo(){	//função de menu do jogo		

        console.log("Jogo de adivinhação!!!\n\n")
        console.log("Escolha a Dificuldade do jogo:\n\n")
        console.log("1- Nível FÁCIL: 50 números e 10 tentativas\n")
        console.log("2- Nível MÉDIO: 70 números e 7 tentativas  \n")
        console.log("3- Nível DIFÍCIL: 100 números e 5 tentativas \n\n")
        console.log("Resposta:")
        menuOpcao = prompt()
        console.clear()     
      } 	
    
            
      function jogar(){			//função que guarda o número que o usuário digita	
          if(menuOpcao==1){
          console.log("| Tentativa ", tentativas," |\n\n\n\n")
          console.log("Digite um número entre 1 e 50 para tentar adivinhar!\n\n")
          console.log("Resposta:")
          numero = prompt()
          console.clear()
    }
          else if(menuOpcao==2){	
          console.log("| Tentativa ", tentativas," |\n\n\n\n")
          console.log("Digite um número entre 1 e 70 para tentar adivinhar!\n\n")
          console.log("Resposta:")
          numero = prompt()
          console.clear()
          }
          else if(menuOpcao==3){
          console.log("| Tentativa ", tentativas," |\n\n\n\n")
          console.log("Digite um número entre 1 e 100 para tentar adivinhar!\n\n")
          console.log("Resposta:")
          numero = prompt()
          console.clear()
          }
            else{
              inicio()
            }                                 
  }				
    
              
      function reiniciar(){							
          console.log("\nDeseja jogar novamente?\n\n")
          console.log("Digite 'S' para sim ou qualquer tecla para sair:\n\n")        	
          novoJogo= prompt()
          console.clear()
          if(novoJogo =="S" || novoJogo =="s" || novoJogo =="Sim" || novoJogo =="sim"){
          console.clear()   
          tentativas=1   	    	
          sortear()
          jogar()
          regras()        	
          }else{
          }
      } 
    
                    
      function sortear(){ 		//função para sortear aleatoriamente o número a ser adivinhado
        if(menuOpcao==1) sorteio = Math.floor(Math.random() * 50 + 1)
        if(menuOpcao==2) sorteio = Math.floor(Math.random() * 70 + 1)
        if(menuOpcao==3) sorteio = Math.floor(Math.random() * 100 + 1)
   }		
  
          
      function regras(){  	//função que dita as regras do jogo

        if(menuOpcao==1){
          valorMaximo=50
          chances=9}

        if(menuOpcao==2){
          valorMaximo=70
          chances=6
        }	  
        if(menuOpcao==3){
          valorMaximo=100
          chances=4	
        }
                           
                      
       while(numero!=sorteio && tentativas<=chances){ 	//condição usada para dar funcionalidade ao jogo

          if(numero>valorMaximo){
           console.log("O número digitado ultrapassa o limite do jogo\n")
           break
    }
    
          else if(sorteio<numero){    
            console.log("| Tentativa ", tentativas+1," |\n\n\n\n")
            console.log("O número sorteado é MENOR que o digitado; Tente Novamente!\n\n")    
            console.log("Resposta:")
            tentativas++           
            numero = prompt()
            console.clear()
              }
            
          else if(sorteio>numero){
            console.log("| Tentativa ", tentativas+1," |\n\n\n\n")
            console.log("O número sorteado é MAIOR que o digitado; Tente Novamente!\n\n")    
            console.log("Resposta:")
            tentativas++           
            numero = prompt()
            console.clear()
              } 
              
          } 
          
    
          if(numero==sorteio){
             console.clear()
             console.log("Parabéns você acertou em ",tentativas," tentativas!!!\n\n") 
             reiniciar()         	
             }

          
          if(tentativas>chances){
            console.clear()
            console.log("Game Over!! O número sorteado era ",sorteio,"\n\n")				
            reiniciar()   	
           }
          
        } 		
    
      
      function inicio(){
        menuJogo()
        sortear()
        jogar()
        regras()
    }
      inicio() 