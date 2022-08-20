const selecionaCalc = document.querySelector('#seleciona_calc');

const refresh = document.querySelector('#refresh')

refresh.addEventListener('click', e=>{
    window.location.reload()
})

const primeiroGrau = document.querySelector('#primeiro_grau')
const segundoGrau = document.querySelector('#segundo_grau')
const terceiroGrau = document.querySelector('#terceiro_grau')

const resposta = document.querySelector('#resposta')

primeiroGrau.style.display = 'none'
segundoGrau.style.display = 'none'
terceiroGrau.style.display = 'block'

selecionaCalc.addEventListener('change', e=>{
    if(selecionaCalc.value == 0){
        primeiroGrau.style.display = 'none'
        terceiroGrau.style.display = 'none'
        segundoGrau.style.display = 'none'
    }else if(selecionaCalc.value == 1){
        primeiroGrau.style.display = 'block'
        segundoGrau.style.display = 'none'
        terceiroGrau.style.display = 'none'
    }else if(selecionaCalc.value == 2){
        segundoGrau.style.display = 'block'
        primeiroGrau.style.display = 'none'
        terceiroGrau.style.display = 'none'
    }else if(selecionaCalc.value == 3){
        segundoGrau.style.display = 'none'
        primeiroGrau.style.display = 'none'
        terceiroGrau.style.display = 'block'
    }
})

function calculaPrimeiroGrau(e){
    e.preventDefault()

    const valorA = primeiroGrau.querySelector('#primeiro_valorA').value
    const valorB = primeiroGrau.querySelector('#primeiro_valorB').value
    const btnSend = primeiroGrau.querySelector('#btn_primeiro')

    if(valorA == '' || valorB == ''){
        resposta.innerText = 'Caso não tenha o coeficiente utilize 0 como valor'
        return
    }
    const resultado = (-valorB)/valorA

    resposta.innerText = (`O valor de X é igual a: ${resultado.toFixed(2)}`)
    console.log('')
    console.log(`X = ${resultado}`)

    
}

primeiroGrau.addEventListener('submit', calculaPrimeiroGrau)

function calculaSegundoGrau(e){
    e.preventDefault()
    const valorA = segundoGrau.querySelector('#segundo_valorA').value
    const valorB = segundoGrau.querySelector('#segundo_valorB').value
    const valorC = segundoGrau.querySelector('#segundo_valorC').value

    if(valorA == '' || valorB == '' || valorC == ''){
        resposta.innerText = 'Caso não tenha o coeficiente utilize 0 como valor'
        return
    }


    const delta = (valorB**2 - 4 * valorA * valorC)

    if(delta < 0){
        resposta.innerText = 'Está expressão não possui raizes REAIS!'
    }else{
        console.log(delta)

        const resposta1 = (-valorB + (delta**(1/2)) ) / (2*valorA)
        const resposta2 = (-valorB-(delta**(1/2)))/ (2*valorA)

        if(delta === 0){
            resposta.innerText = (`O valor de X é igual a: ${resposta1.toFixed(2)} | X1 = X2`)
            console.log('')
            console.log(`X = ${resposta1}`)
        }else{
            resposta.innerText = (`O valor de X1 é igual a: ${resposta1.toFixed(2)} e O valor de X2 é igual a: ${resposta2.toFixed(2)}`)
            console.log('')
            console.log(`X1 = ${resposta1}`)
            console.log(`X2 = ${resposta2}`)
        }
    }
}

segundoGrau.addEventListener('submit', calculaSegundoGrau)

terceiroGrau.addEventListener('submit', e=>{
    e.preventDefault()

    const valorA = terceiroGrau.querySelector('#terceiro_valorA').value
    const valorB = terceiroGrau.querySelector('#terceiro_valorB').value
    const valorC = terceiroGrau.querySelector('#terceiro_valorC').value
    const valorD = terceiroGrau.querySelector('#terceiro_valorD').value

    function metodoDeNewton(){
        const valorADerivado = valorA*3
        const valorBDerivado = valorB*2
        const valorCDerivado = valorC*1
        const delta = (valorBDerivado**2 - 4 * valorADerivado * valorCDerivado)

        if(delta < 0){
            const valorAlternativo = []

            if(valorD < 0){
                var pontoCritico4 = 10000
            }else{
                var pontoCritico4 = -10000
            }

            for (let index = -100000; index < 100000; index++) {
                pontoCritico4 = pontoCritico4 - ((Number(valorA*((pontoCritico4)**3)) + Number(valorB*((pontoCritico4)**2)) + Number(valorC*(pontoCritico4)) + Number(valorB))/(Number(valorADerivado*((pontoCritico4)**2)) + Number(valorBDerivado*(pontoCritico4)) + Number(valorADerivado)))
    
                const valorDaFuncao1 = (Number(valorA*((pontoCritico4)**3)) + Number(valorB*((pontoCritico4)**2)) + Number(valorC*(pontoCritico4)) + Number(valorB)).toFixed(10)
    
                if(valorDaFuncao1 == 0.0000000000){
                    valorAlternativo.push(pontoCritico4)
                    break
                }
            }

            resposta.innerText = (`Possui apenas 1 raiz real em X ≅ ${valorAlternativo[0]}`)

        }

        const resposta1 = (-valorBDerivado + (delta**(1/2)) ) / (2*valorADerivado)
        const resposta2 = (-valorBDerivado-(delta**(1/2)))/ (2*valorADerivado)

        let pontoCritico1 = resposta1*(100)
        let pontoCritico2 = resposta2*(100)

        if(resposta1 < 0 && resposta2 < 0){
            var pontoCritico3 = (resposta1/resposta2)/2
        }else if(resposta1 < 0 && resposta2 > 0){
            var pontoCritico3 = ((-resposta1)/resposta2)/2
        }else if(resposta1 > 0 && resposta2 < 0){
            var pontoCritico3 = ((resposta1)/(-resposta2))/2
        }else if(resposta1 > 0 && resposta2 > 0){
            var pontoCritico3 = ((resposta1)/(resposta2))/2
        }

        const primeiraRaizCritica = []

        
        if(resposta1 > resposta2){
            for (let index = resposta2*10; index < resposta1*10; index++) {

                let intervalo = index

                console.log(intervalo)

                intervalo = intervalo - ((Number(valorA*((intervalo)**3)) + Number(valorB*((intervalo)**2)) + Number(valorC*(intervalo)) + Number(valorB))/(Number(valorADerivado*((intervalo)**2)) + Number(valorBDerivado*(intervalo)) + Number(valorADerivado)))

                const valorDaFuncao3 = (Number(valorA*((intervalo)**3)) + Number(valorB*((intervalo)**2)) + Number(valorC*(intervalo)) + Number(valorB)).toFixed(3)
                
                if(valorDaFuncao3 == -3){
                    primeiraRaizCritica.push(intervalo)
                    break
                }
            }
        }
        if(resposta1 < resposta2){
            for (let index = resposta1*2; resposta2 < 100; index++) {

                let intervalo = index

                console.log(intervalo)

                intervalo = intervalo - ((Number(valorA*((intervalo)**3)) + Number(valorB*((intervalo)**2)) + Number(valorC*(intervalo)) + Number(valorB))/(Number(valorADerivado*((intervalo)**2)) + Number(valorBDerivado*(intervalo)) + Number(valorADerivado)))

                const valorDaFuncao3 = (Number(valorA*((intervalo)**3)) + Number(valorB*((intervalo)**2)) + Number(valorC*(intervalo)) + Number(valorB)).toFixed(3)
                
                if(valorDaFuncao3 == -3){
                    primeiraRaizCritica.push(intervalo)
                    break
                }
                }
        }



        const iteracoes = 100

        for (let index = 0; index < iteracoes; index++) {
            pontoCritico1 = pontoCritico1 - ((Number(valorA*((pontoCritico1)**3)) + Number(valorB*((pontoCritico1)**2)) + Number(valorC*(pontoCritico1)) + Number(valorB))/(Number(valorADerivado*((pontoCritico1)**2)) + Number(valorBDerivado*(pontoCritico1)) + Number(valorADerivado)))

            const valorDaFuncao1 = (Number(valorA*((pontoCritico1)**3)) + Number(valorB*((pontoCritico1)**2)) + Number(valorC*(pontoCritico1)) + Number(valorB)).toFixed(10)

            pontoCritico2 = pontoCritico2 - ((Number(valorA*((pontoCritico2)**3)) + Number(valorB*((pontoCritico2)**2)) + Number(valorC*(pontoCritico2)) + Number(valorB))/(Number(valorADerivado*((pontoCritico2)**2)) + Number(valorBDerivado*(pontoCritico2)) + Number(valorADerivado)))

            const valorDaFuncao2 = (Number(valorA*((pontoCritico2)**3)) + Number(valorB*((pontoCritico2)**2)) + Number(valorC*(pontoCritico2)) + Number(valorB)).toFixed(10)

            if(valorDaFuncao1 == 0.0000000000 && valorDaFuncao2 == 0.0000000000){
                primeiraRaizCritica.push(pontoCritico1, pontoCritico2)
                break
            }
        }
        if(delta>0){
            resposta.innerText = (`X1 ≅ ${primeiraRaizCritica[0].toFixed(6)}, X2 ≅ ${primeiraRaizCritica[1].toFixed(6)}, X3 ≅ ${pontoCritico3.toFixed(6)} X3 é uma raiz muito aproximada `)
        }


        
    }

    if(valorA == '' || valorB == '' || valorC == ''){
        resposta.innerText = 'Caso não tenha o coeficiente utilize 0 como valor'
        return
    }

    if(valorD == 0){
        x1 = 0

        const delta = (valorB**2 - 4 * valorA * valorC)

        if(delta < 0){
            resposta.innerText = 'Possui apenas 1 raiz real em X = 0'
        }else{    
            const resposta1 = (-valorB + (delta**(1/2)) ) / (2*valorA)
            const resposta2 = (-valorB - (delta**(1/2)))/ (2*valorA)

            if(delta === 0){
                if(resposta1 == x1){
                    resposta.innerText = (`O valor de X1 = 0 | X1 = X2 = X3`)
                }else{
                    resposta.innerText = (`O valor de X1 = 0 e X2 é igual a: ${resposta1.toFixed(2)} | X2 = X3`)
                }
    
                console.log('')
                console.log(`X = ${resposta1}`)
            }else{
                if(resposta1 == x1){
                    resposta.innerText = (`O valor de X1 = 0 e X2 = ${resposta2.toFixed(2)} | X1 = X3`)
                }else if(resposta2 == x1){
                    resposta.innerText = (`O valor de X1 = 0 e X2 é igual a: ${resposta1.toFixed(2)} | X1 = X3`)
                }else{
                    resposta.innerText = (`O valor de X1 = 0, X2 é igual a: ${resposta1.toFixed(2)} e O valor de X3 é igual a: ${resposta2.toFixed(2)}`)
                }

                console.log('')
                console.log(`X2 = ${resposta1}`)
                console.log(`X3 = ${resposta2}`)
            }
        }
    }else{
        if(valorA != null){
            const possiveisRaizes = []

            if(valorD>0){                
                for (let index = 1; index < (Number(valorD)+1); index++) {
                    const isInteger = valorD % index  
                    if(isInteger == 0){
                        possiveisRaizes.push(index)
                        possiveisRaizes.push(-index)
                    }
                }
            }else{                
                for (let index = -1; index > (Number(valorD)-1); index--) {
                    const isInteger = valorD % index  

                    if(isInteger == 0){
                        possiveisRaizes.push(index)
                        possiveisRaizes.push(-index)
                    }
                }
            }

            const raizes = []

            possiveisRaizes.forEach(test => {
                const primeiraRaiz = Number(valorA)*(test**3) + Number(valorB)*(test**2) + Number(valorC)*(test) + Number(valorD)

                if(primeiraRaiz == 0){
                    raizes.push(test)
                }else{
                    metodoDeNewton()
                }
         
            });

            function dispositivoBrioRufinho(){
                // irei achar os coeficientes de grau 2

                const primeiro =  valorA*raizes[0]

                const segundoCoeficiente = Number(primeiro) + Number(valorB)

                const segundo = segundoCoeficiente*raizes[0]

                const terceiroCoeficiente = Number(segundo) + Number(valorC)

                const terceiro = terceiroCoeficiente*raizes[0]

                const quartoCoeficiente = Number(terceiro) + Number(valorD)

                if(quartoCoeficiente == 0){
                    const delta = (segundoCoeficiente**2 - 4 * valorA * terceiroCoeficiente)

                    if(delta < 0){
                        resposta.innerText = `Possui apenas 1 raiz real em X = ${raizes[0]}`
                    }else{                
                        const resposta1 = (-segundoCoeficiente + (delta**(1/2)) ) / (2*valorA)
                        const resposta2 = (-segundoCoeficiente - (delta**(1/2)))/ (2*valorA)
            
                        if(delta === 0){
                            if(resposta1 == raizes[0]){
                                resposta.innerText = (`O valor de X1 = 0 | X1 = X2 = X3`)
                            }else{
                                resposta.innerText = (`O valor de X1 = 0 e X2 é igual a: ${resposta1.toFixed(2)} | X2 = X3`)
                            }
                
                            console.log('')
                            console.log(`X = ${resposta1}`)
                        }else{
                            if(resposta1 == raizes[0]){
                                resposta.innerText = (`O valor de X1 = ${raizes[0]} e X2 = ${resposta2.toFixed(2)} | X1 = X3`)
                            }else if(resposta2 == raizes[0]){
                                resposta.innerText = (`O valor de X1 = ${raizes[0]} e X2 é igual a: ${resposta1.toFixed(2)} | X1 = X3`)
                            }else{
                                resposta.innerText = (`O valor de X1 = ${raizes[0]}, X2 é igual a: ${resposta1.toFixed(2)} e O valor de X3 é igual a: ${resposta2.toFixed(2)}`)
                            }
            
                            console.log('')
                            console.log(`X1 = ${raizes[0]}`)
                            console.log(`X2 = ${resposta1}`)
                            console.log(`X3 = ${resposta2}`)
                        }
                    }

                }else if(quartoCoeficiente != 0){
                    metodoDeNewton()
                }else{
                    resposta.innerText = (`Vish, não sei oque rolou HEHEHE`)
                }
            }
            dispositivoBrioRufinho()
        }else{
            metodoDeNewton()
        }
    }
})
