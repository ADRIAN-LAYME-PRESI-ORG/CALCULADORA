'use client';
import { useState } from 'react';
import { calculate, Operation, resetCalculatorState, clearHistory } from './calculator';

export default function Home() {
  const [display, setDisplay] = useState('0');
  const [prev, setPrev] = useState<number | null>(null);
  const [op, setOp] = useState<Operation | null>(null);
  const [history, setHistory] = useState<any[]>([]);

  const handleDigit = (digit: string) => {
    setDisplay((current) => (current === '0' ? digit : current + digit));
  };

  const handleOperation = (nextOp: Operation) => {
    setPrev(parseFloat(display));
    setOp(nextOp);
    setDisplay('0');
  };

  const handleEquals = () => {
    if (prev !== null && op) {
      const result = calculate(prev, parseFloat(display), op);
      setDisplay(String(result));
      setPrev(null);
      setOp(null);
    }
  };

  const handleToggleSign = () => {
    setDisplay((current) => (current.startsWith('-') ? current.slice(1) : '-' + current));
  };

  return (
    <main className="max-w-md mx-auto p-6 space-y-4 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl w-full">
      {/* LÍNEA CRÍTICA DE CONFLICTO: Título */}
      <header className="border-b border-zinc-800 pb-2">
        <h1 className="text-2xl font-bold text-amber-400">CALCULADORA ORGANIZACION OFICIAL</h1>
      </header>

      {/* Pantalla */}
      <div className="bg-zinc-900 text-white p-4 rounded text-right text-3xl font-mono">
        {display}
      </div>

      {/* Fila Científica: Potencias */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        <button className="btn btn-fn" onClick={() => handleOperation('^')}>xʸ</button>
        <button className="btn btn-fn" onClick={() => {
          const val = parseFloat(display);
          setDisplay(String(calculate(val, val, 'square')));
        }}>x²</button>
      </div>

      {/* Teclado: LÍNEA CRÍTICA DE CONFLICTO (ambos insertarán filas/botones aquí) */}
      {/* Fila Especial: Raíz cuadrada */}
      <div className="grid grid-cols-1 gap-2 mb-2">
        <button className="btn btn-fn" onClick={() => {
          const val = parseFloat(display);
          setDisplay(String(calculate(0, val, 'sqrt')));
        }}>√x</button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {/* Fila 1: Acciones básicas */}
        <button className="btn bg-rose-600 font-bold" onClick={() => {
          const fresh = resetCalculatorState();
          setDisplay(fresh.display);
          setPrev(fresh.prev);
          setOp(fresh.op);
        }}>AC</button>
        <button className="btn btn-fn" onClick={() => handleOperation('%')}>%</button>
        <button className="btn btn-fn" onClick={handleToggleSign}>+/-</button>
        <button className="btn" onClick={() => handleOperation('/')}>/</button>
        <button className="btn" onClick={() => handleOperation('*')}>*</button>
        <button className="btn" onClick={() => handleOperation('-')}>-</button>

        {/* Fila 2: 7, 8, 9, + */}
        <button className="btn" onClick={() => handleDigit('7')}>7</button>
        <button className="btn" onClick={() => handleDigit('8')}>8</button>
        <button className="btn" onClick={() => handleDigit('9')}>9</button>
        <button className="btn" onClick={() => handleOperation('+')}>+</button>

        {/* Fila 3: 4, 5, 6, = */}
        <button className="btn" onClick={() => handleDigit('4')}>4</button>
        <button className="btn" onClick={() => handleDigit('5')}>5</button>
        <button className="btn" onClick={() => handleDigit('6')}>6</button>
        <button className="btn bg-emerald-600 hover:bg-emerald-500" onClick={handleEquals}>=</button>

        {/* Fila 4: 1, 2, 3, 0 */}
        <button className="btn" onClick={() => handleDigit('1')}>1</button>
        <button className="btn" onClick={() => handleDigit('2')}>2</button>
        <button className="btn" onClick={() => handleDigit('3')}>3</button>
        <button className="btn" onClick={() => handleDigit('0')}>0</button>
      </div>

      <section className="border-t border-zinc-800 pt-3">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-semibold text-zinc-400">Registro de Historial</h3>
          <div className="flex gap-2">
            <button
              className="text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-2 py-1 rounded"
              onClick={() => navigator.clipboard.writeText(display)}
            >
              Copiar Pantalla
            </button>
            <button
              className="text-xs bg-red-900/50 hover:bg-red-800 text-red-200 px-2 py-1 rounded"
              onClick={() => setHistory(clearHistory())}
            >
              Limpiar
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
