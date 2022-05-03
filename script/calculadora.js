export { operation }
const pantalla = document.getElementById('pantalla')
const teclado = document.getElementById('numero')
let status = false
let firstNumber = "0"
let tipo = "0"


pantalla.textContent = '0'

const operation = () => {
    if (!teclado) return
    teclado.addEventListener('click', e => {
        const t = e.target,
            d = t.dataset

        if (d.number) mostrarPantalla(d.number)

        if (d.operador) getDatos(t,d.operador)

        if (d.operacion) getOperacion(d.operacion)
        
        if (d.del) del(d.del)
    })
}

const mostrarPantalla = number => {
    pantalla.textContent === '0' || status === true
        ? pantalla.textContent = number
        : number === '.' && !pantalla.textContent.includes('.')
          ?pantalla.textContent += number
          : number !== '.' 
          ?pantalla.textContent += number
          :null
          status = false
}

const getDatos = (element, operacion) => {
    status = true
     firstNumber = Number(pantalla.textContent);
     tipo = operacion
    pantalla.textContent = element.textContent
    
}

const getOperacion = operation => {

    const getResult = (firstNumber, tipo) => {
       const secondNumber = Number(pantalla.textContent)
       
        switch (tipo) {
            case 'mas':
                pantalla.textContent = firstNumber + secondNumber
                break;
            case 'menos':
                pantalla.textContent = firstNumber - secondNumber
                break;
            case 'multiplicar':
                pantalla.textContent = firstNumber * secondNumber
                break
            case 'dividir':
                pantalla.textContent = firstNumber / secondNumber
                break
                default:
                break;

               
        } 
    }
    operation === 'reset'
        ? pantalla.textContent = '0'
        : getResult(firstNumber, tipo)
        

}


const del = ()=>{
    const str2 = pantalla.textContent.slice(0, -1);
    pantalla.textContent = str2
}

    