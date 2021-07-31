import React, { useState } from 'react';
import { getActiveAccount, clearActiveAccount } from "../tezos";

function LoginButton(){

    const [walletConnected, setWalletConnected] = useState(false);

    const handleLogin = async () => {
        // Login/Logout here
        
    }

    return(
        <>
            <button className="btn btn-round-hollow" onClick={handleLogin}>
                {walletConnected ? ('Disconnect Wallet') : ('Connect Wallet')}
            </button>
        </>
    );
}

export default LoginButton;