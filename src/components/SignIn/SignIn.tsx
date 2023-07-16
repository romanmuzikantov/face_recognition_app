import React from 'react';
import './SignIn.css';

function SignIn(): JSX.Element {
    return (
        <div
            className="br4 z-9999 center ph6 pv5 main-container flex flex-column"
            style={{ gap: '48px' }}
        >
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
                    <button type="submit" className="w-100 h2">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
