import React, { BaseSyntheticEvent, useState } from 'react';

interface RegisterProps {
    navToSignInForm: () => void;
    onRegisterFormSubmit: (login: string, password: string) => Promise<void>;
}

function Register({ navToSignInForm, onRegisterFormSubmit }: RegisterProps): JSX.Element {
    const [loginInput, setLoginInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const onLoginInputChange = (event: BaseSyntheticEvent) => {
        setLoginInput(event.target.value);
    };
    const onPasswordInputChange = (event: BaseSyntheticEvent) => {
        setPasswordInput(event.target.value);
    };

    const submitRegisterForm = () => {
        onRegisterFormSubmit(loginInput, passwordInput);
    };

    return (
        <div className="flex flex-column" style={{ gap: '48px' }}>
            <div className="f2">Register</div>
            <div className="flex flex-column" style={{ gap: '16px' }}>
                <div className="flex flex-column items-start" style={{ gap: '8px' }}>
                    <div>Username</div>
                    <input className="br2 ba b--black-50 pa1" onChange={onLoginInputChange} />
                </div>
                <div className="flex flex-column items-start" style={{ gap: '8px' }}>
                    <div>Password</div>
                    <input className="br2 ba b--black-50 pa1" onChange={onPasswordInputChange} />
                </div>
            </div>
            <div className="flex flex-column" style={{ gap: '8px' }}>
                <div>
                    <button type="submit" className="w-100 h2" onClick={submitRegisterForm}>
                        Register
                    </button>
                </div>
                <div>Or</div>
                <div>
                    <button type="submit" className="w-100 h2" onClick={navToSignInForm}>
                        Already have an account ?
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;
