import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { abi, chainId, contractAddress } from '../config';
import { metaMask, hooks } from '../connectors/metaMask';

const Funded = () => {
  const [userBalance, setUserBalance] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [maxSupply, setMaxSupply] = useState(0);
  const {
    useChainId,
    useAccounts,
    useError,
    useIsActivating,
    useIsActive,
    useProvider,
    useENSNames,
  } = hooks;
  const accounts = useAccounts();
  const isActive = useIsActive();
  const provider = useProvider();
  const connectedChainId = useChainId();

  const isCorrectChain = connectedChainId === chainId;
  const account = accounts && accounts[0];

  const fetchBalance = async () => {
    if (isActive) {
      const balance = await provider.getBalance(account);
      const beth = ethers.utils.formatEther(balance);
      setUserBalance(beth);
    }
  };

  const getContract = () => {
    const signer = provider?.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    return contract;
  };

  const fetchSupply = async () => {
    try {
      const contract = getContract();

      const ts = await contract['totalSupply()']();
      const ms = await contract.maxSupply();

      const tsNumber = ts.toNumber();
      const msNumber = ms.toNumber();

      setTotalSupply(tsNumber);
      setMaxSupply(msNumber);
    } catch (error) {
      console.log({ error });
    }
  };

  const pageLoad = async () => {
    if (isActive && isCorrectChain) {
      fetchBalance();
      fetchSupply();
    }
  };

  useEffect(() => {
    pageLoad();
  }, [accounts, connectedChainId]);

  useEffect(() => {
    void metaMask.connectEagerly();
  }, []);

  const percentage = (totalSupply / maxSupply) * 100;

  return (
    <div className='Funded' id="connect">
      <div className='content_area  common_width'>
        {percentage ? <h1>{percentage?.toFixed(2)}% Funded</h1> : <h1></h1>}

        <div className='progress_container'>
          <div className='progress_wrapper'>
            <span
              className='inner_progress'
              style={{
                width: `${percentage}%`,
              }}
            ></span>
          </div>
          <p>
            {totalSupply}/{maxSupply}
          </p>
        </div>
        {isActive ? (
          <>
            {!isCorrectChain ? (
              <div
                className='buttons_wrapper'
                onClick={() => metaMask.activate(chainId)}
              >
                <button
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  Change Chain
                </button>
              </div>
            ) : (
              <div
                style={{
                  textAlign: 'center',
                  color: 'white',
                  marginTop: 20,
                  fontSize: 20,
                }}
              >
                <p>
                  <span> Connected To</span>{' '}
                  <span>
                    <span
                      style={{
                        fontWeight: 700,
                      }}
                    >
                      {account.slice(0, 6)}...
                      {account.slice(account.length - 4, account.length)}
                    </span>{' '}
                    <span> ({userBalance && userBalance.slice(0, 4)})</span>
                  </span>
                </p>
              </div>
            )}
          </>
        ) : (
          <div
            className='buttons_wrapper'
            onClick={() => metaMask.activate(chainId)}
          >
            <button
              style={{
                cursor: 'pointer',
              }}
            >
              Connect Wallet
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Funded;
