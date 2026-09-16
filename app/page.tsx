'use client';
import { useState } from 'react';
import { calculate, Operation } from './calculator';

export default function Home() {
  const [display, setDisplay] = useState('0');
  const [prev, setPrev] = useState<number | null>(null);
  const [op, setOp] = useState<Operation | null>(null);

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

  return (
    <main className="max-w-md mx-auto p-6 space-y-4 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl w-full">
      {/* LÍNEA CRÍTICA DE CONFLICTO: Título */}
      <header className="border-b border-zinc-800 pb-2">
        <h1 className="text-2xl font-bold text-amber-400">CALCULADORA VERSION adrianlaymepresi</h1>
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
      <div className="grid grid-cols-4 gap-2">
        {/* Fila 1: Acciones básicas */}
        <button className="btn bg-red-500" onClick={() => setDisplay('0')}>C</button>
        <button className="btn btn-fn" onClick={() => handleOperation('%')}>%</button>
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
    </main>
  );
}
