import { Box, Container, ThemeProvider } from "@mui/material";
import Head from "next/head";

import { lightTheme, darkTheme } from "@/styles/mui/theme";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Boilerplate</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
       {/* YOUR JSX CODE HERE */}
      </ThemeProvider>
    </>
  );
}
