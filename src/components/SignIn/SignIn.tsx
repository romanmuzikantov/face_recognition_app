import React from 'react';

interface SignInProps {
    navToRegisterClicked: () => void;
}

function SignIn({ navToRegisterClicked }: SignInProps): JSX.Element {
    return (
        <div className="flex flex-column" style={{ gap: '48px' }}>
            <div className="f2">Sign In</div>
            <div className="flex flex-column" style={{ gap: '16px' }}>
                <div className="flex flex-column items-start" style={{ gap: '8px' }}>
                    <div>Username</div>
                    <input className="br2 ba b--black-50 pa1" />
                </div>
                <div className="flex flex-column items-start" style={{ gap: '8px' }}>
                    <div>Password</div>
                    <input className="br2 ba b--black-50 pa1" />
                </div>
            </div>
            <div className="flex flex-column" style={{ gap: '8px' }}>
                <div>
                    <button type="submit" className="w-100 h2">
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
