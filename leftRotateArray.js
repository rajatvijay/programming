function leftRotateArray(arr, times) {
    const rotatedArr = [];
    
    arr.forEach((element, index) => {
        
        if(index - times >= 0) {
            rotatedArr[index - times] = element;
        } else {
            rotatedArr[index - times + arr.length] = element;
        }

    });

    return rotatedArr;
}


console.log(
    leftRotateArray([1, 2, 3, 4, 5], 2)
);