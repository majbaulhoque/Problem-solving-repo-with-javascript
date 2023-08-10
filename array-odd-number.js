function getSumOfArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    // Note er vitor jokhon kono operation korbo tokhon amra return ta ke baire likhbo.

    return sum;
}

// Finding Odd Numbers and total Sum

function getOddNumbersOfAnArray(numbers){
    let oddNumber = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            console.log(index, element);
            oddNumber.push(element);
        }
    }
    return oddNumber;
}

const myNumbers = [12, 44, 35, 756, 443, 4, 9];
const oddNumber = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumber);
const oddNumberSum = getSumOfArray(oddNumber);

console.log('odd number sum', oddNumberSum)