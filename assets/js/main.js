//botão de sanduiche mobile

const btnMobile = document.querySelector('[data-js="btn-mobile"]')

btnMobile.addEventListener('click', toggleMenu)

function toggleMenu(){
    const nav = document.querySelector('[data-js="menu-content"]')
    nav.classList.toggle('active')
}

const listMenu = document.querySelector('[data-js="list-menu"]')

listMenu.addEventListener('click', removeClass)

function removeClass(){
    const nav = document.querySelector('[data-js="menu-content"]')
    nav.classList.remove('active')
}

// calculo driver calc

const btnDriverCalc = document.querySelector('[data-js="btn-driver-calc"]')
btnDriverCalc.addEventListener('click', driverCalc)

function driverCalc(){
    const precoComb = Number(document.querySelector('[data-js="preco-comb"]').value)
    const descComb = Number(document.querySelector('[data-js="desc-comb"]').value)
    const kmPorlitro = Number(document.querySelector('[data-js="km-por-l"]').value)
    const kmRodado = Number(document.querySelector('[data-js="km-rodado"]').value)
    const horaInicio = document.querySelector('[data-js="hora-inicio"]').value
    const horaFinal = document.querySelector('[data-js="hora-final"]').value
    const faturamento = Number(document.querySelector('[data-js="faturamento"]').value)

    const ganhoPorKmInput = document.querySelector('[data-js="ganho-por-km"]')
    const gastoPorHoraInput = document.querySelector('[data-js="gasto-por-km"]')
    const gastoComCombInput = document.querySelector('[data-js="gasto-com-comb"]')
    const horasTrabInput = document.querySelector('[data-js="horas-trab"]')
    const ganhoPorHoraInput = document.querySelector('[data-js="ganho-por-hora"]')
    const valorCombComDescInput = document.querySelector('[data-js="valor-comb-com-desc"]')
    const lucroInput = document.querySelector('[data-js="lucro"]')


    if(precoComb === 0){
        alert('Campo preço combustivel deve ser preenchido')
    }else if (kmPorlitro === 0){
        alert('Campo km por litro deve ser preenchido')
    }else if (kmRodado === 0){
        alert('Campo km rodado deve ser preenchido')
    }else if (horaInicio === ''){
        alert('Campo iniciou a rodar deve ser preenchido')
    }else if (horaFinal === ''){
        alert('Campo parou de rodar deve ser preenchido')
    }else if(faturamento === 0 ){
        alert('Campo faturamento deve ser preenchido')
    }else{
        const dividir = (n1, n2) => (n1 / n2).toFixed(2)
        const subtrair = (n1, n2) => (n1 - n2).toFixed(2)

        let descontoCombV = dividir(descComb, 100) * precoComb
        let combComDesc = subtrair(precoComb, descontoCombV)
        let gastoPorKmRodado = dividir(combComDesc, kmPorlitro)
        let gastoComComb = (kmRodado * gastoPorKmRodado).toFixed(2)
        let lucro = subtrair(faturamento, gastoComComb)
        let ganhoPorKm = dividir(lucro, kmRodado)

        ganhoPorKmInput.value = `R$${ganhoPorKm}`  
        gastoPorHoraInput.value = `R$${gastoPorKmRodado}` 
        gastoComCombInput.value = `R$${gastoComComb}`
        horasTrabInput.value = 0
        ganhoPorHoraInput.value = 0
        valorCombComDescInput.value = `R$${combComDesc}`
        lucroInput.value = `R$${lucro}`
        
    }
}