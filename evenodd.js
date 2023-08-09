function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const oddNumber = isEven(232);
console.log(oddNumber)
const evenNumber = isEven(457);
console.log(evenNumber);