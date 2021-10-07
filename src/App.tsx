import React from "react";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import useImage from "react-use-image";

import "./App.scss";

import Headers from "./components/Headers";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Footers from "./components/Footers";

import headerJSONData from "./json_data/header_json_data.json";
import sectionsJSONData from "./json_data/sections_json_data.json";
import footerJSONData from "./json_data/footer_json_data.json";

import { FC, useMemo } from "react";
import {
  WalletProvider,
  ConnectionProvider,
} from "@solana/wallet-adapter-react";
import {
  getLedgerWallet,
  getMathWallet,
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolongWallet,
  getTorusWallet,
} from "@solana/wallet-adapter-wallets";
import {
  WalletDialogProvider,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-material-ui";
import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

const theme = createTheme();
export const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);
export const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);
export const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);
export const network = process.env
  .REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
export const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
export const connection = new anchor.web3.Connection(rpcHost);

export const startDateSeed = parseInt(
  process.env.REACT_APP_CANDY_START_DATE!,
  10
);
export const txTimeout = 30000;
const App = () => {
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getTorusWallet({
        options: {
          clientId:
            "BOM5Cl7PXgE9Ylq1Z1tqzhpydY0RVr8k90QQ85N7AKI5QGSrr9iDC-3rvmy0K_hF0JfpLMiXoDhta68JwcxS1LQ",
        },
      }),
      getLedgerWallet(),
      getSolongWallet(),
      getMathWallet(),
      getSolletWallet(),
    ],
    []
  );
  const {
    section_1,
    section_2,
    section_3,
    section_4,
    section_5,
    section_6,
    section_7,
  } = sectionsJSONData;

  const logoHeaderLoading = useImage(headerJSONData.logo_image);

  const section1BackgroundLoading = useImage(section_1.background_image);
  const section1LogoLoading = useImage(section_1.content.logo.image);

  const section2BackgroundLoading = useImage(section_2.background_image);

  const section3BackgroundLoading = useImage(section_3.background_image);
  const section3Category1Loading = useImage(
    section_3.content_categories.category_1.image_url
  );
  const section3Category2Loading = useImage(
    section_3.content_categories.category_2.image_url
  );
  const section3Category3Loading = useImage(
    section_3.content_categories.category_3.image_url
  );

  const section4BackgroundLoading = useImage(section_4.background_image);

  const section5BackgroundLoading = useImage(section_5.background_image);
  const section5SubImageLoading = useImage(section_5.sub_image.image);

  const section6BackgroundLoading = useImage(section_6.background_image);

  const section7BackgroundLoading = useImage(section_7.background_image);
  const section7Roadmap1Loading = useImage(
    section_7.content.roadmap_list.roadmap_1.image
  );
  const section7Roadmap2Loading = useImage(
    section_7.content.roadmap_list.roadmap_2.image
  );
  const section7Roadmap3Loading = useImage(
    section_7.content.roadmap_list.roadmap_3.image
  );
  const section7Roadmap4Loading = useImage(
    section_7.content.roadmap_list.roadmap_4.image
  );
  const section7Roadmap5Loading = useImage(
    section_7.content.roadmap_list.roadmap_5.image
  );
  const section7Roadmap6Loading = useImage(
    section_7.content.roadmap_list.roadmap_6.image
  );
  const section7GalleryFrog1Loading = useImage(
    section_7.content.gallery.frogs[0]
  );
  const section7GalleryFrog2Loading = useImage(
    section_7.content.gallery.frogs[1]
  );
  const section7GalleryFrog3Loading = useImage(
    section_7.content.gallery.frogs[2]
  );
  const section7GalleryFrog4Loading = useImage(
    section_7.content.gallery.frogs[3]
  );
  const section7GalleryFrog5Loading = useImage(
    section_7.content.gallery.frogs[4]
  );
  const section7GalleryFrog6Loading = useImage(
    section_7.content.gallery.frogs[5]
  );
  const section7GalleryFrog7Loading = useImage(
    section_7.content.gallery.frogs[6]
  );
  const section7GalleryFrog8Loading = useImage(
    section_7.content.gallery.frogs[7]
  );
  const section7GalleryFrog9Loading = useImage(
    section_7.content.gallery.frogs[8]
  );
  const section7GalleryFrog10Loading = useImage(
    section_7.content.gallery.frogs[9]
  );
  const section7GalleryFrog11Loading = useImage(
    section_7.content.gallery.frogs[10]
  );
  const section7GalleryFrog12Loading = useImage(
    section_7.content.gallery.frogs[11]
  );
  const section7GalleryFrog13Loading = useImage(
    section_7.content.gallery.frogs[12]
  );
  const section7GalleryFrog14Loading = useImage(
    section_7.content.gallery.frogs[13]
  );

  const footerBackgroundLoading = useImage(footerJSONData.background_image);
  const footerHeaderImageLoading = useImage(
    footerJSONData.content.header_image
  );
  const footerCreatorImageLoading = useImage(
    footerJSONData.content.creator_info.thumbnail
  );
  const footerTwitterImageLoading = useImage(
    footerJSONData.content.followers_icon.twitter
  );
  const footerInstagramImageLoading = useImage(
    footerJSONData.content.followers_icon.instagram
  );
  const footerDiscordImageLoading = useImage(
    footerJSONData.content.followers_icon.discord
  );

  return (
    <ConnectionProvider endpoint={clusterApiUrl("devnet")}>
      <WalletProvider wallets={wallets}>
        <WalletDialogProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {logoHeaderLoading.loaded &&
              section1BackgroundLoading.loaded &&
              section1LogoLoading.loaded &&
              section2BackgroundLoading.loaded &&
              section3BackgroundLoading.loaded &&
              section3Category1Loading.loaded &&
              section3Category2Loading.loaded &&
              section3Category3Loading.loaded &&
              section4BackgroundLoading.loaded &&
              section5BackgroundLoading.loaded &&
              section5SubImageLoading.loaded &&
              section6BackgroundLoading.loaded &&
              section7BackgroundLoading.loaded &&
              section7Roadmap1Loading.loaded &&
              section7Roadmap2Loading.loaded &&
              section7Roadmap3Loading.loaded &&
              section7Roadmap4Loading.loaded &&
              section7Roadmap5Loading.loaded &&
              section7Roadmap6Loading.loaded &&
              section7GalleryFrog1Loading.loaded &&
              section7GalleryFrog2Loading.loaded &&
              section7GalleryFrog3Loading.loaded &&
              section7GalleryFrog4Loading.loaded &&
              section7GalleryFrog5Loading.loaded &&
              section7GalleryFrog6Loading.loaded &&
              section7GalleryFrog7Loading.loaded &&
              section7GalleryFrog8Loading.loaded &&
              section7GalleryFrog9Loading.loaded &&
              section7GalleryFrog10Loading.loaded &&
              section7GalleryFrog11Loading.loaded &&
              section7GalleryFrog12Loading.loaded &&
              section7GalleryFrog13Loading.loaded &&
              section7GalleryFrog14Loading.loaded &&
              footerBackgroundLoading.loaded &&
              footerHeaderImageLoading.loaded &&
              footerCreatorImageLoading.loaded &&
              footerTwitterImageLoading.loaded &&
              footerInstagramImageLoading.loaded &&
              footerDiscordImageLoading.loaded && (
                <Container maxWidth={false}>
                  <Headers JSONData={headerJSONData} />
                  <Section1 JSONData={section_1} />
                  <Section2 JSONData={section_2} />
                  <Section3 JSONData={section_3} />
                  <Section4 JSONData={section_4} />
                  <Section5 JSONData={section_5} />
                  <Section6 JSONData={section_6} />
                  <Section7 JSONData={section_7} />
                  <Footers JSONData={footerJSONData} />
                </Container>
              )}
          </ThemeProvider>
        </WalletDialogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
