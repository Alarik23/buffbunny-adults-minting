import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

export const network = (process.env.NEXT_PUBLIC_SOLANA_NETWORK ||
  WalletAdapterNetwork.Mainnet) as WalletAdapterNetwork;
// const network = WalletAdapterNetwork.Devnet;
export const rpcHost = 'https://twilight-late-road.solana-mainnet.quiknode.pro/6f80120a40ea2c7f486373ef88f689670b76abd9/';

export const candyMachineId = new PublicKey(
    "2STv1Te4MZKR1ezooTnmoq1C1AMJYHegtz4SGzyEDfST"
);
export const defaultGuardGroup =
   '_'; // undefined means default

// "qasJ6jhgtngKk2QnEPdDjuFH8NMoM58W8TxPBXAChPY"
// "3zwFR3spiwbSSMtvVKG2bRT6ttqFoC3MHCafGP8ZrdLz"
// "DAA8yRLu7acVs3kxaTyCjoEjNWGinLaCKVhDY29ASNua"

export const whitelistedWallets = [
  "3dzNgBYqPUskVgzSwuWDNByvPBPVxoEBMt2TJeh1wVEA",
];
