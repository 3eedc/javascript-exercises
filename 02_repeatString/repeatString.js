const repeatString = function(string, num) {
    if (num<0){
        return "ERROR";
    }
    let newstring = [];
    for(let i = 0; i<num; i++){
        newstring.push(string);
    }
    return newstring.join("");
};

// Do not edit below this line
module.exports = repeatString;
