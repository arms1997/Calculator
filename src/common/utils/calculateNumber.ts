export const calculateNumber = (values: string[]): string =>
  // sanitize input prior to passing to eval
  eval(values.join("").replace(/[^-()\d/*+.]/g, "")).toString();
