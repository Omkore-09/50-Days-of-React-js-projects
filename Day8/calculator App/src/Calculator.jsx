import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="max-w-xs mx-auto mt-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-4 text-right text-xl border border-gray-200 rounded-lg"
          />
        </div>
        <div className="grid grid-cols-4 gap-2 p-4">
          <button onClick={() => handleClick('7')} className="bg-gray-200 p-4 rounded-lg">7</button>
          <button onClick={() => handleClick('8')} className="bg-gray-200 p-4 rounded-lg">8</button>
          <button onClick={() => handleClick('9')} className="bg-gray-200 p-4 rounded-lg">9</button>
          <button onClick={() => handleClick('/')} className="bg-yellow-400 p-4 rounded-lg">/</button>

          <button onClick={() => handleClick('4')} className="bg-gray-200 p-4 rounded-lg">4</button>
          <button onClick={() => handleClick('5')} className="bg-gray-200 p-4 rounded-lg">5</button>
          <button onClick={() => handleClick('6')} className="bg-gray-200 p-4 rounded-lg">6</button>
          <button onClick={() => handleClick('*')} className="bg-yellow-400 p-4 rounded-lg">*</button>

          <button onClick={() => handleClick('1')} className="bg-gray-200 p-4 rounded-lg">1</button>
          <button onClick={() => handleClick('2')} className="bg-gray-200 p-4 rounded-lg">2</button>
          <button onClick={() => handleClick('3')} className="bg-gray-200 p-4 rounded-lg">3</button>
          <button onClick={() => handleClick('-')} className="bg-yellow-400 p-4 rounded-lg">-</button>

          <button onClick={handleClear} className="bg-red-400 p-4 rounded-lg col-span-2">C</button>
          <button onClick={() => handleClick('0')} className="bg-gray-200 p-4 rounded-lg">0</button>
          <button onClick={() => handleClick('+')} className="bg-yellow-400 p-4 rounded-lg">+</button>
          <button onClick={handleCalculate} className="bg-green-400 p-4 rounded-lg col-span-4">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
