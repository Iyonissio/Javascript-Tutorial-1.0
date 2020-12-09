var array = [1,2,3,4,5,6];

console.log(array.length);

array.push(7);
array.push('Meu Array');
console.log(array);

array.pop();

console.log(array);

array.unshift(0);
console.log(array);

array.shift(0);
console.log(array);

console.log(array[array.length - 1]);