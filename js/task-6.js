let total = 0;
let input;

while (input !== null) {
  input = prompt('Введите число:');
  Number(input);

  if (Number(input) === NaN) {
    alert('Было введено не число, попробуйте еще раз.');
  } else {
    total += Number(input);
  }
}

alert(total);