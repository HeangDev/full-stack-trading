export const formatToSIPrefix = (num: number): string => {
    const abs: number = Math.abs(num);

    const format = (value: number, unit: string) =>
        parseFloat(value.toFixed(value < 10 ? 2 : value < 100 ? 1 : 0)) + unit;

    if (abs >= 1e12) return format(num / 1e12, "T");
    if (abs >= 1e9)  return format(num / 1e9, "B");
    if (abs >= 1e6)  return format(num / 1e6, "M");
    if (abs >= 1e3)  return format(num / 1e3, "K");

    return num.toString();
}