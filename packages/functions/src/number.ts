/**
 * Return a value in percentage
 * @param {number} value
 * @param {number} total
 * @param {?number} digits number of digits to display - 1 by default
 */
export const toPercentage = (value: number, total:number, digits = 1) =>
  ((value / total) * 100).toFixed(digits)+'%';