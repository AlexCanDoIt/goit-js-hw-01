const country = prompt(
  'Введите страну для доставки Циклонной Нео Армстронг Реактивной Генераторной Пушки:',
);
let price;

if (country === null) {
  alert('Отменено пользователем!');
} else {
  switch (country.toLowerCase()) {
    case 'китай':
      price = 100;
      break;
    case 'чили':
      price = 250;
      break;
    case 'австралия':
      price = 170;
      break;
    case 'индия':
      price = 80;
      break;
    case 'ямайка':
      price = 120;
      break;
    default:
      alert('В вашей стране доставка не доступна');
  }
}

if (price !== undefined) {
  alert(
    `Доставка в ${
      country[0].toUpperCase() + country.slice(1).toLowerCase()
    } будет стоить ${price} кредитов`,
  );
}
