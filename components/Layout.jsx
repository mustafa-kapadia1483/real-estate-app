import Head from "next/head";
import { Box, propNames } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Real Estate</title>
    </Head>
    <Box maxWidth="1200px" margin="auto">
      <header>
        <Navbar />
      </header>
      <main>
        <Box marginTop="20">{children}</Box>
      </main>
      <footer>
        <Footer />
      </footer>
    </Box>
  </>
);

export default Layout;
