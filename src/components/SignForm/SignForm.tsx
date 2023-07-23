import React, { useState } from 'react';
import './SignForm.css';
import SignIn from '../SignIn/SignIn';
import Register from '../Register/Register';

interface SignFormProps {
    onRegisterFormSubmit: (login: string, password: string) => Promise<void>;
    onLoginFormSubmit: (login: string, password: string) => Promise<void>;
}

function SignForm({ onRegisterFormSubmit, onLoginFormSubmit }: SignFormProps): JSX.Element {
    const [signingRoute, setSigninRoute] = useState('signIn');

    const navToRegisterForm = () => {
        setSigninRoute('register');
    };
    const navToSignInForm = () => {
        setSigninRoute('signIn');
    };

    return (
        <div className="br4 z-9999 center ph6 pv5 main-container">
            {signingRoute === 'signIn' ? (
                <SignIn
                    navToRegisterClicked={navToRegisterForm}
                    onLoginFormSubmit={onLoginFormSubmit}
                />
            ) : (
                <Register
                    navToSignInForm={navToSignInForm}
                    onRegisterFormSubmit={onRegisterFormSubmit}
                />
            )}
        </div>
    );
}

export default SignForm;
