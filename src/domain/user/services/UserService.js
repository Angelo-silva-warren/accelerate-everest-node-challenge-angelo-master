

class UserService {
    
    
    validaEmail(email, email_confirmation){

        let respostaEmail;

    if( email == email_confirmation){
            respostaEmail ="";
        }else{
            respostaEmail = "Email Invalido;"
        }
    
    return(respostaEmail)
    }

    validaCampos(dados){
        
        const dadosValores = Object.values(dados)
        const dadosParametros = Object.keys(dados)
        let i = 0
        let erroCampos = "";
        while(i< dadosValores.length){
          if( dadosValores[i] == "" ){
            erroCampos = "um campo " + dadosParametros[i] +" está vazio;"
              break;
          }  
          i++
        }
            
        return(erroCampos)
    }


    validaNumber(dados){
        let erroNumero = ""; 
        if( isNaN(dados.number)){
        erroNumero = "Numero Invalido: Apenas Numeros;"
        
        }
    return erroNumero
    }

    validaData(dados){
        let erroData;
        if(Date.parse(dados.birhdate)){
            erroData = ""
        }else{
            erroData = "Data invalida;"
        }
        return(erroData)
    }

}


module.exports = new UserService()