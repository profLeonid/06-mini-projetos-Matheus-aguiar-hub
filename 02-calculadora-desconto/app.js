'use strict'

function calcularDesconto () {
    const preçoOriginal = document.getElementById('preçoOriginal')
    const descontoPorcentagem = document.getElementById('descontoPorcentagem')
    const resultadoSoma = document.getElementById('resultadoSoma')

    

    let descontoPorc = descontoPorcentagem.value

    let resultadoOri = preçoOriginal.value

    let resultado = (descontoPorc / 100) * resultadoOri

    resultadoSoma.textContent = resultado



    console.log(resultado)
    
}