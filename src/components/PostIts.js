import React from "react";
import styles from "./PostIts.module.css";

function PostIts() {
  return (
    <div className={styles.PostIts}>
      <div className={`${styles.PostIt} ${styles.PostIt1}`}>
        <div className={`${styles.Index} ${styles.Index1}`}>게시판</div>
      </div>
      <div className={`${styles.PostIt} ${styles.PostIt2}`}>
        <div className={`${styles.Index} ${styles.Index2}`}>게시판</div>
      </div>
      <div className={`${styles.PostIt} ${styles.PostIt3}`}>
        <div className={`${styles.Index} ${styles.Index3}`}>게시판</div>
      </div>
      <div className={`${styles.PostIt} ${styles.PostIt4}`}>
        <div className={`${styles.Index} ${styles.Index4}`}>게시판</div>
      </div>
      <div className={`${styles.PostIt} ${styles.LoginLogout}`}>
        <div className={`${styles.Index} ${styles.Index5}`}>게시판</div>
      </div>
      <div className={`${styles.PostIt} ${styles.MyPage}`}>
        <div className={`${styles.Index} ${styles.Index6}`}>게시판</div>
      </div>
    </div>
  );
}

export default PostIts;
