import React, { useCallback } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Ranks';
import CustomParticles from './components/Particles/Particles';

const App = () => {
    return (
      <div className="App flex flex-column">
        <Navigation />
        <div className='justify-center flex flex-column' style={{gap: '24px', flex: '1'}}>
          <Rank />
          <ImageLinkForm />
        </div>
        <CustomParticles />
      </div>
    );
}

export default App;