import React, { FC } from "react";
import Head from "next/head";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ title, children }) => (
  <>
    <Head>
      <title>{title ? title : "Hello Ecommerce"}</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col min-h-screen justify-between">
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  </>
);

export default Layout;
