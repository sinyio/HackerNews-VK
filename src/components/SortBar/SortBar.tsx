import { useContext, FC } from "react";
import styles from "./SortBar.module.css";
import { NewsContext } from "../../store/news.context";

const SortBar: FC = () => {
  const newsCtx = useContext(NewsContext);
  return (
    <div className={styles.sort_bar}>
      <h2 className={styles.title}>Cортировать по:</h2>
      <select
        className={styles.select}
        onChange={(e) => newsCtx.setCategory(e.target.value)}
      >
        <option value="newstories">New Stories</option>
        <option value="beststories">Best Stories</option>
        <option value="topstories">Top Stories</option>
      </select>
    </div>
  );
};

export default SortBar;
