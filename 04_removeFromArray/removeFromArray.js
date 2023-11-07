const removeFromArray = function(array, ...valueToDelete) {
    let arrayToReturn = [...array];

    valueToDelete.forEach((element) => {
        for(let i = 0; i < array.length; i++){
            if(arrayToReturn[i] === element){
                arrayToReturn.splice(i,1);
            }
        }
    });
    
    return arrayToReturn;
};

// Do not edit below this line
module.exports = removeFromArray;
