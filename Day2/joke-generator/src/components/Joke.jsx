import React from "react";
import Button from "./Button";

const Joke = () => {
    const [joke, setJoke] = React.useState("");

    const fetchApi = () => {
        fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };

    return (
        <div className="joke flex flex-col items-center justify-center text-beige">
            <Button callApi={fetchApi} />
            <p className="mt-4 text-lg">{joke}</p>
        </div>
    );
}

export default Joke;
