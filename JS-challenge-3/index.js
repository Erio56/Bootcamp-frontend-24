let arr2 = [7,9,1,'a','a','f',9,4,2,'d','d']

console.log(arr2.filter((item, index) => arr2.indexOf(item) === index))


let arr = [1,2,4,7,4,2,1]

console.log(arr.reduce((acc, curr) => acc ^ curr, 0))


// console.log(1 ^ 2 ^ 4 ^ 7 ^ 4 ^ 2 ^ 1)
