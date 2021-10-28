function addCommas(num) {
    let regexDot = /[.]/g;
    let startingIdx
    let isANegative = false

    num = num.toString();

    if (num[0] == "-") {
        num = num.slice(1)
        isANegative = true
    }

    
    const regexForDecimal = num.search(regexDot)
    if (regexForDecimal == -1){
        startingIdx = num.length
    } else {
        startingIdx = regexForDecimal
    }

    while (startingIdx > num.length%3+1){
        const latterDigits = num.substring(num.length,startingIdx-3)
        const foreDigits = num.substring(0,startingIdx-3)
        num = foreDigits + "," + latterDigits;
        startingIdx = startingIdx - 3
    }
    console.log(isANegative)

    if (isANegative){
        num = "-" + num
    }
    return num
}

module.exports = addCommas;