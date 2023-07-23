import React from 'react';
import { UserResponse } from '../../models/UserResponse';

interface RankProps {
    currentUser: UserResponse;
}

function Rank({ currentUser }: RankProps): JSX.Element {
    return (
        <div className="z-9999">
            <div className="near-black f3">
                Hello {currentUser.username}, your current entry count is...
            </div>
            <div className="near-black f1">{currentUser.entries}</div>
        </div>
    );
}

export default Rank;
