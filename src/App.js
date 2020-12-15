import './App.css';
import { React, Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Clarifai from 'clarifai'

const app = new Clarifai.App({
 apiKey: 'a2bf24b4f4b04ecba27fcf7d840de3e1'
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    console.log('click')
    app.models.predict(
      'd02b4508df58432fbb84e800597b8959',
      'https://samples.clarifai.com/face-det.jpg')
    .then(
      function(response) {
        console.log(response)
      },
      function(err) {

      }
    )
  }

  render() {
    return (
      <div className="App">
      <Particles className='particles'
      params={particlesOptions}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      </div>
    );
  }
}

export default App;
