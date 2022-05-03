import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { abi, chainId, contractAddress } from "../config";

import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useNetwork,
} from "wagmi";

import { useContract, useSigner, useProvider } from "wagmi";

const TierBox = ({
  img,
  main_heading,
  et,
  voting,
  list,
  tier_heading,
  tierpara,
  etheading,
  totalSupply,
  maxSupply,
  price,
  mint,
  isDisabled,
}) => {
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
  const [count, setCount] = useState(1);

  const totalPrice = (count * 10 * price * 10) / 100;

  return (
    <div className="section_area">
      <div className="box">
        <h1>{tier_heading}</h1>
        <p>{tierpara}</p>
      </div>
      <div className="right_area">
        <h1>{main_heading}</h1>
        <div className="grid_area">
          <div className="left_side">
            <div className="inner_box">
              <h1>{etheading}</h1>
              <p>{et}</p>
            </div>
            <div className="inner_box">
              <h1>VOTING</h1>
              <p>{voting}</p>
            </div>
            <div className="inner_box">
              <h1>utility</h1>
              <ul>
                {list.map((EachLi) => (
                  <li>{EachLi}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="right_side">
            <img src={img} alt="" />
            {account ? (
              <p className="minted">
                {totalSupply}/{maxSupply} Minted
              </p>
            ) : (
              <p></p>
            )}

            <div className="calc_arae">
              <p
                onClick={(e) =>
                  setCount((count) => (count > 1 ? count - 1 : 1))
                }
              >
                -
              </p>
              <div>{count}</div>
              <p
                onClick={(e) =>
                  setCount((count) => (count < 5 ? count + 1 : 5))
                }
              >
                +
              </p>
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: 10,
                fontWeight: 600,
              }}
            >
              {totalPrice} ETH
            </div>
            <div className="button_wrapper">
              <button
                disabled={isDisabled}
                onClick={() => mint(count)}
                style={
                  isDisabled
                    ? {
                        filter: "grayscale(1)",
                      }
                    : {}
                }
              >
                Mint
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TierBox;
