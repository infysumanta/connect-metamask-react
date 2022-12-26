import React, { useEffect, useState } from "react";

const App = () => {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
    }
  }, []);

  const connectWallet = async () => {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((account) => {
        setAccount(account);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="App">
      {isWalletInstalled ? (
        <div className="card">
          {account === null ? (
            <>
              <button onClick={connectWallet}>Connect Wallet</button>
            </>
          ) : (
            <>
              <p>Connected as : {account}</p>
            </>
          )}
        </div>
      ) : (
        <>
          <p>
            Please Install Metamask wallet from Chrome Extention Store to work
            futher
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en-US">
              Link for Chrome Store Metamask
            </a>
          </p>
        </>
      )}
    </div>
  );
};

export default App;
