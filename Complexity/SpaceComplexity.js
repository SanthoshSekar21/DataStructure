function add(a, b) {
    return a + b;  // O(1) space
}

function copyArray(arr) {
    let newArr = [];  // O(n)
    for (let i = 0; i < arr.length; i++) {  
        newArr[i] = arr[i];  // O(1)
    }
    return newArr;
}
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
//O(n)