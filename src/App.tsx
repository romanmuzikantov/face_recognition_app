import React, { BaseSyntheticEvent, Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import CustomParticles from './components/Particles/Particles';
import FindFacesInImage from './network/ClarifaiApi';
import ImageContainer from './components/ImageContainer/ImageContainer';
import { BoundingBox } from './models/ClarifaiFaceDetectionResponse';

interface AppState {
    input: string;
    imageUrl: string;
    boundingBoxes: BoundingBox[];
}

class App extends Component {
    constructor(props: any) {
        super(props);

        this.state = {
            input: '',
            imageUrl: '',
        };
    }

    onInputChange = (event: BaseSyntheticEvent) => {
        this.setState({ input: event.target.value });
    };

    onFormSubmit = async () => {
        const userInput = (this.state as AppState).input;
        const response = await FindFacesInImage(userInput);
        this.setState({
            imageUrl: response.input.data.image.url,
            boundingBoxes: response.data.regions.map((region) => region.region_info.bounding_box),
        });
    };

    render() {
        return (
            <div className="App flex flex-column" style={{ gap: '24px' }}>
                <Navigation />
                <ImageLinkForm
                    onInputChange={this.onInputChange}
                    onFormSubmit={this.onFormSubmit}
                />
                <ImageContainer
                    imageUrl={(this.state as AppState).imageUrl}
                    boundingBoxes={(this.state as AppState).boundingBoxes}
                />
                <CustomParticles />
            </div>
        );
    }
}

export default App;
