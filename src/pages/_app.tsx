import { createTheme, NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { Layout } from "../layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const darkTheme = createTheme({
    type: "dark",
    theme: {
      colors: {}, // optional
    },
  });

  return (
    <NextUIProvider theme={darkTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}

export default MyApp;
