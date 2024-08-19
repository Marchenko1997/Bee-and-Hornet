// Импортирование стилей шрифтов и переменных цветов из внешних модулей.
import { fontStyles } from '../data/index.js';
import { colorVariables } from '../data/index.js';

// Деструктуризация объекта colorVariables для получения необходимых цветов.
const {
  primaryLightGreyColor,  // Основной светло-серый цвет
  primaryDarkGreyColor,   // Основной темно-серый цвет
  placeholderColor,       // Цвет для текста-заполнителя
  primaryBlackColor,      // Основной черный цвет
  primaryYellowColor,     // Основной желтый цвет
  scrollbarColor,         // Цвет для полосы прокрутки
} = colorVariables;

// Экспорт объекта стилей для компонента select.
export const selectStyles = {
  // Стили для основного элемента управления (control).
  control: (baseStyles, state) => {
    return {
      ...baseStyles,               // Сначала включаем базовые стили.
      height: 48,                  // Высота элемента управления.
      paddingLeft: 8,              // Внутренний отступ слева.
      paddingRight: 8,             // Внутренний отступ справа.
      borderRadius: 12,            // Скругленные углы.
      background: primaryLightGreyColor, // Фоновый цвет.
      borderStyle: state.IsFocused ? 'none' : 'none', // Убираем границу при фокусе и без него.
      boxShadow: state.IsFocused ? 'none' : 'none',   // Убираем тень при фокусе и без него.
      transition: 'all 300ms',     // Плавный переход всех изменений за 300 миллисекунд.
      cursor: 'pointer',           // Курсор в виде указателя при наведении.
      '@media (min-width: 1440px)': { height: 52 }, // Увеличение высоты для экранов шириной 1440px и более.
    };
  },
  // Стили для текста-заполнителя (placeholder).
  placeholder: (baseStyles) => ({
    ...baseStyles,               // Включаем базовые стили.
    ...fontStyles,               // Применяем стили шрифта.
    color: placeholderColor,     // Устанавливаем цвет заполнителя.
  }),
  // Убираем разделитель между индикатором и полем ввода.
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: 'none',             // Скрываем элемент.
  }),
  // Стили для индикатора (стрелочка, которая открывает выпадающий список).
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    stroke: primaryBlackColor,   // Устанавливаем цвет стрелки.
    transform: 'rotate(-90deg)', // Поворачиваем стрелку на 90 градусов.
  }),
  // Стили для выпадающего меню.
  menu: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: primaryLightGreyColor, // Фоновый цвет меню.
    borderRadius: 0,            // Убираем скругленные углы.
    borderStyle: 'none',        // Убираем границу.
    boxShadow: 'none',          // Убираем тень.
    marginTop: 4,               // Внешний отступ сверху.
    height: 'fit-content',      // Высота подстраивается под содержимое.
    padding: 0,                 // Убираем внутренние отступы.
  }),
  // Стили для списка опций внутри меню.
  menuList: (baseStyles) => ({
    ...baseStyles,
    maxHeight: 362,             // Максимальная высота списка.
    '&::-webkit-scrollbar': {   // Стили для полосы прокрутки.
      width: 4,                 // Ширина полосы прокрутки.
    },
    '&::-webkit-scrollbar-track': {  // Стили для дорожки полосы прокрутки.
      backgroundColor: scrollbarColor, // Фон дорожки полосы прокрутки.
    },
    '&::-webkit-scrollbar-thumb': {  // Стили для "бегунка" полосы прокрутки.
      backgroundColor: primaryYellowColor, // Цвет бегунка.
      borderRadius: 6,            // Скругленные углы бегунка.
    },
  }),
  // Стили для поля ввода текста.
  input: (baseStyles) => ({
    ...baseStyles,
    ...fontStyles,
    padding: 0,                 // Убираем внутренние отступы.
  }),
  // Стили для каждой опции в выпадающем меню.
  option: (baseStyles, state) => ({
    ...baseStyles,
    ...fontStyles,
    color: state.isSelected ? primaryYellowColor : primaryBlackColor, // Цвет текста в зависимости от состояния (выбрано или нет).
    paddingLeft: 16,            // Внутренний отступ слева.
    paddingTop: 8,              // Внутренний отступ сверху.
    paddingBottom: 8,           // Внутренний отступ снизу.
    backgroundColor:            // Фон в зависимости от состояния (наведено, выбрано и т.д.).
      state.isFocused && !state.isSelected
        ? primaryDarkGreyColor
        : state.isFocused && state.isSelected
          ? primaryLightGreyColor
          : primaryLightGreyColor,
    display: 'flex',            // Flexbox для выравнивания содержимого.
    alignItems: 'center',       // Выравнивание по центру по вертикали.
    cursor: 'pointer',          // Курсор в виде указателя при наведении.
    '&:active': { backgroundColor: primaryDarkGreyColor }, // Цвет фона при нажатии.
  }),
  // Стили для отображения выбранного значения.
  singleValue: (baseStyles) => ({
    ...baseStyles,
    ...fontStyles,
    color: primaryYellowColor,  // Цвет текста.
  }),
  // Стили для сообщения о загрузке данных.
  loadingMessage: (baseStyles) => ({
    ...baseStyles,
    ...fontStyles,
  }),
  // Стили для сообщения о том, что нет доступных опций.
  noOptionsMessage: (baseStyles) => ({
    ...baseStyles,
    ...fontStyles,
  }),
};
