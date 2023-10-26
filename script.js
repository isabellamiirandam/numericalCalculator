const firstNumberElement = document.querySelector('#firstNumber')
const secondNumberElement = document.querySelector('#secondNumber')
const buttonElement = document.querySelector('.send')

buttonElement.addEventListener('click', (event) => {
  event.preventDefault()

  const firstNumber = Number(firstNumberElement.value)
  const secondNumber = Number(secondNumberElement.value)

  const sum = firstNumber + secondNumber
  const subtraction = firstNumber - secondNumber
  const multiplication = firstNumber * secondNumber
  const division = firstNumber / secondNumber

  const result = ` Seu resultado final é :
  Soma: ${sum}
  Subtração: ${subtraction}
  Multiplicação: ${multiplication}
  Divisão: ${division}`

  alert(result)

})
