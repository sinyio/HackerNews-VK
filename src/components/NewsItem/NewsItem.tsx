import { FC } from "react";
import styles from './NewsItem.module.css'

interface NewsItemProps {
  url: string;
  title: string;
  by: string;
  score: number;
  index: number;
}

const NewsItem: FC<NewsItemProps> = ({ url, title, by, score, index }) => {
  return (
    <li className={styles.news_item}>
      <a className={styles.news_link} href={url} target="_blank">{index + 1}. {title}</a>
      <p>{score} points by {by}</p>
    </li>
  );
};

export default NewsItem;
