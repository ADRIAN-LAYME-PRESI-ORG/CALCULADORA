export type Operation = '+' | '-' | '*' | '/' | '%' | '^' | 'square';

export interface HistoryItem {
  id: string;
  expression: string;
  result: number;
  timestamp: string;
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
    default: return b;
  }
}

export function removeLastChar(display: string): string {
  if (display.length <= 1 || (display.length === 2 && display.startsWith('-'))) {
    return '0';
  }
  return display.slice(0, -1);
}

export function addHistoryEntry(
  history: HistoryItem[],
  a: number,
  b: number,
  op: Operation,
  result: number
): HistoryItem[] {
  const item: HistoryItem = {
    id: Date.now().toString(),
    expression: `${a} ${op} ${b}`,
    result,
    timestamp: new Date().toLocaleTimeString(),
  };
  return [item, ...history.slice(0, 9)]; // guarda los últimos 10
}