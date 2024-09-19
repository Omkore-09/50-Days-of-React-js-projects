
export default function Timer({ time }) {
    return (
      <div className="flex justify-center items-center my-12 text-3xl">
        <span className="text-white">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="text-white">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
        </span>
        <span className="text-red-500">
          {("0" + ((time / 10) % 100)).slice(-2)}
        </span>
      </div>
    );
  }
  