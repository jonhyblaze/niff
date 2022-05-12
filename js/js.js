/*const myArray = new Array(1, 2, 4, 8, 16, 32) 

const res = myArray.forEach(e => console.log(e * 16))

console.log(res) 

const myArray = [1, 3, 5, 7, 9] 
console.log(myArray) 

const newArray = myArray.map( (el) => {
    return el * 3;
})

console.log(newArray) 
console.log(myArray) */

const fn = (a,b) => {
    if(typeof a !=='number' || typeof b !=='number') {
return 'One of arguments is not a number'
}

if (a <= 0 || b<=0) {
return 'numbers are not positive'	
}

return a + b
}

console.log(fn(4, 2))