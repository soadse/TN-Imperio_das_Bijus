const {CepBrasil, CorreiosBrasil, RastreioBrasil} = require('correios-brasil')

// Como consultar o CEP
let cep = new CepBrasil('08373200')

cep.consultarCEP().then((response)=>{
    console.log(response)
})

// Como calcular preços e prazos


// Como rastrear uma encomenda