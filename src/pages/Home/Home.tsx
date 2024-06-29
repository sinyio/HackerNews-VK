import { FC } from "react";
import NewsList from "../../components/NewsList/NewsList";
import SortBar from "../../components/SortBar/SortBar";
import UpdateButton from "../../components/UpdateButton/UpdateButton";
import styles from './Home.module.css'

const Home: FC = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <SortBar />
        <UpdateButton />
      </div>
      <NewsList />
    </div>
  );
};

export default Home;
