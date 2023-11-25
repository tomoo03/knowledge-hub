import styles from '@/styles/pages/page.module.css';
import ArticleCard from '@/app/components/article/articleCard';

export default function Page() {
  const articles = [
    { title: '記事1', content: '記事1の内容', category: 'react', tags: [
      { name: 'web' },
      { name: 'ssg' },
      { name: 'develop' },
      { name: 'react' },
    ] },
    { title: '記事2', content: '記事2の内容', category: 'vue.js', tags: [
      { name: 'web' },
      { name: 'ssg' },
      { name: 'develop' },
      { name: 'react' },
    ] },
    { title: '記事3', content: '記事3の内容', category: 'next.js', tags: [
      { name: 'web' },
      { name: 'ssg' },
      { name: 'develop' },
      { name: 'react' },
    ] },
  ];

  return (
    <>
      <div className={styles.row}>
        {articles.map(({ title, content, category, tags }) => (
          <ArticleCard
            key={title}
            title={title}
            content={content}
            category={category}
            tags={tags}
          />
        ))}
      </div>
    </>
  );
}
