const palindromes = function (s) {
    const cleanedS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedS === cleanedS.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
