import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

function App() {
  return (
    <div className="App flex flex-column">
      <Navigation />
      <div className='flex-auto flex items-center'>
        <ImageLinkForm />
      </div>
    </div>
  );
}

export default App;
