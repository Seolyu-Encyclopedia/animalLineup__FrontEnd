import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Diary.module.css';
import PostIts from './PostIts';
import InnerDiary from './InnerDiary';

function Diary() {
  const navigate = useNavigate();
  const { selectedPaper } = useParams();

  const handlePostItClick = (PaperNum) => {
    navigate(`/diary/${PaperNum}`);
  };

  return (
    <div className={styles.Diary}>
      <InnerDiary selectedPaper={selectedPaper} />
      <PostIts handlePostItClick={handlePostItClick} />
    </div>
  );
}

export default Diary;
