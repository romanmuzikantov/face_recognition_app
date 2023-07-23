import React, { BaseSyntheticEvent, useState } from 'react';

interface SignInProps {
    navToRegisterClicked: () => void;
    onLoginFormSubmit: (login: string, password: string) => Promise<void>;
}

function SignIn({ navToRegisterClicked, onLoginFormSubmit }: SignInProps): JSX.Element {
    const [loginInput, setLoginInput] = useState('');
    const [registerInput, setRegisterInput] = useState('');

    const onLoginInputChange = (event: BaseSyntheticEvent) => {
        setLoginInput(event.target.value);
    };
    const onRegisterInputChange = (event: BaseSyntheticEvent) => {
        setRegisterInput(event.target.value);
    };

    const submitLoginForm = () => {
        onLoginFormSubmit(loginInput, registerInput);
    };

    return (
        <div className="flex flex-column" style={{ gap: '48px' }}>
            <div className="f2">Sign In</div>
            <div className="flex flex-column" style={{ gap: '16px' }}>
                <div className="flex flex-column items-start" style={{ gap: '8px' }}>
                    <div>Username</div>
                    <input className="br2 ba b--black-50 pa1" onChange={onLoginInputChange} />
                </div>
                <div className="flex flex-column items-start" style={{ gap: '8px' }}>
                    <div>Password</div>
                    <input className="br2 ba b--black-50 pa1" onChange={onRegisterInputChange} />
                </div>
            </div>
            <div className="flex flex-column" style={{ gap: '8px' }}>
                <div>
                    <button type="submit" className="w-100 h2" onClick={submitLoginForm}>
                        Sign In
                    </button>
                </div>
                <div>Or</div>
                <div>
                    <button type="submit" className="w-100 h2" onClick={navToRegisterClicked}>
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
