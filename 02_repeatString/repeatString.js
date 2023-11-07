const repeatString = function(word, number) {
    if(number < 0) return "ERROR";
    
    let fullString = "";
    for(let i = 0; i < number; i++){
        fullString += word;
    }
    return fullString;
};

// Do not edit below this line
module.exports = repeatString;
