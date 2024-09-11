import React from "react";

const Button = (props) => {
    return (
        <button 
            onClick={props.callApi} 
            className="inline-block px-5 py-2.5 bg-green-700 text-white font-medium text-base leading-tight rounded-lg shadow-md transition duration-500 ease-in-out transform hover:bg-green-400 active:bg-green-900"
        >
            Click to generate a joke.
        </button>
    );
}

export default Button;
