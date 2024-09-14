import React from 'react';

class App extends React.Component {
  state = {
    topText: '',
    bottomText: '',
    allMemeImgs: [],
    randomImg: ''
  };

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(content =>
        this.setState({
          allMemeImgs: content.data.memes
        })
      );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { allMemeImgs } = this.state;
    const rand = allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)].url;
    this.setState({
      randomImg: rand
    });
  };

  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <form className="flex flex-col items-center space-y-4" onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter Top Text"
            type="text"
            className="border-2 border-gray-300 rounded p-2"
            value={this.state.topText}
            name="topText"
            onChange={this.handleChange}
          />
          <input
            placeholder="Enter Bottom Text"
            type="text"
            className="border-2 border-gray-300 rounded p-2"
            value={this.state.bottomText}
            name="bottomText"
            onChange={this.handleChange}
          />
          <button className="bg-blue-500 text-white rounded px-4 py-2">Generate</button>
        </form>

        <div className="relative w-full max-w-xs mt-6">
          {this.state.randomImg && (
            <img src={this.state.randomImg} alt="meme" className="w-full h-auto" />
          )}
          {this.state.randomImg && (
            <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white font-bold text-xl uppercase tracking-wide text-center drop-shadow-md p-1">
              {this.state.topText}
            </h2>
          )}
          {this.state.randomImg && (
            <h2 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white font-bold text-xl uppercase tracking-wide text-center drop-shadow-md p-1">
              {this.state.bottomText}
            </h2>
          )}
        </div>
      </div>
    );
  }
}

export default App;
