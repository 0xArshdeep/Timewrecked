import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import TierBox from "./TierBox";
import { tiersData } from "./constant";
import { abi, chainId, contractAddress, tierCosts } from "../config";
import { toast } from "react-toastify";

import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useNetwork,
} from "wagmi";

import { useContract, useSigner, useProvider } from "wagmi";

import { useContractRead } from "wagmi";

const Tiers = () => {
  const [t1TotalSupply, setT1TotalSupply] = useState(0);
  const [t2TotalSupply, setT2TotalSupply] = useState(0);
  const [t3TotalSupply, setT3TotalSupply] = useState(0);

  const { data: account } = useAccount();
  const { data: ensAvatar } = useEnsAvatar({ addressOrName: account?.address });
  const { data: ensName } = useEnsName({ address: account?.address });
  const { connect, connectors, error, isConnecting, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  const { activeChain, chains, isLoading, pendingChainId, switchNetwork } =
    useNetwork();

  const { data: signer, isError } = useSigner();
  const provider = useProvider();

  const contract = useContract({
    addressOrName: contractAddress,
    contractInterface: abi,
    signerOrProvider: signer,
  });

  const { data: ts } = useContractRead(
    {
      addressOrName: contractAddress,
      contractInterface: abi,
    },
    "totalSupply()"
  );

  const { data: ts1 } = useContractRead(
    {
      addressOrName: contractAddress,
      contractInterface: abi,
    },
    "totalSupply(uint256)",
    {
      args: "1",
    }
  );

  const { data: ts2 } = useContractRead(
    {
      addressOrName: contractAddress,
      contractInterface: abi,
    },
    "totalSupply(uint256)",
    {
      args: 2,
    }
  );

  const { data: ts3 } = useContractRead(
    {
      addressOrName: contractAddress,
      contractInterface: abi,
    },
    "totalSupply(uint256)",
    {
      args: 3,
    }
  );

  const fetchTotalSupply = async () => {
    console.log("fetching total supply");
    try {
      setT1TotalSupply(ts1.toNumber());
      setT2TotalSupply(ts2.toNumber());
      setT3TotalSupply(ts3.toNumber());
    } catch (error) {
      console.log({ error });
    }
  };

  const mint = async (count, tier) => {
    const p = new Promise(async (resolve, reject) => {
      try {
        const payableETHValue = count * tierCosts[tier - 1];
        console.log({ payableETHValue });
        const res = await contract.mint(count, tier, {
          value: ethers.utils.parseEther(payableETHValue.toString()),
        });

        await res.wait();

        resolve("Successfully Minted");
        pageLoad();
      } catch (error) {
        console.log({ error });
        switch (error?.code) {
          case "INSUFFICIENT_FUNDS":
            reject("Not enough funds");
            break;

          case 4001:
            reject("User denied the transaction");
            break;

          default:
            reject("The process failed");
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
    if (account) {
      fetchTotalSupply();
    }
  };

  useEffect(() => {
    pageLoad();
  }, [account, activeChain]);

  return (
    <div className="tiers" id="mint">
      <div className="content_area common_width">
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
          maxSupply={5}
          price={tierCosts[0]}
          mint={(c) => {
            mint(c, 1);
          }}
          isDisabled={!account}
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
          isDisabled={!account}
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
          isDisabled={!account}
        />
      </div>
    </div>
  );
};
export default Tiers;
