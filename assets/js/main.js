//botão de sanduiche mobile

const btnMobile = document.querySelector('[data-js="btn-mobile"]')

btnMobile.addEventListener('click', toggleMenu)

function toggleMenu() {
    const nav = document.querySelector('[data-js="menu-content"]')
    nav.classList.toggle('active')
}

const listMenu = document.querySelector('[data-js="list-menu"]')

listMenu.addEventListener('click', removeClass)

function removeClass() {
    const nav = document.querySelector('[data-js="menu-content"]')
    nav.classList.remove('active')
}

// colocando o "%" no input de desconto do combustivel
const descComb2 = document.querySelector('[data-js="desc-comb"]')
descComb2.addEventListener('input', () => {

    descComb2.value = descComb2.value.replace('%', '')
    if (!descComb2.value.endsWith('%')) {
        descComb2.value = descComb2.value + '%'
    }
    descComb2.setSelectionRange(descComb2.value.length - 1, descComb2.value.length - 1)
})

const btnDriverCalc = document.querySelector('[data-js="btn-driver-calc"]')
btnDriverCalc.addEventListener('click', driverCalc)

// calculo driver calc
function driverCalc() {
    let descComb3 = descComb2.value.replace(/[a-zA-Z%]/g, '')
    descComb3 = descComb3.replace(',','.')
    const descComb = Number(descComb3)
    const precoComb = Number(document.querySelector('[data-js="preco-comb"]').value)
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


    if (precoComb === 0) {
        alert('Campo preço combustivel deve ser preenchido')
    } else if (kmPorlitro === 0) {
        alert('Campo km por litro deve ser preenchido')
    } else if (kmRodado === 0) {
        alert('Campo km rodado deve ser preenchido')
    } else if (horaInicio === '') {
        alert('Campo iniciou a rodar deve ser preenchido')
    } else if (horaFinal === '') {
        alert('Campo parou de rodar deve ser preenchido')
    } else if (faturamento === 0) {
        alert('Campo faturamento deve ser preenchido')
    } else {
        const dividir = (n1, n2) => (n1 / n2).toFixed(2)
        const subtrair = (n1, n2) => (n1 - n2).toFixed(2)

        let descontoCombV = dividir(descComb, 100) * precoComb
        let combComDesc = subtrair(precoComb, descontoCombV)
        let gastoPorKmRodado = dividir(combComDesc, kmPorlitro)
        let gastoComComb = (kmRodado * gastoPorKmRodado).toFixed(2)
        let lucro = subtrair(faturamento, gastoComComb)
        let ganhoPorKm = dividir(lucro, kmRodado)


        //trabalhando com as horas 
        //transformando o horario de inicio(string) em valor decimal
        let minutosTrabInicio = (Number(horaInicio.split(':')[0]) * 60) + Number(horaInicio.split(':')[1]) // total de horas e minutos em minutos
        let horasTrabalhadasDecimalInicio = minutosTrabInicio / 60 //não chamei a função dividir pois nao quero arredondar os decimais

        //transformando o horario de fim(string) em valor decimal
        let minutosTrabFim = (Number(horaFinal.split(':')[0]) * 60) + Number(horaFinal.split(':')[1]) // total de horas e minutos em minutos
        let horasTrabalhadasDecimalFim = minutosTrabFim / 60 //não chamei a função dividir pois nao quero arredondar os decimais

        // verificando se ele começou em um dia e finalizou em outro dia
        let qntHoraTrabDecimal
        if (horasTrabalhadasDecimalInicio > horasTrabalhadasDecimalFim) {
            qntHoraTrabDecimal = (24 - horasTrabalhadasDecimalInicio) + horasTrabalhadasDecimalFim
        } else {
            qntHoraTrabDecimal = horasTrabalhadasDecimalFim - horasTrabalhadasDecimalInicio // não chamei a função subtrair pois nao quero arredondar os decimais
        }

        let ganhoPorHora = dividir(lucro, qntHoraTrabDecimal)

        // convertendo a qnt de hora trabalhada decimal em qnt de hora trabalhada em string, ja formatada
        let horas = Math.floor(qntHoraTrabDecimal)
        let minutos = Math.floor((qntHoraTrabDecimal - horas) * 60)
        let horaFormatada = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`

        ganhoPorKmInput.value = `R$${ganhoPorKm}`
        gastoPorHoraInput.value = `R$${gastoPorKmRodado}`
        gastoComCombInput.value = `R$${gastoComComb}`
        horasTrabInput.value = horaFormatada
        ganhoPorHoraInput.value = `R$${ganhoPorHora}`
        valorCombComDescInput.value = `R$${combComDesc}`
        lucroInput.value = `R$${lucro}`

    }
}
// Calculo km por litro
const btnKmLitro = document.querySelector('[data-js="btn-km-por-litro"]')

btnKmLitro.addEventListener('click', kmLitroCalc)

function kmLitroCalc() {
    const qntKmRodado = Number(document.querySelector('[data-js="qnt-km-rod"]').value)
    const qntLitroAbast = Number(document.querySelector('[data-js="qnt-litro-abast"]').value)
    const resultKmLitro = document.querySelector('[data-js="result-km-litro"]')

    if (qntKmRodado === 0) {
        alert('Quantidade km rodado deve ser preenchido')
    } else if (qntLitroAbast === 0) {
        alert('Quantidade de litros abastecido deve ser preenchido')
    } else {
        const resultadoKmLitro = (qntKmRodado / qntLitroAbast).toFixed(2)
        resultKmLitro.value = `${resultadoKmLitro} km por litro`
    }
}

// Calculo desconto combustivel
const btnDescComb = document.querySelector('[data-js="btn-desc-comb"]')

btnDescComb.addEventListener('click', descCombCalc)

function descCombCalc() {
    const semDesc = Number(document.querySelector('[data-js="pago-sem-desc"]').value)
    const comDesc = Number(document.querySelector('[data-js="pago-com-desc"]').value)
    const resultDescCombInput = document.querySelector('[data-js="result-desc-comb"]')

    if (semDesc === 0) {
        alert('Valor pago sem desconto deve ser preenchido')
    } else if (comDesc === 0) {
        alert('Valor pago com desconto deve ser preenchido')
    } else {
        const resultDescComb = ((semDesc - comDesc) * 100 / semDesc).toFixed(2)
        resultDescCombInput.value = `${resultDescComb}%`
    }

}   
