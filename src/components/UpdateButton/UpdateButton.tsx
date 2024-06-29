import { useContext, FC } from "react";
import { NewsContext } from "../../store/news.context";
import styles from './UpdateButton.module.css'

const UpdateButton: FC = () => {
  const newsCtx = useContext(NewsContext);
  const { fetchNews, isUpdate, setIsUpdate, setLoadedCount } = newsCtx;
  return (
    <button className={styles.update_button}
      onClick={() => {
        fetchNews();
        setIsUpdate(!isUpdate);
        setLoadedCount(15)
      }}
    >
      Обновить ленту
    </button>
  );
};

export default UpdateButton;
