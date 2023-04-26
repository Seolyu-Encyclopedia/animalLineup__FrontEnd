import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Diary.module.css";
import Rings from "./Rings";
import Paper from "./Paper";
import PostIts from "./PostIts";

function Diary() {
  const navigate = useNavigate();
  const { selectedPaper } = useParams();

  const handlePostItClick = (PaperNum) => {
    navigate(`/diary/${PaperNum}`);
  };

  return (
    <div className={styles.Diary}>
      <Rings />
      <Paper selectedPaper={selectedPaper} />
      <PostIts handlePostItClick={handlePostItClick} />
    </div>
  );
}

export default Diary;
