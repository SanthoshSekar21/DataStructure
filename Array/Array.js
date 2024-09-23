const ar=new Array();
ar[0]=1;
ar[1]=2;
ar[2]=3;
ar[3]=4;
ar[4]=5;;
console.log(ar)
console.log(ar.length);
//using push method to insert the element int the array
ar.push(6);
ar.push(7);
ar.push(8);
ar.push(9);
console.log(ar);
//array inside  a array called multidimensional array
ar.push([10,11,12]);
console.log(ar);
//to make it insingle array using the flat method
console.log(ar.flat());
//insert the element from the begining of the array we use unshift method
 ar.unshift(0);
 console.log(ar);
 ar.unshift(1,2,3);
 console.log(ar);
 //remove the element from the array
  ar.pop();
  console.log(ar);
  //remove the element from the begining we use the shift method
 console.log (ar.shift());
 console.log(ar)
ar.shift();
ar.shift();
console.log(ar);
//iterate using for loop
for(let i=0;i<ar.length;i++){
    console.log(ar[i]);
}
//iterate using foreach loop
ar.forEach(element=>console.log(element));
 //to extract the element from array using slice 
 const ar1=ar.slice(0,5)
 console.log(ar1)
 //to add,remove or overite using splice method
const newar=ar1.splice(1,0,5);
console.log(ar1);
console.log(ar1.splice(0,1));
const newar1=ar1.splice(1,1,1);
console.log(newar1)
// map() creates a new array with the results of calling a provided function on every element
const ar2=ar1.map(x=>x*2);
console.log(ar2)
const ar3=ar1.filter(x=>x>2);
console.log(ar3)

const sum = ar2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); 
const arr = [10, 20, 30, 40];
const found = arr.find(x => x > 10); // Output: 30
console.log(found)
const result = arr.some(x => x > 35); // Output: true
console.log(result);
const result1=arr.every(x=>x>10);
console.log(result1);

console.log(ar.reverse());