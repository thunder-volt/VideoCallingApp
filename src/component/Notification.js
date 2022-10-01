import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../component/SocketContext';

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
        <>
            {call.isReceivingCall && !callAccepted && (
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <h1>is calling:</h1>
                    <Button variant="contained" color="primary" onClick={() => (answerCall)}>
                        Answer
                    </Button>
                </div>
            )}
        </>
    );
};

export default Notifications;