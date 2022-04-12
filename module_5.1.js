let value = +prompt('Введие значение');
if (typeof(value) === 'number' && !isNaN(value)) {
value % 2 === 0 ? alert('Четное') : alert('Нечетное');
}
else {
alert('Упс, кажется, вы ошиблись');
}