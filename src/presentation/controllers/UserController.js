
const UserService = require("../../domain/user/services/UserService")
const Mock = require("../../domain/user/mocks/UserMock")

class UserController {
    handle(req, res, next) {
        const dados = req.body
        
        let validaEmail = UserService.validaEmail(dados.email , dados.email_confirmation)
        let validaCampos = UserService.validaCampos(dados)
        let validaNumeros = UserService.validaNumber(dados)
        let validaData = UserService.validaData(dados)
        let resposta = validaCampos + validaEmail  + validaNumeros + validaData

        if(validaCampos == "" && validaEmail == "" && validaNumeros == "" && validaData == ""){
            Mock.User.push(dados)
            console.log("201")
            res.send("")
        }else{
            return res.send(resposta)
        }
        
    }
}   
    
module.exports = new UserController();