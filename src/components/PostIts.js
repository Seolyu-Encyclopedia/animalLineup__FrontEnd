import React from "react";
import styles from "./PostIts.module.css";

function PostIts({ handlePostItClick }) {
  return (
    <div className={styles.PostIts}>
      <div
        className={`${styles.PostIt} ${styles.PostIt1}`}
        onClick={() => handlePostItClick("Paper1")}
      >
        <div className={`${styles.Index} ${styles.Index1}`}>게시판1</div>
      </div>
      <div
        className={`${styles.PostIt} ${styles.PostIt2}`}
        onClick={() => handlePostItClick("Paper2")}
      >
        <div className={`${styles.Index} ${styles.Index2}`}>게시판2</div>
      </div>
      <div
        className={`${styles.PostIt} ${styles.PostIt3}`}
        onClick={() => handlePostItClick("Paper3")}
      >
        <div className={`${styles.Index} ${styles.Index3}`}>게시판3</div>
      </div>
      <div
        className={`${styles.PostIt} ${styles.PostIt4}`}
        onClick={() => handlePostItClick("Paper4")}
      >
        <div className={`${styles.Index} ${styles.Index4}`}>게시판4</div>
      </div>
      <div
        className={`${styles.PostIt} ${styles.LoginLogout}`}
        onClick={() => handlePostItClick("Paper5")}
      >
        <div className={`${styles.Index} ${styles.Index5}`}>게시판5</div>
      </div>
      <div
        className={`${styles.PostIt} ${styles.MyPage}`}
        onClick={() => handlePostItClick("Paper6")}
      >
        <div className={`${styles.Index} ${styles.Index6}`}>게시판6</div>
      </div>
    </div>
  );
}

export default PostIts;
