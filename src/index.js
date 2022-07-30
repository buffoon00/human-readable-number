module.exports = function toReadable (number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  

  if (number === 0) {
    return 'zero';
  }

  if (number < 20) {
    return ones[number];
  }

  if (number >= 20 && number < 100) {
    if (Math.floor(number % 10) === 0) {
        return tens[Math.floor(number / 10)];
    }
    return tens[Math.floor(number / 10)] + ' ' + ones[(number % 10)];
  }

  if (number >= 100 && number < 1000) {
    if (number % 100 === 0) {
        return ones[number / 100] + ' ' + 'hundred';
    }
    if ((number % 100) % 10 === 0) {
        return ones[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + tens[Math.floor(number % 100)/10];
        //для 270, 480, 510...
    }
    if (Math.floor((number % 100) / 10) === 1) {
        return ones[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + ones[Math.floor(number % 100)];
        //для чисел 315, 412...
    }
    if ((Math.floor((number % 100) / 10) !== 0)) { 
        return ones[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + tens[Math.floor((number % 100)/10)] + ' ' + ones[(number % 100)%10];
        // для чисел 325, 467...и тд
    }
    if ((Math.floor((number % 100) / 10) === 0)) { 
        return ones[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + ones[(number % 100)%10];
        //для чисел по типу 305, 406
    }
    }
}

