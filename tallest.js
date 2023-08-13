function maxInArray(number){
    // console.log('array inside the array', number)
    let largest = number[0];
    for(let i = 0; i < number.length; i++){
        const index = i;
        const element = number[index];
        console.log(element);
        if(element > largest){
            largest = element;
        }
        
    }
    return largest;
}

const heights = [167, 188, 179, 165, 137];
const tallest = maxInArray(heights);
console.log('Tallest person is:', tallest);