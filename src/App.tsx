import React, { BaseSyntheticEvent, Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import CustomParticles from './components/Particles/Particles';
import ImageContainer from './components/ImageContainer/ImageContainer';
import SignForm from './components/SignForm/SignForm';
import { BoundingBox } from './models/PostImageResponse';
import ImageReposistory from './network/ImageRepository';
import UserRepository from './network/UserRepository';
import { UserResponse } from './models/UserResponse';
import { isError } from './models/ErrorModel';

interface AppProps {}

interface AppState {
    input: string;
    imageUrl: string;
    boundingBoxes: BoundingBox[];
    route: string;
    currentUser: UserResponse | undefined;
}

class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            input: '',
            imageUrl: '',
            boundingBoxes: [],
            route: 'signin',
            currentUser: undefined,
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

    onRegisterFormSubmit = async (login: string, password: string) => {
        const response = await UserRepository.RegisterUser(login, password);

        if (isError(response)) {
            return;
        }

        this.setState({
            currentUser: response,
            route: 'index',
        });
    };

    onLoginFormSubmit = async (login: string, password: string) => {
        const response = await UserRepository.LoginUser(login, password);

        if (isError(response)) {
            return;
        }

        this.setState({
            currentUser: response,
            route: 'index',
        });
    };

    render() {
        const { imageUrl, boundingBoxes, route, currentUser } = this.state;
        return (
            <div className="App flex flex-column" style={{ gap: '24px' }}>
                <Navigation isSignedIn={route === 'home'} />
                {route === 'signin' ? (
                    <SignForm
                        onRegisterFormSubmit={this.onRegisterFormSubmit}
                        onLoginFormSubmit={this.onLoginFormSubmit}
                    />
                ) : (
                    <div className="flex flex-column" style={{ gap: '24px' }}>
                        <ImageLinkForm
                            onInputChange={this.onInputChange}
                            onFormSubmit={this.onImageFormSubmit}
                            currentUser={currentUser!}
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
