import { useEffect, useState } from 'react';

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [word, size, bgColor]);

  function handleClick() {
    setWord(temp);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-12 pt-8">
      <h1 className="font-[Lilly] text-5xl">QR Code Generator</h1>
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-4">
          <input
            type="text"
            onChange={(e) => setTemp(e.target.value)}
            placeholder="Enter text to encode"
            className="h-9 w-64 text-lg p-2 border rounded"
          />
          <button
            className="h-10 w-24 text-lg text-white bg-green-700 shadow-md rounded hover:bg-green-800 active:shadow-none"
            onClick={handleClick}
          >
            Generate
          </button>
        </div>
        <div className="flex gap-6 pt-4">
          <div className="flex flex-col items-center">
            <h5>Background Color:</h5>
            <input
              type="color"
              onChange={(e) => setBgColor(e.target.value.substring(1))}
              className="mt-1"
            />
          </div>
          <div className="flex flex-col items-center">
            <h5>Dimension:</h5>
            <input
              type="range"
              min="200"
              max="600"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="mt-1"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10">
        <img src={qrCode} alt="QR Code" className="rounded" />
        <a href={qrCode} download="QRCode">
          <button
            type="button"
            className="h-10 w-24 text-lg text-white bg-blue-700 rounded hover:bg-blue-800 active:shadow-none"
          >
            Download
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
