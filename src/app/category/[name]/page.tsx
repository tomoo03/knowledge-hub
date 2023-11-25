import ArticleCard from '@/app/components/article/articleCard';
import styles from '@/styles/pages/category/name/page.module.css';

interface Props {
  readonly params: {
    readonly name: string
  }
}

export function generateStaticParams() {
  return [
    { name: 'react' },
    { name: 'vue.js' },
    { name: 'next.js' },
  ];
}

export default function Page({ params: { name } }: Props) {
  const articles = [
    { title: '記事1', content: '記事1の内容', category: name, tags: [
      { name: 'web' },
      { name: 'ssg' },
      { name: 'develop' },
      { name: 'react' },
    ] },
  ];

  return (
    <>
      <div className={styles.row}>
        <div>
          <p>カテゴリ：{name}</p>
        </div>

        {articles.map(({ title, content, tags }) => (
          <ArticleCard
            key={title}
            title={title}
            content={content}
            category={name}
            tags={tags}
          />
        ))}

      </div>
    </>
  );
}
