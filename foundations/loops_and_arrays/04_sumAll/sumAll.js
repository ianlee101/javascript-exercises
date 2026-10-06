const sumAll = function(a, b) {
    if (!(validInput(a) && validInput(b))) return "ERROR";    

    let min;
    let max;    
    if (a > b) {
        min = b;
        max = a;
    } else {
        min = a;
        max = b;
    }

    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

function validInput(num) {
    return Number.isInteger(num) && num >= 0;
}

// Do not edit below this line
module.exports = sumAll;
