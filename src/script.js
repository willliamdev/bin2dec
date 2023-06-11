
function numberHandler(binaryNumber) {
  let binaryArray = []
  for (let index = 0; index < binaryNumber.length; index++) {

    const digit = Number(binaryNumber[index])

    if (digit === 0 || digit === 1) {
      binaryArray.push(digit)
    } else {
      window.alert(`${binaryNumber[index]} is not a binary number!`)
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

  // 100
  for (let index = 0; index < binary.length; index++) {
    const digit = binary[index];
    decimal += digit * (Math.pow(2, index))

  }

  return decimal
}



function app() {
  const binary = document.getElementById("input-number").value
  const result = document.getElementById("result")

  const binaryNumber = numberHandler(binary)

  const decimalNumber = parseBinarytoDecimal(binaryNumber)
  result.innerText = `Decimal: ${decimalNumber}`
  return
}
