const myArr =[]
//%DebugPrint(myArr)

// continuous, holey

//SMI(small intger)
//Packed element
//Double(float, string, function)

const arrTwo = [1,2,3,4,5]
// packed_smi_elements

arrTwo.push(6.0)
// packed_double_elements

arrTwo.push('7')
//packed elements

arrTwo[10]= 11
// holey_elements

console.log(arrTwo)
console.log(arrTwo.length);
;
console.log(arrTwo[9]);


//bound check
//hasOwnProperty(arrTwo,9)
//hasOwnProperty(arrTwo.prototype,10)
//hasOwnProperty(Object.prototype,10)

// holes are very expensive in js

const arr3 =[1,2,3,4,5]
console.log(arr3[2]);
 
//SMI> DOUBLE> PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrfour = new Array(3)
///just 3 holes. HOLEY_SMI_ELEMENTS
arrfour[0] = '1'//HOLEY ELEMENTS
arrfour[1] = '2'//HOLEY ELEMENTS
arrfour[2] = '3'//HOLEY ELEMENTS

const arrFive = []
arrFive.push('1') // PACKES_ELEMENTS
arrFive.push('2') // PACKES_ELEMENTS
arrFive.push('3') // PACKES_ELEMENTS

const arrSix = [1,2,3,4,5]

arrSix.push(NaN) // packed double

// for, for-of, forEach