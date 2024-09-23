const person={
name:'santhosh',
age:21,
greet:function(){
    console.log('hello'+this.name);
}
};
console.log(person.greet())
console.log(person.name);
console.log(person['age'])

delete person.age;
console.log(person);  
person['city']='Arni';
console.log(person);

console.log("name" in person);  
console.log("age" in person);
console.log(person.hasOwnProperty("city"));  

for(let key in person){
    console.log(key +':'+person[key])
}
console.log(Object.keys(person));  
console.log(Object.values(person));
console.log(Object.entries(person));

let copy = Object.assign({}, person);
console.log(copy);