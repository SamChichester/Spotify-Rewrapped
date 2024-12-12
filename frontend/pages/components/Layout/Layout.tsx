import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC <LayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Spotify Rewrapped</title>
      </Head>

      <header>
        <div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Sam Chichester. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;