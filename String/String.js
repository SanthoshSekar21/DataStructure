let str="hi, string is group of character"
console.log(str);
console.log(str.length);
const str2='string is immutable in nature'
// const str3=str+' and '+str2;
const str3=str.concat(' and ',str2);

console.log(str3);
console.log(str.includes('hi'));
console.log(str.indexOf('hi'))
let str4='apple';
let str5='apple';
console.log(str4==str5);
let text = "The quick brown fox jumps over the lazy dog";
let regex = /fox/;
console.log(text.match(regex)); 

const str6='hello world';
const str7=str6.split(' ');
console.log(str7);
console.log(str6.slice(0,5));
console.log(str6.replace('world','santhosh'));

