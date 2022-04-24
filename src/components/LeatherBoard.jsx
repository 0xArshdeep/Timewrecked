import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import img from '../global/assets/leather.png';
import { abi, chainId, contractAddress, tierCosts } from '../config';
import { metaMask, hooks } from '../connectors/metaMask';

const LeatherBoard = () => {
  const [showtable, setshowtable] = useState(false);
  const [totalSupply, setTotalSupply] = useState(0);
  const [maxSupply, setMaxSupply] = useState(0);
  const [sum, setSum] = useState(0);
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

      const t1 = await contract['totalSupply(uint256)'](1);
      const t2 = await contract['totalSupply(uint256)'](2);
      const t3 = await contract['totalSupply(uint256)'](3);

      const t1Number = t1.toNumber();
      const t2Number = t2.toNumber();
      const t3Number = t3.toNumber();

      let sum = 0;
      sum = sum + t1Number * tierCosts[0];
      sum = sum + t2Number * tierCosts[1];
      sum = sum + t3Number * tierCosts[2];
      setSum(sum);
    } catch (error) {
      console.log({ error });
    }
  };

  const pageLoad = async () => {
    if (isActive && isCorrectChain) {
      fetchSupply();
    }
  };

  useEffect(() => {
    pageLoad();
  }, [accounts, connectedChainId]);

  const percentage = (totalSupply / maxSupply) * 100;

  return (
    <div className='Funded Leaderboard'>
      <img src={img} alt='' />
      <div className='content_area  common_width'>
        <h1>Leaderboard</h1>

        <div className='row_wrapper'>
          <h1>Total raised: {sum} ETH</h1>
          <p>
            Total Number of Collectibles: <h1>{maxSupply}</h1>
          </p>
        </div>
        <div className='progress_container'>
          <div className='progress_wrapper'>
            <p>{totalSupply}</p>
            <span
              className='inner_progress'
              style={{
                width: `${percentage}%`,
              }}
            >
              <span className='ball'></span>
            </span>
            <p>{maxSupply}</p>
          </div>
          {percentage ? (
            <p>{percentage?.toFixed(2)}%</p>
          ) : (
            <p>Please connect your wallet</p>
          )}
        </div>
        <div className='bottom_wrapper'>
          <button onClick={(e) => setshowtable(!showtable)}>
            {!showtable ? 'Show Leaderboard' : 'Hide Leaderboard'}
          </button>
          <p>
            Number of Collectibles Left: <h1>{maxSupply - totalSupply}</h1>
          </p>
          <p>
            Top Collector: <h1></h1>
          </p>
        </div>
        {showtable && (
          <div className='table_wraper'>
            <table>
              <thead>
                <th>Id</th>
                <th>backer</th>
                <th>Ownership</th>
                <th>Contribution</th>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>
                    <img
                      src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                      alt=''
                    />
                    Derek Smith
                  </td>
                  <td>$140,000</td>
                  <td>140.00 ETH</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>
                    <img
                      src='https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                      alt=''
                    />
                    Meg Klock
                  </td>
                  <td>$140,000</td>
                  <td>140.00 ETH</td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>
                    <img
                      src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                      alt=''
                    />
                    Derek Smith
                  </td>
                  <td>$140,000</td>
                  <td>140.00 ETH</td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>
                    <img
                      src='https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                      alt=''
                    />
                    Meg Klock
                  </td>
                  <td>$140,000</td>
                  <td>140.00 ETH</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
export default LeatherBoard;
