
export default function ControlButtons({ active, isPaused, handleStart, handlePauseResume, handleReset }) {
    const StartButton = (
      <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg" onClick={handleStart}>
        Start
      </button>
    );
  
    const ActiveButtons = (
      <div className="flex space-x-4">
        <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-lg" onClick={handleReset}>
          Reset
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg" onClick={handlePauseResume}>
          {isPaused ? "Resume" : "Pause"}
        </button>
      </div>
    );
  
    return <div className="mt-12">{active ? ActiveButtons : StartButton}</div>;
  }
  