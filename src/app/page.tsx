import { Button } from '@nextui-org/button';
import styles from '@/styles/pages/page.module.css';
import ArticleCard from '@/app/components/article/articleCard';

export default function Page() {
  const articles = [
    { title: '記事1', content: '記事1の内容' },
    { title: '記事2', content: '記事2の内容' },
    { title: '記事3', content: '記事3の内容' },
  ];

  return (
    <>
      <div className={styles.row}>
        <div>
          <Button>Click me</Button>
        </div>

        {articles.map(({ title, content }) => (
          <ArticleCard
            key={title}
            title={title}
            content={content}
          />
        ))}
      </div>
    </>
  );
}
