import React from "react";
import Diary from "../components/Diary";
import styles from "./Desk.module.css";

function Desk() {
  return (
    <div className={styles.Desk}>
      <Diary />
    </div>
  );
}

export default Desk;
