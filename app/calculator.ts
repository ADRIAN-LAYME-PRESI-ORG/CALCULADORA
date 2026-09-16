export type Operation = '+' | '-' | '*' | '/' | 'negate' | 'sqrt' | '%' | '^' | 'square';

export function memoryAdd(mem: number, current: number): number {
  return mem + current;
}
export function memorySubtract(mem: number, current: number): number {
  return mem - current;
}

export function negateValue(val: number): number {
  return -val;
}

export interface CalcState {
  display: string;
  prev: number | null;
  op: Operation | null;
}

export function resetCalculatorState(): CalcState {
  return { display: '0', prev: null, op: null };
}

export function clearHistory(): [] {
  return [];
}

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
    case 'negate': return -b;
    case 'sqrt': return Math.sqrt(b);
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