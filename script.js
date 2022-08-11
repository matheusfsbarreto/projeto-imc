function start() {
    var botaoCalcular = document.querySelector('#button-calculate')
    botaoCalcular.addEventListener('click', clickbotao)
}

function calcularIMC (peso, altura) {
    return peso / (altura * altura)
}

function clickbotao () {
    var inputPeso = document.querySelector('#input-weight')
    var inputAltura = document.querySelector('#input-height')
    var imcResult = document.querySelector('#resultado')
    var faixa = document.querySelector('#faixa')

    var weight = Number(inputPeso.value)
    var height = Number(inputAltura.value)

    var imc = calcularIMC (weight,height)
    var formattedIMC = imc.toFixed(3)
    
    var faixa = ""
        if (imc < 16) {
            faixa = "Inválido."
        } else if (imc > 16 && imc < 16.9) {
            faixa = "Muito abaixo do peso."
        } else if (imc > 16.9 && imc < 18.4) {
            faixa = "Abaixo do peso."
        } else if (imc > 18.4 && imc < 24.9) {
            faixa = "Peso normal."
        } else if (imc > 24.9 && imc < 29.9) {
            faixa = "Acima do peso."
        } else if (imc > 29.9 && imc < 34.9) {
            faixa = "Obesidade grau I."
        } else if (imc > 34.9 && imc < 40) {
            faixa = "Obesidade grau II."
        } else if (imc > 40) {
            faixa = "Obesidade grau III."
        }
    
        resultado.textContent = formattedIMC
        document.getElementById('text').innerHTML = faixa
    
}

start ()