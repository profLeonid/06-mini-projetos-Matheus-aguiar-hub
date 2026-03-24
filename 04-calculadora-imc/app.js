'use strict'

const  calcularIMC = (peso, altura ) =>
    Number(peso) / (Number(altura) * Number(altura))

function tratandoSituacao (imc) {
    if(imc < 18.5){
        return 'Abaixo do peso'
    }else if(imc >= 18.5 && imc < 24.9){
        return 'Peso normal'
    }else if(imc >= 25 && imc < 29.9){
        return 'Sobrepeso'
    }else if(imc >= 30 && imc < 34.9){
        return 'Obesidade grau I'
    }else if(imc >= 35 && imc < 39.9){
        return 'Obesidade grau II'
    }else {
        return 'Obesidade grau III'
    }
}

function tratandoCor (imc) {
  if(imc < 18.5){
        return 'abaixo-peso'
    }else if(imc >= 18.5 && imc < 24.9){
        return 'peso-normal'
    }else if(imc >= 25 && imc < 29.9){
        return 'sobrepeso'
    }else if(imc >= 30 && imc < 34.9){
        return 'obesidade-grau-1'
    }else if(imc >= 35 && imc < 39.9){
        return 'obesidade-grau-2'
    }else {
        return 'obesidade-grau-3'
    }
}

function handleClick (){
    const peso = Number(document.getElementById('peso').value) 
    const altura = Number(document.getElementById('altura').value)

    const cor = tratandoCor(calcularIMC(peso, altura))
    const resultado = document.getElementById('resultado')

    const imc = calcularIMC(peso, altura)
    const resultadoImc = imc.toFixed(0)

    const statusImc = tratandoSituacao(resultadoImc)

    resultado.textContent = `O resultado do IMC é: ${resultadoImc} ${statusImc} `

    resultado.classList.remove('abaixo-peso','peso-normal','sobrepeso','obesidade-grau-1','obesidade-grau-2','obesidade-grau-3')
    resultado.classList.add(cor)
}