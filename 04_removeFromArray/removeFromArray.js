const removeFromArray = function(array, ...arg) {
    let len = array.length;
    let newArr = new Array();
    for(let i = 0; i < len; i++) {
        if(!arg.includes(array[i])) {
            newArr.push(array[i]);
        }
    }

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
