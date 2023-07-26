const removeFromArray = function (array, ...args) {
    // args.forEach((arg) => {
    //     const index = array1.indexOf(arg);
    //     if(index > -1)
    //     array1.splice(index, 1);
    // })
    const newArray = []
    array.forEach((item) => {
     if (!args.includes(item)) {
        newArray.push(item);
     }   
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
