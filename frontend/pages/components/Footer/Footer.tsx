import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <p>&copy; 2024 Sam Chichester. All rights reserved.</p>
    </div>
  );
};

export default Footer;