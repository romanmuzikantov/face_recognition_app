import React, { useState } from 'react';
import './SignForm.css';
import SignIn from '../SignIn/SignIn';
import Register from '../Register/Register';

function SignForm(): JSX.Element {
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
                <SignIn navToRegisterClicked={navToRegisterForm} />
            ) : (
                <Register navToSignInForm={navToSignInForm} />
            )}
        </div>
    );
}

export default SignForm;
