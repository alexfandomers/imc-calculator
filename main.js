'use strict';


const calcular = document.getElementById('calcular')

function imc(){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '') {
            
            const valorImc = (peso / (altura * altura)).toFixed(2)
    
            let classificacao = ''
    
            if(valorImc < 18.5){
                classificacao = 'Abaixo do peso'
            }else if(valorImc >= 18.5 && valorImc <= 24.9){
                classificacao = 'Peso Ideal'
            }else if(valorImc >= 25 && valorImc <= 29.9){
                classificacao = 'Sobrepeso'
            }else if(valorImc >= 30 && valorImc <= 34.9){
                classificacao = 'Obesidade Grau I'
            }else if(valorImc >= 35 && valorImc <= 39.9){
                classificacao = 'Obesidade Grau II'
            }else{
                classificacao = 'Obesidade Grau III'
            }
    
            resultado.innerHTML = `${nome}, seu IMC é ${valorImc} e você está ${classificacao}`

        }else{
            
            resultado.textContent = 'preencha os dados'
        }


} 

calcular.addEventListener('click', imc);




