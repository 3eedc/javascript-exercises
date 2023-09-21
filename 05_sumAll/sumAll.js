const sumAll = function(low, high) {
    let sum = 0;
    if((low || high) < 0){
        return "ERROR";
    }
    if(low>high)
    {
        let thirdvalue;
        thirdvalue = high;
        high = low;
        low = thirdvalue;
    }
    if(typeof high !== 'number'){
        return "ERROR"
    }
    for(let i = low; i<=high; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
