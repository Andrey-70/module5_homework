let map = new Map();
map.set('key', 'number');
map.set('2', 'data');
map.set(3, 'nomer');

for (let pair of map.entries()) {  
console.log(`Ключ = ${pair[0]}, значение = ${pair[1]}`);
};