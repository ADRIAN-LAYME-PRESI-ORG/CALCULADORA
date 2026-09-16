export type Operation = '+' | '-' | '*' | '/';

export function calculate(a: number, b: number, op: Operation): number {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b; // <- Intencional: no valida división entre 0
    default: return b;
  }
}
