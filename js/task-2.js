const total = 100;
const orderedRef = document.querySelector('input[name="ordered"]');
const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', () => {
  const ordered = Number(orderedRef.value);
  const difference = ordered - total;
  const message =
    ordered > total
      ? `На складе недостает ${difference} единиц Циклонных Нео Армстронг Реактивных Генераторных Пушек.`
      : 'Заказ оформлен, с вами свяжется менеджер.';
  alert(message);
});
