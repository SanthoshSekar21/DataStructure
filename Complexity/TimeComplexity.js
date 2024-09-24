//-------------Time Complexity-------------------
// rate at which the time taken increases with report to the Input Size
function sumArray(arr) {
    let sum = 0;  
    for (let i = 0; i < arr.length; i++) {  // O(n)
        sum += arr[i];   
    }
    return sum;   
}
console.log(sumArray([1,2,3,4,5,6,7,8]));

function printPairs(arr) {
    for (let i = 0; i < arr.length; i++) {      // O(n)
        for (let j = 0; j < arr.length; j++) {  // O(n)
            console.log(arr[i], arr[j]);        // O(1)
        }
    }
}
