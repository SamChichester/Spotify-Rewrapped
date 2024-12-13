import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <div>
      <ul className={styles.navbar}>
        <li className={styles['navbar-element']}>
          <Link className={styles['navbar-link']} href="/">Home</Link>
        </li>
        <li className={styles['navbar-element']}>
          <Link className={styles['navbar-link']} href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;