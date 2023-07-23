import React, { BaseSyntheticEvent, Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import CustomParticles from './components/Particles/Particles';
import ImageContainer from './components/ImageContainer/ImageContainer';
import SignForm from './components/SignForm/SignForm';
import { BoundingBox } from './models/PostImageResponse';
import ImageReposistory from './network/ImageRepository';

interface AppProps {}

interface AppState {
    input: string;
    imageUrl: string;
    boundingBoxes: BoundingBox[];
    route: string;
}

class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            input: '',
            imageUrl: '',
            boundingBoxes: [],
            route: 'signin',
        };
    }

    onInputChange = (event: BaseSyntheticEvent) => {
        this.setState({ input: event.target.value });
    };

    onImageFormSubmit = async () => {
        const { input } = this.state;
        this.setState({
            imageUrl: input,
        });
        const response = await ImageReposistory.FindFacesInImage(input);
        this.setState({
            boundingBoxes: response.boundingBoxes,
        });
    };

    render() {
        const { imageUrl, boundingBoxes, route } = this.state;
        return (
            <div className="App flex flex-column" style={{ gap: '24px' }}>
                <Navigation isSignedIn={route === 'home'} />
                {route === 'signin' ? (
                    <SignForm />
                ) : (
                    <div className="flex flex-column" style={{ gap: '24px' }}>
                        <ImageLinkForm
                            onInputChange={this.onInputChange}
                            onFormSubmit={this.onImageFormSubmit}
                        />
                        <ImageContainer imageUrl={imageUrl} boundingBoxes={boundingBoxes} />
                    </div>
                )}
                <CustomParticles />
            </div>
        );
    }
}

export default App;
