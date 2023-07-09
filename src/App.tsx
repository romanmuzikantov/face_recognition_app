import React, { BaseSyntheticEvent, Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import CustomParticles from './components/Particles/Particles';
import FindFacesInImage from './network/ClarifaiApi';
import ImageContainer from './components/ImageContainer/ImageContainer';
import { BoundingBox } from './models/ClarifaiFaceDetectionResponse';

interface AppProps {}

interface AppState {
    input: string;
    imageUrl: string;
    boundingBoxes: BoundingBox[];
}

class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            input: '',
            imageUrl: '',
            boundingBoxes: [],
        };
    }

    onInputChange = (event: BaseSyntheticEvent) => {
        this.setState({ input: event.target.value });
    };

    onFormSubmit = async () => {
        const { input } = this.state;
        const response = await FindFacesInImage(input);
        this.setState({
            imageUrl: response.input.data.image.url,
            boundingBoxes: response.data.regions.map((region) => region.region_info.bounding_box),
        });
    };

    render() {
        const { imageUrl, boundingBoxes } = this.state;
        return (
            <div className="App flex flex-column" style={{ gap: '24px' }}>
                <Navigation />
                <ImageLinkForm
                    onInputChange={this.onInputChange}
                    onFormSubmit={this.onFormSubmit}
                />
                <ImageContainer imageUrl={imageUrl} boundingBoxes={boundingBoxes} />
                <CustomParticles />
            </div>
        );
    }
}

export default App;
