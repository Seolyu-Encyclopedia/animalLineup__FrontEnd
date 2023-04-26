import React from "react";
import styles from "./Desk.module.css";
import Logo from "../components/Logo";
import Diary from "../components/Diary";

function Desk() {
  return (
    <div className={styles.Desk}>
      <Logo />
      <Diary />
    </div>
  );
}

export default Desk;
