import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import './App.css';

function App() {
    const [info, setInfo] = useState({});
    const [input, setInput] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [options, setOptions] = useState([]);
    const [output, setOutput] = useState(0);

    useEffect(() => {
        Axios.get('https://api.exchangerate-api.com/v4/latest/USD')
            .then((res) => {
                setInfo(res.data.rates);
                setOptions(Object.keys(res.data.rates));
            });
    }, []);

    useEffect(() => {
        convert();
    }, [info, input, from, to]);

    function convert() {
        const rate = info[to];
        setOutput(input * rate);
    }

    function flip() {
        setFrom(to);
        setTo(from);
    }

    return (
        <div className="App">
            <div className="heading">
                <h1>Currency Converter</h1>
            </div>
            <div className="container flex justify-around items-center">
                <div className="left">
                    <h3>Amount</h3>
                    <input 
                        type="text" 
                        placeholder="Enter the amount" 
                        onChange={(e) => setInput(e.target.value)} 
                        className="border p-2 rounded"
                    />
                </div>
                <div className="middle w-1/4">
                    <h3>From</h3>
                    <Dropdown 
                        options={options} 
                        onChange={(e) => setFrom(e.value)} 
                        value={from} 
                        placeholder="From" 
                    />
                </div>
                <div className="switch p-2">
                    <HiSwitchHorizontal size="30px" onClick={flip} />
                </div>
                <div className="right w-1/4">
                    <h3>To</h3>
                    <Dropdown 
                        options={options} 
                        onChange={(e) => setTo(e.value)} 
                        value={to} 
                        placeholder="To" 
                    />
                </div>
            </div>
            <div className="result">
                <button onClick={convert} className="bg-green-200 border-2 border-green-800 text-green-800 font-bold p-2 rounded mt-4">
                    Convert
                </button>
                <h2>Converted Amount:</h2>
                <p className="text-green-800 text-lg">{`${input} ${from} = ${output.toFixed(2)} ${to}`}</p>
            </div>
        </div>
    );
}

export default App;
