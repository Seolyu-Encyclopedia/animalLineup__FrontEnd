import React from "react";
import styles from "./Diary.module.css";
import Rings from "./Rings";
import Paper from "./Paper";
import PostIts from "./PostIts";

function Diary() {
  return (
    <div className={styles.Diary}>
      <Rings />
      <Paper />
      <PostIts />
    </div>
  );
}

export default Diary;
