const assert= require('assert')

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 
// 12 is written as XII, which is simply X + II. 
// The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is written as IV.
// Because the one is before the five we subtract it making four. 
// The same principle applies to the number nine, which is written as IX.
// There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

//=====================================
// Write your function named "solution" here:

function solution(roman) {
    const values = {

    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    };
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        const currentSymbol = values[roman[i]];
        const next = values[roman[i + 1]];
        if (next && currentSymbol < next) {
            result -= currentSymbol;
        } else {
            result += currentSymbol;
        }
    }

    return result

}


//=====================================
try{

    assert(solution("I")=== 1);
    assert(solution("II")=== 2);
    assert(solution("IV")=== 4);
    assert(solution("V")=== 5);
    assert(solution("IX")=== 9);
    assert(solution("X")=== 10);
    assert(solution("L")=== 50);
    assert(solution("C")=== 100);
    assert(solution("D")=== 500);
    assert(solution("M")=== 1000);
    assert(solution("XX")=== 20);
    assert(solution("XL")=== 40);
    assert(solution("XC")=== 90);
    assert(solution("CD")=== 400);
    assert(solution("CM")=== 900);
    assert(solution("MCMXCIV")=== 1994);
    assert(solution("MCMLXXIV")=== 1974);
    assert(solution("MMXXI")=== 2021);
    assert(solution("MMXXIII")=== 2023);
    assert(solution("MMMCMXCIX")=== 3999);

console.log("PASSED")
}catch{
console.log("FAILED")
}