var num1
var num2
var operator

const init = () => {

    // Definiendo variables
    let total = document.getElementById('result')
    let cero = document.getElementById('cero')
    let one = document.getElementById('one')
    let two = document.getElementById('two')
    let three = document.getElementById('three')
    let four = document.getElementById('four')
    let five = document.getElementById('five')
    let six = document.getElementById('six')
    let seven = document.getElementById('seven')
    let eight = document.getElementById('eight')
    let nine = document.getElementById('nine')
    let equal = document.getElementById('equal')
    let divided = document.getElementById('divided')
    let multiplied = document.getElementById('multiplied')
    let minus = document.getElementById('minus')
    let plus = document.getElementById('plus')
    let ac = document.getElementById('ac')

    // Definiendo botones
    one.onclick = (e) => {
        total.textContent += '1'
    }
    two.onclick = (e) => {
        total.textContent += '2'
    }
    three.onclick = (e) => {
        total.textContent += '3'
    }
    four.onclick = (e) => {
        total.textContent += '4'
    }
    five.onclick = (e) => {
        total.textContent += '5'
    }
    six.onclick = (e) => {
        total.textContent += '6'
    }
    seven.onclick = (e) => {
        total.textContent += '7'
    }
    eight.onclick = (e) => {
        total.textContent += '8'
    }
    nine.onclick = (e) => {
        total.textContent += '9'
    }
    cero.onclick = (e) => {
        total.textContent += '0'
    }

    ac.onclick = (e) => {
        reset()
    }
    plus.onclick = (e) => {
        num1 = total.textContent
        operator = '+'
        clean()
    }
    minus.onclick = (e) => {
        num1 = total.textContent
        operator = '-'
        clean()
    }
    divided.onclick = (e) => {
        num1 = total.textContent
        operator = '/'
        clean()
    }
    multiplied.onclick = (e) => {
        num1 = total.textContent
        operator = '*'
        clean()
    }
    equal.onclick = (e) => {
        num2 = total.textContent
        solve()
    }

    //Definiendo funciones

    const clean = () => {
        total.textContent = ''
    }

    const reset = () => {
        total.textContent = ''
        num1 = 0
        num2 = 0
        operator = ''
    }

    //Calculo

    const solve = () => {
        let result = 0
        switch(operator) {
            case '+':
                result = parseFloat(num1) + parseFloat(num2)
                break;
            case '-':
                result = parseFloat(num1) - parseFloat(num2)
                break;
            case '*':
                result = parseFloat(num1) * parseFloat(num2)
                break;
            case '/':
                result = parseFloat(num1) / parseFloat(num2)
                break;
        }
        reset()
        total.textContent = result 
    }

}