function alwaysHungry(arr) {
    var isFood = false;
    for(i=0; i< arr.length; i++){
        if (arr[i] == "food"){
            console.log("Yummy ")
            isFood = true;
        }
        
    }
    if(isFood == false){
        console.log("I'm hungry")
    }
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"



//problem 2 

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i=0; i<arr.length; i++){
        if(arr[i] > cutoff)
            filteredArr.push(arr[i])
    }


    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

//problem 3 

function betterThanAverage(arr) {
    var sum = 0;
    for(i=0; i< arr.length; i++){
        sum += arr[i]
    }
    avg = sum/arr.length
    var count = 0
    for(i=0; i< arr.length; i++){
        if(arr[i] > avg)
            count++ 
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

//problem 4

function reverse(arr) {
    // your code here
    for(i=0; i<Math.floor(arr.length/2); i++){
        temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
        // console.log(arr)
    }
    
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


//problem 5 
function fibonacciArray(n) {
    var next = 0;
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    
    console.log(fibArr)
    for(i=0; i < n; i++){
        if((i != 0) && (i!= 1)){
            next = fibArr[i-1] + fibArr[i-2]
            
            fibArr.push(next)
        }  
    }
    
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, ,1 2, 3, 5, 8, 13, 21, 34]



