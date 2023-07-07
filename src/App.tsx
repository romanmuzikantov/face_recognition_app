import React, { BaseSyntheticEvent, Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import CustomParticles from './components/Particles/Particles';

interface AppState {
    input: string;
}

class App extends Component {
    constructor(props: any) {
        super(props);

        this.state = {
            input: '',
        };
    }

    onInputChange = (event: BaseSyntheticEvent) => {
        console.log(event.target.value);
        console.log((this.state as AppState).input);
    };

    onFormSubmit = () => {
        console.log(this.state);
    };

    render() {
        return (
            <div className="App flex flex-column" style={{ gap: '24px' }}>
                <Navigation />
                <ImageLinkForm
                    onInputChange={this.onInputChange}
                    onFormSubmit={this.onFormSubmit}
                />
                <CustomParticles />
            </div>
        );
    }
}

export default App;
