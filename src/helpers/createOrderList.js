// Импортируем функцию для вычисления общей стоимости продукта
import { createProductTotalPrice } from './createOrderCartElements';

// Функция для создания списка заказа
export function createOrderList(productList) {
  // Используем метод map для обработки каждого продукта в списке productList
  const order = productList.map(({ title, weight, quantity, price }) => {
    // Для каждого продукта создаем строку с его данными, включая общую стоимость
    return `
    &#128029; Назва товару: ${title};
      Об'єм: ${weight};
      Кількість: ${quantity};
      Вартість: ${createProductTotalPrice(quantity, price)} грн.`;
  });

  // Возвращаем массив строк с информацией о каждом товаре в заказе
  return order;
}
