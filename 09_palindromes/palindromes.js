const removePunctuation = (x) => {
    return x.replace(/[^a-zA-Z0-9]/g, '');
  };
  
  const reverse = function (x) {
    y = removePunctuation(x).toLowerCase().split('');
    z = y.reverse();
    return z.join('');
  }
  
  const palindromes = function (x) {
    const cleanInput = removePunctuation(x).toLowerCase();
    const reversed = reverse(cleanInput);
    return cleanInput === reversed;
  };

// Do not edit below this line
module.exports = palindromes;
