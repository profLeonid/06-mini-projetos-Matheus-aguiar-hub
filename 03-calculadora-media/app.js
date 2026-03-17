'use strict'

const calcularMedia = (nota1, nota2, nota3) => 
    Number(nota1) + Number(nota2) + Number(nota3) / 3


function tratandoSituacao (calcularMedia) {

    if(calcularMedia >= 7){
        return 'o aluno foi aprovado'
    }else if(calcularMedia >= 5 && calcularMedia <= 6.9){
        return 'o aluno foi recuperação'
    }else if (calcularMedia < 5) {
        return 'o aluno foi reprovado'
    }

}

function handleClick (){
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)

    const resultado = document.getElementById('resultado')

    const calculandoMedia = calcularMedia(nota1, nota2, nota3).toFixed(0)

    const statusAluno = tratandoSituacao (calculandoMedia)

    resultado.textContent = `O resultado é: ${calculandoMedia} ${statusAluno} `
    resultado.classList.remove('aprovado1','aprovado2','aprovado3')
    resultado.classList.add(cor)
}

console.log(calcularMedia(1,5,5))
console.log(tratandoSituacao(1,5,5))