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

export const useNovaPoshta = (deliveryType, cityId) => {
 
  const [divisions, setDivisions] = useState([]);

  const [valueForSelect, setValueForSelect] = useState({
    deliveryType: [],
    locationSelect: [],
    addressSelect: [],
  });

  async function getSettlementsList(inputValue) {
    try {
      const result = await fetchNPSettlementsByQuery(inputValue, deliveryType);

      return createOptionsForLocationSelect(result, deliveryType);
    } catch (error) {
      console.error(error);
    }
  }

  async function getDivisionsList(inputValue) {
    try {
      const result = await fetchNPDivisionsByQuery(inputValue, cityId);

      const options = createOptionsForAddressSelect(
        result,
        'За вашим запитом нічого не знайдено'
      );
      return options;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (!cityId) return;

    async function getNPDivisionsBySettlementId(id) {
      try {
        const result = await fetchNPDivisionsBySettlementId(id);

        const options = createOptionsForAddressSelect(
          result,
          'Наразі доставка до обраного населеного пункту не здійнюється'
        );

        setDivisions(options);
      } catch (error) {
        console.error(error);
      }
    }

    getNPDivisionsBySettlementId(cityId);
  }, [cityId]);

  return {
    divisions,
    valueForSelect,
    setValueForSelect,
    getSettlementsList,
    getDivisionsList,
  };
};
