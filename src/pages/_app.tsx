import { createTheme, NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { Layout } from "../layout";
import "../styles/globals.css";

function MyApp({ Component, session, pageProps }) {
  const darkTheme = createTheme({
    type: "dark",
    theme: {
      colors: {}, // optional
    },
  });

  return (
    <SessionProvider session={session}>
      <NextUIProvider theme={darkTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </SessionProvider>
  );
}

export default MyApp;
