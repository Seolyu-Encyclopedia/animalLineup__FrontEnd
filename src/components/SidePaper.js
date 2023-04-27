import { useEffect, useState } from 'react';
import styles from './SidePaper.module.css';
import DiaryCoverSide from './DiaryCoverSide';

function SidePaper({ selectedPaper }) {
  const Papers = {
    Paper1: <>사이드1</>,
    Paper2: <>사이드2</>,
    Paper3: <>사이드3</>,
    Paper4: <>사이드4</>,
    Paper5: <>사이드5</>,
    Paper6: <>사이드6</>,
  };

  const [paperComponent, setPaperComponent] = useState(null);

  useEffect(() => {
    setPaperComponent(Papers[selectedPaper] || <DiaryCoverSide />);
  }, [selectedPaper]);

  return <div className={styles.SidePaper}>{paperComponent}</div>;
}

export default SidePaper;
