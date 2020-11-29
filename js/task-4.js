const credits = 23580;
const pricePerDroid = 3000;
const droid = prompt('Введите количество дроидов:');
let totalPrice;

if (droid === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = pricePerDroid * droid;

  if (totalPrice > credits) {
    console.log(`Недостает ${totalPrice - credits} кредитов на счету!`);
  } else {
    console.log(
      `Вы купили ${droid} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`,
    );
  }
}
