function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        console.log('Your Year is leap year', year);
    }
    else{
        console.log('Your Year is not leap year', year);
    }
}

isLeapYear(1933);
isLeapYear(2020);