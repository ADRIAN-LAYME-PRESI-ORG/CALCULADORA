export type Operation = '+' | '-' | '*' | '/' | '%' | '^' | 'square';

export function calculate(a: number, b: number, op: Operation): number {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    case '%': return (a * b) / 100;
    case '^': return Math.pow(a, b);
    case 'square': return Math.pow(b, 2);
    default: return b;
  }
}

export function removeLastChar(display: string): string {
  if (display.length <= 1 || (display.length === 2 && display.startsWith('-'))) {
    return '0';
  }
  return display.slice(0, -1);
}