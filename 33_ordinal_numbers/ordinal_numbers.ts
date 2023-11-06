let ordinals: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

ordinals.forEach((num) => {
    if(num/1 == 1){
        console.log(num, "st")
    }
    else if(num/2 == 1){
        console.log(num, "nd")
    }
    else if(num/3 == 1){
        console.log(num, "rd")
    }
    else{
        console.log(num, "th")
    }
});