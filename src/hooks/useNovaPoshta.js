import { useEffect, useState } from 'react';
import {
    createOptionsForAddressSelect,
    createOptionsForLocationSelect,
  } from '../helpers/index.js';

  import {
    fetchNPDivisionsByQuery,
    fetchNPDivisionsBySettlementId,
    fetchNPSettlementsByQuery,
  } from '../services/novaPoshtaApi.js';

  // Экспорт пользовательского хука useNovaPoshta
export const useNovaPoshta = (deliveryType, cityId) => {
    // Состояние для хранения списка отделений
    const [divisions, setDivisions] = useState([]);
  
    // Состояние для хранения значений, которые будут использоваться в селекторах
    const [valueForSelect, setValueForSelect] = useState({
      deliveryType: [],
      locationSelect: [],
      addressSelect: [],
    });
  
    // Асинхронная функция для получения списка населенных пунктов по запросу
    async function getSettlementsList(inputValue) {
      try {
        // Запрос к API для получения населенных пунктов
        const result = await fetchNPSettlementsByQuery(inputValue, deliveryType);
  
        // Создание опций для селектора населенных пунктов
        return createOptionsForLocationSelect(result, deliveryType);
      } catch (error) {
        // Обработка ошибки (пока она просто перехватывается)
        console.error(error);
      }
    }
  
    // Асинхронная функция для получения списка отделений по запросу
    async function getDivisionsList(inputValue) {
      try {
        // Запрос к API для получения отделений по запросу
        const result = await fetchNPDivisionsByQuery(inputValue, cityId);
  
        // Создание опций для селектора адресов
        const options = createOptionsForAddressSelect(
          result,
          'За вашим запитом нічого не знайдено' // Сообщение об ошибке, если отделения не найдены
        );
        return options;
      } catch (error) {
        // Обработка ошибки (пока она просто перехватывается)
        console.error(error);
      }
    }
  
    // Хук useEffect для выполнения побочных эффектов при изменении cityId
    useEffect(() => {
      // Если cityId не задан, выходим из эффекта
      if (!cityId) return;
  
      // Асинхронная функция для получения отделений по идентификатору населенного пункта
      async function getNPDivisionsBySettlementId(id) {
        try {
          // Запрос к API для получения отделений по идентификатору
          const result = await fetchNPDivisionsBySettlementId(id);
  
          // Создание опций для селектора адресов
          const options = createOptionsForAddressSelect(
            result,
            'Наразі доставка до обраного населеного пункту не здійнюється' // Сообщение об ошибке, если доставка не осуществляется
          );
  
          // Установка полученных опций в состояние
          setDivisions(options);
        } catch (error) {
          // Обработка ошибки (пока она просто перехватывается)
          console.error(error);
        }
      }
  
      // Вызов функции для получения отделений при изменении cityId
      getNPDivisionsBySettlementId(cityId);
    }, [cityId]); // Хук будет срабатывать каждый раз, когда изменяется cityId
  
    // Возвращаемые значения и функции из пользовательского хука
    return {
      divisions,         // Список отделений
      valueForSelect,    // Значения для селекторов
      setValueForSelect, // Функция для обновления значений селекторов
      getSettlementsList, // Функция для получения населенных пунктов
      getDivisionsList,   // Функция для получения отделений
    };
  };