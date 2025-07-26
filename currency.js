function convertCurrency(){
const value = parseFloat(cinput.value);
console.log(cinput.value);

    if(fromDollar.value == 'USD' && toDollar.value == 'EUR' ){
        result2.value = value * 0.85;
    }else if(fromDollar.value == 'USD' && toDollar.value == 'GBP' ){
            result2.value = value * 0.74
    }else if(fromDollar.value == 'USD' && toDollar.value == 'JPY' ){
             result2.value = value * 147.72
    }else if(fromDollar.value == 'USD' && toDollar.value == 'INR' ){
            result2.value = value * 86.46
    }else if(fromDollar.value == 'USD' && toDollar.value == 'CAD' ){
        result2.value = value * 1.37
    }else if(fromDollar.value == 'USD' && toDollar.value == 'AUD' ){
        result2.value = value * 1.52
    }else if(fromDollar.value == 'USD' && toDollar.value == 'CNY' ){
        result2.value = value * 7.15
    }else if(fromDollar.value == 'EUR' && toDollar.value == 'GBP' ){
        result2.value = value * 0.87
    }else if(fromDollar.value == 'EUR' && toDollar.value == 'JPY' ){
        result2.value = value * 173.38
    }else if(fromDollar.value == 'EUR' && toDollar.value == 'INR' ){
        result2.value = value * 101.60
    }else if(fromDollar.value == 'EUR' && toDollar.value == 'CAD' ){
        result2.value = value * 1.61
    }else if(fromDollar.value == 'EUR' && toDollar.value == 'AUD' ){
        result2.value = value * 1.79
    }else if(fromDollar.value == 'EUR' && toDollar.value == 'CNY' ){
        result2.value = value * 8.41
    }else if(fromDollar.value == 'EUR' && toDollar.value == 'USD'){
        result2.value = value * 1.17
    }else if(fromDollar.value == 'GBP' && toDollar.value == 'EUR' ){
        result2.value = value * 1.14
    }else if(fromDollar.value == 'GBP' && toDollar.value == 'JPY' ){
        result2.value = value * 198.23
    }else if(fromDollar.value == 'GBP' && toDollar.value == 'INR' ){
        result2.value = value * 116.22
    }else if(fromDollar.value == 'GBP' && toDollar.value == 'CAD' ){
        result2.value = value * 1.84
    }else if(fromDollar.value == 'GBP' && toDollar.value == 'AUD' ){
        result2.value = value * 2.05
    }else if(fromDollar.value == 'GBP' && toDollar.value == 'CNY' ){
        result2.value = value * 9.61
    }else if(fromDollar.value == 'GBP' && toDollar.value == 'USD'){
        result2.value = value * 1.34
    }else if(fromDollar.value == 'JPY' && toDollar.value == 'EUR' ){
        result2.value = value * 0.0058
    }else if(fromDollar.value == 'JPY' && toDollar.value == 'GBP' ){
        result2.value = value * 0.0050
    }else if(fromDollar.value == 'JPY' && toDollar.value == 'INR' ){
        result2.value = value * 0.59
    }else if(fromDollar.value == 'JPY' && toDollar.value == 'CAD' ){
        result2.value = value * 0.0093
    }else if(fromDollar.value == 'JPY' && toDollar.value == 'AUD' ){
        result2.value = value * 0.0010
    }else if(fromDollar.value == 'JPY' && toDollar.value == 'CNY' ){
        result2.value = value * 0.048
    }else if(fromDollar.value == 'JPY' && toDollar.value == 'USD'){
        result2.value = value * 0.0068
    }else if(fromDollar.value == 'INR' && toDollar.value == 'EUR' ){
        result2.value = value * 0.0098
    }else if(fromDollar.value == 'INR' && toDollar.value == 'GBP' ){
        result2.value = value *  0.0086
    }else if(fromDollar.value == 'INR' && toDollar.value == 'JPY' ){
        result2.value = value *  1.71
    }else if(fromDollar.value == 'INR' && toDollar.value == 'CAD' ){
        result2.value = value *  0.016
    }else if(fromDollar.value == 'INR' && toDollar.value == 'AUD' ){
        result2.value = value *  0.018
    }else if(fromDollar.value == 'INR' && toDollar.value == 'CNY' ){
        result2.value = value *  0.083
    }else if(fromDollar.value == 'INR' && toDollar.value == 'USD'){
        result2.value = value *  0.0121
    }else if(fromDollar.value == 'CAD' && toDollar.value == 'EUR' ){
        result2.value = value *  0.62
    }else if(fromDollar.value == 'CAD' && toDollar.value == 'GBP' ){
        result2.value = value *  0.54
    }else if(fromDollar.value == 'CAD' && toDollar.value == 'JPY' ){
        result2.value = value *  107.73
    }else if(fromDollar.value == 'CAD' && toDollar.value == 'INR' ){
         result2.value = value *  63.15
    }else if(fromDollar.value == 'CAD' && toDollar.value == 'AUD' ){
        result2.value = value *  1.11
    }else if(fromDollar.value == 'CAD' && toDollar.value == 'CNY' ){
         result2.value = value *  5.22
    }else if(fromDollar.value == 'CAD' && toDollar.value == 'USD'){
        result2.value = value *  0.73
    }else if(fromDollar.value == 'AUD' && toDollar.value == 'EUR' ){
        result2.value = value *  0.56
    }else if(fromDollar.value == 'AUD' && toDollar.value == 'GBP' ){
        result2.value = value *   0.49
    }else if(fromDollar.value == 'AUD' && toDollar.value == 'JPY' ){
        result2.value = value *   96.91
    }else if(fromDollar.value == 'AUD' && toDollar.value == 'INR' ){
        result2.value = value *   56.81
    }else if(fromDollar.value == 'AUD' && toDollar.value == 'CAD' ){
        result2.value = value *   0.90
    }else if(fromDollar.value == 'AUD' && toDollar.value == 'CNY' ){
        result2.value = value *   4.70
    }else if(fromDollar.value == 'AUD' && toDollar.value == 'USD'){
        result2.value = value *   0.66
    }else if(fromDollar.value == 'CNY' && toDollar.value == 'EUR' ){
        result2.value = value *   0.12
    }else if(fromDollar.value == 'CNY' && toDollar.value == 'GBP' ){
        result2.value = value *   0.10
    }else if(fromDollar.value == 'CNY' && toDollar.value == 'JPY' ){
        result2.value = value *   20.63
    }else if(fromDollar.value == 'CNY' && toDollar.value == 'INR' ){
        result2.value = value *   12.08
    }else if(fromDollar.value == 'CNY' && toDollar.value == 'CAD' ){
        result2.value = value *   0.19
    }else if(fromDollar.value == 'CNY' && toDollar.value == 'AUD' ){
        result2.value = value *  0.21
    }else if(fromDollar.value == 'CNY' && toDollar.value == 'USD'){
        result2.value = value *  0.143
    }else{
        result2.value = value
    }

}
note.innerHTML = "Note: This currency converter is built for study/demo purposes only. The exchange rates are hardcoded and may not reflect real-time market values."
