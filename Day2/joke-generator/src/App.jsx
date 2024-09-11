import Joke from "./components/Joke";

function App() {
    return (
        <div className="App bg-teal-900 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-center text-3xl text-beige mb-4 font-bold"> Joke Generator </h1>
            <Joke />
        </div>
    );
}

export default App;
