class CalculadoraDeRaizes{
    constructor(){
        this.resposta = document.querySelector('#resposta')
        this.refresh = document.querySelector('#refresh')

        this.primeiroGrau = document.querySelector('#primeiro_grau');
        this.segundoGrau = document.querySelector('#segundo_grau');
        this.terceiroGrau = document.querySelector('#terceiro_grau');
    }

    limpaResposta(){
        this.resposta.innerText = ''
    }

    init(){

        this.refresh.addEventListener('click', e=>{
            window.location.reload()
        })

        this.escolheCalc()
        
        this.primeiroGrau.addEventListener('submit', this.calcPrimeiroGrau)

        this.segundoGrau.addEventListener('submit', this.calcSegundoGrau)
        
        this.terceiroGrau.addEventListener('submit', this.calcTerceiroGrau)
    }

    escolheCalc(){
        const selecionaCalc = document.querySelector('#seleciona_calc');

        if(selecionaCalc.value == 0){
            this.primeiroGrau.style.display = 'none'
            this.terceiroGrau.style.display = 'none'
            this.segundoGrau.style.display = 'none'
        }

        selecionaCalc.addEventListener('change', e=>{
            if(selecionaCalc.value == 0){
                this.primeiroGrau.style.display = 'none'
                this.terceiroGrau.style.display = 'none'
                this.segundoGrau.style.display = 'none'
            }else if(selecionaCalc.value == 1){
                this.primeiroGrau.style.display = 'block'
                this.terceiroGrau.style.display = 'none'
                this.segundoGrau.style.display = 'none'
            }else if(selecionaCalc.value == 2){
                this.segundoGrau.style.display = 'block'
                this.primeiroGrau.style.display = 'none'
                this.terceiroGrau.style.display = 'none'
            }else if(selecionaCalc.value == 3){
                this.segundoGrau.style.display = 'none'
                this.primeiroGrau.style.display = 'none'
                this.terceiroGrau.style.display = 'block'
            }
        })
    }

    calcPrimeiroGrau(e){
        e.preventDefault()
        const valorA = document.querySelector('#primeiro_valorA').value.replace(',','.')
        const valorB = document.querySelector('#primeiro_valorB').value.replace(',','.')

        if(valorA == '' || valorB == ''){
            resposta.innerText = 'Caso não tenha o coeficiente utilize 0 como valor'
            return
        }

        if(valorA == 0){
            resposta.innerText = 'O valor de A não pode ser 0, pois isso gera um resultado indeterminado'
            return
        }

        const resultado = (-valorB)/valorA

        const checkedSim = document.querySelector('#sim')

        if(checkedSim.checked){
            resposta.innerText = (`O valor de X é igual a: ${resultado.toFixed(2)}`)
        }else{
            resposta.innerText = (`O valor de X é igual a: ${resultado}`)
        }

        console.log('')
        console.log(`X = ${resultado}`)

    }

    calcSegundoGrau(e){
        e.preventDefault()

        const checkedSim = document.querySelector('#sim')

        const valorA = document.querySelector('#segundo_valorA').value.replace(',','.')
        const valorB = document.querySelector('#segundo_valorB').value.replace(',','.')
        const valorC = document.querySelector('#segundo_valorC').value.replace(',','.')
    
        if(valorA == '' || valorB == '' || valorC == ''){
            resposta.innerText = 'Caso não tenha o coeficiente utilize 0 como valor'
            return
        }

        const delta = (valorB**2 - 4 * valorA * valorC)
    
        if(delta < 0){
            resposta.innerText = 'Está expressão não possui raizes REAIS!'
        }else{
            console.log(`Valor de Delta é: ${delta}`)
    
            const resposta1 = (-valorB + (delta**(1/2))) / (2*valorA)
            const resposta2 = (-valorB - (delta**(1/2))) / (2*valorA)
    
            if(delta === 0){
                if(checkedSim.checked){
                    resposta.innerText = (`O valor de X é igual a: ${resposta1.toFixed(2)} | X1 = X2`)
                }else{
                    resposta.innerText = (`O valor de X é igual a: ${resposta1} | X1 = X2`)
                }
                console.log('')
                console.log(`X = ${resposta1}`)
            }else{
                if(checkedSim.checked){
                    resposta.innerText = (`O valor de X1 é igual a: ${resposta1.toFixed(2)} e O valor de X2 é igual a: ${resposta2.toFixed(2)}`)
                }else{
                    resposta.innerText = (`O valor de X1 é igual a: ${resposta1} e O valor de X2 é igual a: ${resposta2}`)
                }
                console.log('')
                console.log(`X1 = ${resposta1}`)
                console.log(`X2 = ${resposta2}`)
            }
        }
    }
    
    calcTerceiroGrau(e){
        e.preventDefault()

        const checkedSim = document.querySelector('#sim')

        const valorA = document.querySelector('#terceiro_valorA').value.replace(',','.')
        const valorB = document.querySelector('#terceiro_valorB').value.replace(',','.')
        const valorC = document.querySelector('#terceiro_valorC').value.replace(',','.')
        const valorD = document.querySelector('#terceiro_valorD').value.replace(',','.')
    
        if(valorA == '' || valorB == '' || valorC == '', valorD == ''){
            resposta.innerText = 'Caso não tenha o coeficiente utilize 0 como valor'
            return
        }

        if(valorD == 0){  
            const x1 = 0  
            const delta = (valorB**2 - 4 * valorA * valorC)
    
            if(delta < 0){
                resposta.innerText = 'Possui apenas 1 raiz real em X = 0'
            }else{    
                const resposta1 = (-valorB + (delta**(1/2))) / (2*valorA)
                const resposta2 = (-valorB - (delta**(1/2))) / (2*valorA)
    
                if(delta === 0){
                    if(resposta1 == x1){
                        resposta.innerText = (`O valor de X1 = 0 | X1 = X2 = X3`)
                    }else{
                        if(checkedSim.checked){
                            resposta.innerText = (`O valor de X1 = 0 e X2 é igual a: ${resposta1.toFixed(2)} | X2 = X3`)
                        }else{
                            resposta.innerText = (`O valor de X1 = 0 e X2 é igual a: ${resposta1} | X2 = X3`)
                        }
                    }
                    console.log('')
                    console.log(`X = ${resposta1}`)
                }else{
                    if(resposta1 == x1){
                        if(checkedSim.checked){
                            resposta.innerText = (`O valor de X1 = 0 e X2 = ${resposta2.toFixed(2)} | X1 = X3`)
                        }else{
                            resposta.innerText = (`O valor de X1 = 0 e X2 = ${resposta2} | X1 = X3`)
                        }
                    }else if(resposta2 == x1){
                        if(checkedSim.checked){
                            resposta.innerText = (`O valor de X1 = 0 e X2 é igual a: ${resposta1.toFixed(2)} | X1 = X3`)
                        }else{
                            resposta.innerText = (`O valor de X1 = 0 e X2 é igual a: ${resposta1} | X1 = X3`)
                        }
                    }else{
                        if(checkedSim.checked){
                            resposta.innerText = (`O valor de X1 = 0, X2 é igual a: ${resposta1.toFixed(2)} e O valor de X3 é igual a: ${resposta2.toFixed(2)}`)
                        }else{
                            resposta.innerText = (`O valor de X1 = 0, X2 é igual a: ${resposta1} e O valor de X3 é igual a: ${resposta2}`)
                        }
                    }
    
                    console.log('')
                    console.log(`X2 = ${resposta1}`)
                    console.log(`X3 = ${resposta2}`)
                }
            }
        }else{
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
                }
            });

            function metodoDeNewton(){

                const valorADerivado = valorA*3
                const valorBDerivado = valorB*2
                const valorCDerivado = valorC*1

                const delta = (valorBDerivado**2 - 4 * valorADerivado * valorCDerivado)
        
                const resposta1 = (-valorBDerivado + (delta**(1/2))) / (2*valorADerivado)
                const resposta2 = (-valorBDerivado - (delta**(1/2))) / (2*valorADerivado)
        
                let pontoCritico1 = resposta1*(1000)
                let pontoCritico2 = resposta2*(1000)
        
                if(resposta1 < 0 && resposta2 < 0){
                    pontoCritico1 = pontoCritico2*(-1)
                }else if(resposta1 > 0 && resposta2 > 0){
                    pontoCritico1 = pontoCritico2*(-1)
                }

                function geraIntervaloPontoCritico(min, max){
                    return Math.random() * (max - min + 1) + min
                }

                if(resposta1 > resposta2){
                    if((Number(resposta1) - Number(resposta2)) > 1){
                        var pontoCritico3 = geraIntervaloPontoCritico(Math.ceil(Number(resposta2) + 0.2), Number(resposta1))
                    }else{
                        var pontoCritico3 = geraIntervaloPontoCritico((Number(resposta2) + 0.2),Number(resposta1))
                    }
                }else{
                    if((Number(resposta2) - Number(resposta1)) > 1){
                        var pontoCritico3 = geraIntervaloPontoCritico(Math.ceil(Number(resposta1) + 0.2) ,Number(resposta2))
                    }else{
                        var pontoCritico3 = geraIntervaloPontoCritico((Number(resposta1) + 0.2),Number(resposta2))
                    }
                }

                if(delta < 0){
                    pontoCritico1 = -10000
                    pontoCritico2 = 9000
                }

        
                const primeiraRaizCritica = []       
        
                const iteracoes = 100000
        
                for (let index = 0; index < iteracoes; index++) {
                    pontoCritico1 = pontoCritico1 - (((Number(valorA)*((pontoCritico1)**3)) + (Number(valorB)*((pontoCritico1)**2)) + (Number(valorC)*(pontoCritico1)) + Number(valorD))/((Number(valorADerivado)*((pontoCritico1)**2)) + (Number(valorBDerivado)*(pontoCritico1)) + Number(valorCDerivado)))
        
                    const valorDaFuncao1 = ((Number(valorA)*((pontoCritico1)**3)) + (Number(valorB)*((pontoCritico1)**2)) + (Number(valorC)*(pontoCritico1)) + Number(valorD)).toFixed(10)
        
                    pontoCritico2 = pontoCritico2 - (((Number(valorA)*((pontoCritico2)**3)) + (Number(valorB)*((pontoCritico2)**2)) + (Number(valorC)*(pontoCritico2)) + Number(valorD))/((Number(valorADerivado)*((pontoCritico2)**2)) + (Number(valorBDerivado)*(pontoCritico2)) + Number(valorCDerivado)))
        
                    const valorDaFuncao2 = ((Number(valorA)*((pontoCritico2)**3)) + (Number(valorB)*((pontoCritico2)**2)) + (Number(valorC)*(pontoCritico2)) + Number(valorD)).toFixed(10)
        
                    pontoCritico3 = pontoCritico3 - (((Number(valorA)*((pontoCritico3)**3)) + (Number(valorB)*((pontoCritico3)**2)) + (Number(valorC)*(pontoCritico3)) + Number(valorD))/((Number(valorADerivado)*((pontoCritico3)**2)) + (Number(valorBDerivado)*(pontoCritico3)) + Number(valorCDerivado)))
        
                    const valorDaFuncao3 = ((Number(valorA)*((pontoCritico3)**3)) + (Number(valorB)*((pontoCritico3)**2)) + (Number(valorC)*(pontoCritico3)) + Number(valorD)).toFixed(10)
        
                    if(valorDaFuncao1 == 0.0000000000 && valorDaFuncao2 == 0.0000000000){
                        primeiraRaizCritica.push(pontoCritico1, pontoCritico2, pontoCritico3)
                        break
                    }
                }

                if(primeiraRaizCritica[0].toFixed(7) == primeiraRaizCritica[1].toFixed(7)){
                    if(checkedSim.checked){
                        resposta.innerText = (`Possui apenas 1 raiz real em X = ${primeiraRaizCritica[0].toFixed(4)}`)
                    }else{
                        resposta.innerText = (`Possui apenas 1 raiz real em X = ${primeiraRaizCritica[0]}`)
                    }
                }else if(primeiraRaizCritica[0].toFixed(4) == primeiraRaizCritica[2].toFixed(4)){
                    metodoDeNewton()
                }else if(primeiraRaizCritica[1].toFixed(4) == primeiraRaizCritica[2].toFixed(4)){
                    metodoDeNewton()
                }else{
                    if(checkedSim.checked){
                        resposta.innerText = (`X1 ≅ ${primeiraRaizCritica[0].toFixed(4)}, X2 ≅ ${primeiraRaizCritica[1].toFixed(4)}, X3 ≅ ${primeiraRaizCritica[2].toFixed(4)}`)
                    }else{
                        resposta.innerText = (`X1 ≅ ${primeiraRaizCritica[0]}, X2 ≅ ${primeiraRaizCritica[1]}, X3 ≅ ${primeiraRaizCritica[2]}`)
                    }
                }

                console.log(`X1 = ${primeiraRaizCritica[0]}`)
                console.log(`X2 = ${primeiraRaizCritica[1]}`)
                console.log(`X3 = ${primeiraRaizCritica[2]}`)

            }

            if(raizes == ''){
                metodoDeNewton()
            }

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
                                if(checkedSim.checked){
                                    resposta.innerText = (`O valor de X1 = 0 e X2 é igual a: ${resposta1.toFixed(2)} | X2 = X3`)
                                }else{
                                    resposta.innerText = (`O valor de X1 = 0 e X2 é igual a: ${resposta1} | X2 = X3`)
                                }
                            }
                
                            console.log('')
                            console.log(`X = ${resposta1}`)
                        }else{
                            if(resposta1 == raizes[0]){
                                if(checkedSim.checked){
                                    resposta.innerText = (`O valor de X1 = ${raizes[0]} e X2 = ${resposta2.toFixed(2)} | X1 = X3`)
                                }else{
                                    resposta.innerText = (`O valor de X1 = ${raizes[0]} e X2 = ${resposta2} | X1 = X3`)
                                }
                            }else if(resposta2 == raizes[0]){
                                if(checkedSim.checked){
                                    resposta.innerText = (`O valor de X1 = ${raizes[0]} e X2 é igual a: ${resposta1.toFixed(2)} | X1 = X3`)
                                }else{
                                    resposta.innerText = (`O valor de X1 = ${raizes[0]} e X2 é igual a: ${resposta1} | X1 = X3`)
                                }
                            }else{
                                if(checkedSim.checked){
                                    resposta.innerText = (`O valor de X1 = ${raizes[0]}, X2 é igual a: ${resposta1.toFixed(2)} e O valor de X3 é igual a: ${resposta2.toFixed(2)}`)
                                }else{
                                    resposta.innerText = (`O valor de X1 = ${raizes[0]}, X2 é igual a: ${resposta1} e O valor de X3 é igual a: ${resposta2}`)
                                }
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
        }
    }
}

const calc = new CalculadoraDeRaizes();

calc.init()