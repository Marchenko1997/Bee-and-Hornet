import { createSettlementDescription } from './createSettlementDescription';

// Функция для создания опций выбора населенного пункта
export function createOptionsForLocationSelect(arr, deliveryType) {
  // Если массив не пустой, преобразовать его
  const locationOptions =
    arr.length > 0
      ? arr.map(
          ({
            Description,
            SettlementTypeDescription,
            AreaDescription,
            RegionsDescription,
            Ref,
          }) => {
            // Для каждого элемента массива создаем объект с полями value и label
            return {
              value: {
                // Создаем описание города с помощью вспомогательной функции
                city: createSettlementDescription(
                  deliveryType,
                  Description,
                  SettlementTypeDescription,
                  AreaDescription,
                  RegionsDescription
                ),
                cityId: Ref, // Уникальный идентификатор населенного пункта
              },
              // Используем описание города для отображения в списке
              label: createSettlementDescription(
                deliveryType,
                Description,
                SettlementTypeDescription,
                AreaDescription,
                RegionsDescription
              ),
            };
          }
        )
      : [
          {
            value: '',
            label: 'За вашим запитом нічого не знайдено', // Сообщение, если ничего не найдено
          },
        ];
  return locationOptions; // Возвращаем массив опций
}

// Функция для создания опций выбора адреса
export function createOptionsForAddressSelect(arr, message) {
  // Если массив не пустой, преобразовать его
  const addressOptions =
    arr.length > 0
      ? arr.map(({ Description }) => {
          // Для каждого элемента массива создаем объект с полями value и label
          return {
            value: Description, // Описание адреса для использования в значении
            label: Description, // Описание адреса для отображения
          };
        })
      : [
          {
            value: '',
            label: message, // Сообщение, если ничего не найдено
          },
        ];
  return addressOptions; // Возвращаем массив опций
}
