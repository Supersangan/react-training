interface IForms {
  forms: [one: string, two: string, five: string];
}

export function getNumeralForm(one:string, two:string, five:string, val: number) {
  let n = Math.abs(val);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
}