import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import ZillyWidget from "../components/ZillyWidget";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    infuraProvider({ apiKey: "b04b37c3dbff42c8be388b1e42f4102c" }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "Zilly ETH Lisbon",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const AppInfo = {
  appName: "Zilly ETH Lisbon",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        appInfo={AppInfo}
        chains={chains}
        theme={darkTheme({ accentColor: "#51204E" })}
      >
        <ZillyWidget>
          <Component {...pageProps} />
        </ZillyWidget>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
