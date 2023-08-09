function marks(Eng, Bangla, Math){
    var sum = Eng + Bangla + Math;
    var avg = sum / 3;
    return avg;
}

var totalMarks = marks(55, 85, 55);
console.log(totalMarks);