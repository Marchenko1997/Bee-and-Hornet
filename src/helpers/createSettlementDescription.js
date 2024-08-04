export function createSettlementDescription(
    deliveryType,
    settlementName,
    settlementType,
    settlementArea,
    settlementRegion
  ) {
    const type = settlementType.includes("селище міського типу")
      ? "смт."
      : `${settlementType[0]}`;
  
    if (deliveryType === "Доставка до відділення") {
      const settlement = `${settlementName},`;
      const area = `(${settlementArea.split(" ")[0]} обл, ${
        settlementRegion.includes("р-н")
          ? `${settlementRegion}`
          : `${settlementRegion} р-н`
      })`;
      return `${type} ${settlement} ${area}`;
    } else {
      const settlement = settlementName.includes("(")
        ? `${settlementName.replace(" (", ", (")}`
        : `${settlementName},`;
      const area = settlementName.includes("(") ? "" : `(${settlementArea} обл.)`;
      return `${type} ${settlement} ${area}`;
    }
  }
  