const removeFromArray = function(arr, ...numsToRemove) {
    for (let i = 0; i < arr.length; i++) {
        let num = arr.at(i);
        if (numsToRemove.includes(num)) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
