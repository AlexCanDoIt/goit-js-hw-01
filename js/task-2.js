const total = 100;
let ordered;
let difference;

ordered = prompt(
  'Введите количество Циклонных Нео Армстронг Реактивных Генераторных Пушек:',
);

difference = ordered - total;

ordered > total
  ? console.log(
      `На складе недостает ${difference} единиц Циклонных Нео Армстронг Реактивных Генераторных Пушек.`,
    )
  : console.log('Заказ оформлен, с вами свяжется менеджер.');
