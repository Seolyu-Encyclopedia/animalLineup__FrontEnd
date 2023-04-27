import React from 'react';
import styles from './InnerDiary.module.css';
import SidePaper from './SidePaper';
import Rings from './Rings';
import Paper from './Paper';

function InnerDiary({ selectedPaper }) {
  return (
    <div className={styles.InnerDiary}>
      <SidePaper selectedPaper={selectedPaper} />
      <Rings selectedPaper={selectedPaper} />
      <Paper selectedPaper={selectedPaper} />
    </div>
  );
}

export default InnerDiary;
