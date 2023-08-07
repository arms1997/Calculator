export const determineNumber = (
  currentValue: string,
  value: string
): string => {
  if (currentValue === "0") {
    return value;
  }

  return `${currentValue}${value}`;
};
