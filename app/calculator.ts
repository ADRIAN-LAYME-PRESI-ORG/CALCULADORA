export type Operation = '+' | '-' | '*' | '/' | 'negate';

export function negateValue(val: number): number {
  return -val;
}

export function calculate(a: number, b: number, op: Operation): number {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    case 'negate': return -b;
    default: return b;
  }
}
