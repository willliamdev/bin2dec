
const binaryInput = document.querySelector("#input-number")
const button = document.querySelector("#convert")
const modal = document.querySelector("dialog")
const result = document.querySelector("#result")

function numberHandler(binaryNumber, modal) {
  let binaryArray = []

  for (let index = 0; index < binaryNumber.length; index++) {
    const digit = Number(binaryNumber[index])
    if (digit === 0 || digit === 1) {
      binaryArray.push(digit)
    } else {
      modal.showModal()
      return null
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

function convert() {
  const binaryNumber = numberHandler(binaryInput.value, modal)
  const decimalNumber = parseBinarytoDecimal(binaryNumber)

  if (decimalNumber) {
    result.innerText = `Decimal: ${decimalNumber}`
  } else {
    result.innerText = "" // clear
  }
}


button.addEventListener("click", () => {
  convert()
})

binaryInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    convert()
  }
})