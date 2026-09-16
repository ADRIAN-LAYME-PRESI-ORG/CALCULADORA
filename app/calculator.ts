export type Operation = '+' | '-' | '*' | '/' | 'negate' | 'sqrt' | '%' | '^' | 'square';

export function negateValue(val: number): number {
  return -val;
}

export function calculate(a: number, b: number, op: Operation): number {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    case '%': return (a * b) / 100;
    case '^': return Math.pow(a, b);
    case 'square': return Math.pow(b, 2);
    case 'negate': return -b;
    case 'sqrt': return Math.sqrt(b);
    default: return b;
  }
}