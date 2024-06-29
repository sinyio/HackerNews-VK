import { useState, createContext, FC, ReactNode } from "react";

type NewsState = {
  category: string;
  setCategory: (value: string) => void;
  fetchNews: () => void;
  news: NewsItem[];
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  isUpdate: boolean;
  setIsUpdate: (value: boolean) => void;
  loadedCount: number;
  setLoadedCount: (value: number) => void
};

interface NewsContextProviderProps {
  children: ReactNode;
}

interface NewsItem {
  id: number;
  title: string;
  url: string;
  score: number;
  by: string;
}

export const NewsContext = createContext<NewsState>({
  category: "newstories",
  setCategory: () => {},
  fetchNews: () => {},
  news: [],
  isLoading: true,
  setIsLoading: () => {},
  isUpdate: true,
  setIsUpdate: () => {},
  loadedCount: 15,
  setLoadedCount: () => {}
});

const NewsContextProvider: FC<NewsContextProviderProps> = ({ children }) => {
  const [category, setCategory] = useState<string>("newstories");
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isUpdate, setIsUpdate] = useState<boolean>(true);
  const [loadedCount, setLoadedCount] = useState<number>(15);

  const fetchNews = async (): Promise<void> => {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/${category}.json`
    );
    const data = await response.json();
    const newsItems = await Promise.all(
      data.slice(0, loadedCount).map(async (id) => {
        const itemResponse = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        );
        return itemResponse.json();
      })
    );
    setNews(newsItems);
    setIsLoading(false);
    setIsUpdate(false);
  };

  const contextValue: NewsState = {
    category: category,
    setCategory: setCategory,
    fetchNews: fetchNews,
    news: news,
    isLoading: isLoading,
    setIsLoading: setIsLoading,
    isUpdate: isUpdate,
    setIsUpdate: setIsUpdate,
    loadedCount: loadedCount,
    setLoadedCount: setLoadedCount
  };

  return (
    <NewsContext.Provider value={contextValue}>{children}</NewsContext.Provider>
  );
};

export default NewsContextProvider;
