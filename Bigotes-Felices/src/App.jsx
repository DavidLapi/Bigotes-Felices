import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './App.css';
import './animations/animations.css'

function App() {
  const [animationItems] = useState(Array(80).fill(null));

  return (
    <div className='app-container'>
    <section className='horizontal-scroll-section'>
      <div className='animation-container'>
        {animationItems.map((_, index) => (
          <div key={index} className='animation-item'>
            <DotLottieReact
              src='https://lottie.host/f641f8b0-b3f8-4a54-8842-f7d8370ad06a/IvfF1QBcqZ.lottie'
              loop
              autoplay
            />
          </div>
        ))}
      </div>
    </section>

    <header className='header'>
        <DotLottieReact src='https://lottie.host/a0352f22-7818-4d06-a6a7-a2ba1108b4f3/i02vinG4JF.lottie'
        loop
        autoplay />
    </header>
    <div className='body'>

    </div>
    <footer className='footer'>
        <h3>Texto</h3>
    </footer>

    <section className='horizontal-scroll-section bottom-fixed'>
      <div className='animation-container-below'>
        {animationItems.map((_, index) => (
          <div key={index} className='animation-item-below'>
            <DotLottieReact
              src='https://lottie.host/9e845a58-1928-4d45-aa89-f3231a63111f/5XjjCUKhxg.lottie'
              loop
              autoplay
            />
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default App;