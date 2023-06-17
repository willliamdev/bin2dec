// script
function numberHandler(binaryNumber, modal) {
  let binaryArray = []
  for (let index = 0; index < binaryNumber.length; index++) {

    const digit = Number(binaryNumber[index])

    if (digit === 0 || digit === 1) {
      binaryArray.push(digit)
    } else {
      modal.showModal()
      return
    }
  }

  return binaryArray.reverse()
}

function parseBinarytoDecimal(binary) {
  if (!binary) {
    return
  }

  let decimal = 0

  for (let index = 0; index < binary.length; index++) {
    const digit = binary[index];
    decimal += digit * (Math.pow(2, index))
  }
  return decimal
}

function app() {
  const modal = document.querySelector("dialog")
  const binary = document.querySelector("#input-number").value
  const result = document.querySelector("#result")

  const binaryNumber = numberHandler(binary, modal)
  const decimalNumber = parseBinarytoDecimal(binaryNumber)

  if (decimalNumber) {
    result.innerText = `Decimal: ${decimalNumber}`
  }
}
