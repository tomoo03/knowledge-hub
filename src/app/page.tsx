import styles from '@/styles/pages/page.module.css';
import ArticleCard from '@/app/components/article/articleCard';

export default function Page() {
  const articles = [
    { title: '記事1', content: '記事1の内容', category: 'react' },
    { title: '記事2', content: '記事2の内容', category: 'vue.js' },
    { title: '記事3', content: '記事3の内容', category: 'next.js' },
  ];

  return (
    <>
      <div className={styles.row}>
        {articles.map(({ title, content, category }) => (
          <ArticleCard
            key={title}
            title={title}
            content={content}
            category={category}
          />
        ))}
      </div>
    </>
  );
}
