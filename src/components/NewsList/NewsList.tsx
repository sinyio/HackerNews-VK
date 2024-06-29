import { useEffect, useContext, FC } from "react";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./NewsList.module.css";
import { NewsContext } from "../../store/news.context";

const NewsList: FC = () => {
  const newsCtx = useContext(NewsContext);
  const {
    category,
    fetchNews,
    isLoading,
    setIsLoading,
    isUpdate,
    news,
    loadedCount,
    setLoadedCount,
  } = newsCtx;

  useEffect(() => {
    setIsLoading(true);
    fetchNews();
    const interval = setInterval(fetchNews, 30000);

    return () => {
      console.log("clear");
      clearInterval(interval);
    };
  }, [category, isUpdate, loadedCount]);

  const loadMoreNews = () => {
    setLoadedCount(loadedCount + 15);
  };

  if (isLoading) {
    return <h2 className={styles.loading}>Loading...</h2>;
  }

  return (
    <>
      <ul className={styles.news_list}>
        {news.map((item, index) => (
          <NewsItem
            key={item.id}
            url={item.url}
            title={item.title}
            by={item.by}
            score={item.score}
            index={index}
          />
        ))}
      </ul>
      <button onClick={loadMoreNews}>Загрузить еще</button>
    </>
  );
};

export default NewsList;
