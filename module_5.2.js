let x;
if (typeof x === 'number'){
  console.log('Число');
} else if (typeof x === 'boolean'){
  console.log('Логический тип');
} else if (typeof x === 'string'){
  console.log('Строка');
} else {
  console.log('Тип х не определен');
}