import { useEffect, useState } from "react";
import styles from "./Paper.module.css";
import Paper1 from "../pages/Papers/Paper1";
import Paper2 from "../pages/Papers/Paper2";
import Paper3 from "../pages/Papers/Paper3";
import Paper4 from "../pages/Papers/Paper4";
import Paper5 from "../pages/Papers/Paper5";
import Paper6 from "../pages/Papers/Paper6";
import DiaryCover from "./DiaryCover";

function Paper({ selectedPaper }) {
  const Papers = {
    Paper1: <Paper1 />,
    Paper2: <Paper2 />,
    Paper3: <Paper3 />,
    Paper4: <Paper4 />,
    Paper5: <Paper5 />,
    Paper6: <Paper6 />,
  };

  const [paperComponent, setPaperComponent] = useState(null);

  useEffect(() => {
    setPaperComponent(Papers[selectedPaper] || <DiaryCover />);
  }, [selectedPaper]);

  return <div className={styles.Paper}>{paperComponent}</div>;
}

export default Paper;
