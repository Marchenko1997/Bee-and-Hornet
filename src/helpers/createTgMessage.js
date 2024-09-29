export function createTgMessage(orderDetails) {
  const {
    firstName,
    lastName,
    phone,
    deliveryMethod,
    city,
    branch,
    comment,
    products,
    totalPrice,
  } = orderDetails; 

  const addressType =
    deliveryMethod === 'Доставка до відділення'
      ? 'Відділення НП'
      : 'Адреса доставки';

  const tgMessage = `
    Нова заявка:
    <b>1) Ім'я:</b> ${firstName};
    <b>2) Прізвище:</b> ${lastName};
    <b>3) Номер телефону:</b> ${phone};
    <b>4) Тип доставки:</b> ${deliveryMethod};
    <b>5) Населений пункт:</b> ${city};
    <b>6) ${addressType}:</b> ${branch};
    <b>7) Замовлення:</b> ${products
      .map((product) => `${product.title} (Кількість: ${product.quantity})`)
      .join(', ')};
    <b>8) Загальна вартість замовлення:</b> ${totalPrice} грн;
    ${comment ? `<b>9) Коментар:</b> ${comment}` : ``}`;

  return tgMessage;
}
