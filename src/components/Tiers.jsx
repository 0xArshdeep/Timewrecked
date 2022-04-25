import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import TierBox from './TierBox';
import { tiersData } from './constant';
import { metaMask, hooks } from '../connectors/metaMask';
import { abi, chainId, contractAddress, tierCosts } from '../config';
import { toast } from 'react-toastify';

const Tiers = () => {
  const [t1TotalSupply, setT1TotalSupply] = useState(0);
  const [t2TotalSupply, setT2TotalSupply] = useState(0);
  const [t3TotalSupply, setT3TotalSupply] = useState(0);
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

  const account = accounts && accounts[0];
  const isCorrectChain = connectedChainId === chainId;

  useEffect(() => {
    void metaMask.connectEagerly();
  }, []);
  // metaMask;

  const getContract = () => {
    const signer = provider?.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    return contract;
  };

  const fetchTotalSupply = async () => {
    try {
      const contract = getContract();
      console.log(contract.totalSupply, contract);
      const t1 = await contract['totalSupply(uint256)'](1);
      const t2 = await contract['totalSupply(uint256)'](2);
      const t3 = await contract['totalSupply(uint256)'](3);

      console.log({ t1 });
      const t1Number = t1.toNumber();
      const t2Number = t2.toNumber();
      const t3Number = t3.toNumber();
      setT1TotalSupply(t1Number);
      setT2TotalSupply(t2Number);
      setT3TotalSupply(t3Number);
    } catch (error) {
      console.log({ error });
    }
  };

  const mint = async (count, tier) => {
    const p = new Promise(async (resolve, reject) => {
      try {
        const contract = getContract();
        const payableETHValue = count * tierCosts[tier - 1];
        console.log({ payableETHValue });
        const res = await contract.mint(count, tier, {
          value: ethers.utils.parseEther(payableETHValue.toString()),
        });

        await res.wait();

        resolve('Successfully Minted');
        pageLoad();
      } catch (error) {
        console.log({ error });
        switch (error?.code) {
          case 'INSUFFICIENT_FUNDS':
            reject('Not enough funds');
            break;

          case 4001:
            reject('User denied the transaction');
            break;

          default:
            reject('The process failed');
            break;
        }
      }
    });

    toast.promise(p, {
      pending: `Minting ${count} NFT(s) from TIER${tier}`,
      success: {
        render({ data }) {
          return data;
        },
      },
      error: {
        render({ data }) {
          return data;
        },
      },
    });
  };

  const pageLoad = async () => {
    if (isActive && isCorrectChain) {
      fetchTotalSupply();
    }
  };

  useEffect(() => {
    pageLoad();
  }, [accounts, connectedChainId]);

  return (
    <div className='tiers' id="mint">
      <div className='content_area common_width'>
        {/* {tiersData.map((EachData, index) => (
          <TierBox
            key={index}
            etheading={EachData.etheading}
            img={EachData.img}
            main_heading={EachData.mainHeading}
            et={EachData.et10}
            voting={EachData.voting}
            list={EachData.list}
            tier_heading={EachData.tierheading}
            tierpara={EachData.tierpara}
          />
        ))} */}

        <TierBox
          etheading={tiersData[0].etheading}
          img={tiersData[0].img}
          main_heading={tiersData[0].mainHeading}
          et={tiersData[0].et10}
          voting={tiersData[0].voting}
          list={tiersData[0].list}
          tierpara={tiersData[0].tierpara}
          totalSupply={t1TotalSupply}
          maxSupply={6}
          price={tierCosts[0]}
          mint={(c) => {
            mint(c, 1);
          }}
          isDisabled={!isActive}
        />

        <TierBox
          etheading={tiersData[1].etheading}
          img={tiersData[1].img}
          main_heading={tiersData[1].mainHeading}
          et={tiersData[1].et10}
          voting={tiersData[1].voting}
          list={tiersData[1].list}
          tierpara={tiersData[1].tierpara}
          totalSupply={t2TotalSupply}
          maxSupply={25}
          price={tierCosts[1]}
          mint={(c) => {
            mint(c, 2);
          }}
          isDisabled={!isActive}
        />
        <TierBox
          etheading={tiersData[2].etheading}
          img={tiersData[2].img}
          main_heading={tiersData[2].mainHeading}
          et={tiersData[2].et10}
          voting={tiersData[2].voting}
          list={tiersData[2].list}
          tierpara={tiersData[2].tierpara}
          totalSupply={t3TotalSupply}
          maxSupply={1081}
          price={tierCosts[2]}
          mint={(c) => {
            mint(c, 3);
          }}
          isDisabled={!isActive}
        />
      </div>
    </div>
  );
};
export default Tiers;
