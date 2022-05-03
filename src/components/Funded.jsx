import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { abi, chainId, contractAddress } from "../config";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsName,
  useNetwork,
} from "wagmi";

import { useContract, useSigner, useProvider } from "wagmi";

import { useContractRead } from "wagmi";


const Funded = () => {
  const { data: account } = useAccount();
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

  const ethGenerated = ts1 * 10 + ts2 * 1.5 + ts3 * 0.1;
  const percentage = ((ts1 * 10 + ts2 * 1.5 + ts3 * 0.1) / 120) * 100;

  return (
    <div className="Funded" id="connect">
      <div className="content_area  common_width">
        {account ? (
          <div
            style={{
              textAlign: "center",
              color: "white",
              marginTop: 20,
              fontSize: 20,
            }}
          >
            <div>
              {ensName ? `${ensName} (${account.address})` : account.address}
            </div>
            <div>Connected to {account.connector?.name}</div>
            <div className="buttons_wrapper">
              <button
                style={{
                  cursor: "pointer",
                }}
                onClick={disconnect}
              >
                Disconnect
              </button>
            </div>
          </div>
        ) : (
          <div className="buttons_wrapper">
            {connectors.map((connector) => (
              <button
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => connect(connector)}
                style={{
                  cursor: "pointer",
                }}
              >
                {connector.name}
                {!connector.ready && " (unsupported)"}
                {isConnecting &&
                  connector.id === pendingConnector?.id &&
                  " (connecting)"}
              </button>
            ))}

            {error && (
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  marginTop: 20,
                  fontSize: 20,
                }}
              >
                {error.message}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default Funded;
