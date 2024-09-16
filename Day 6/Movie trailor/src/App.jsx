import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';

function App() {


    const [video, setVideo] = useState("inception");
    const [videoURL, setVideoURL] = useState("https://youtu.be/sa9l-dTv9Gk");

    
    function handleSearch() {
        movieTrailer(video).then((res) => {
            setVideoURL(res);
        });
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen w-full text-lg text-center">
            <div className="mb-6">
                <label className="block mb-2">
                    Search for any movies/shows:
                </label>
                <input
                    type="text"
                    onChange={(e) => { setVideo(e.target.value); }}
                    className="p-2 border border-gray-400 rounded-lg w-full max-w-md"
                    placeholder="Type a movie/show"
                />
                <button
                    onClick={handleSearch}
                    className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500"
                >
                    Search
                </button>
            </div>

            
            <ReactPlayer url={videoURL} controls={true} />
        </div>
    );
}

export default App;
