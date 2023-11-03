import styles from '@/styles/pages/category/title/page.module.css';

interface Props {
  readonly params: {
    readonly category: string;
    readonly title: string
  }
}

export function generateStaticParams() {
  return [
    { category: 'a', title: '1' },
    { category: 'b', title: '2' },
    { category: 'c', title: '3' },
  ];
}

export default function Page({ params: { category, title } }: Props) {
  return (
    <>
      <div className={styles.row}>
        <article>

          <section>
            <h1>記事タイトル</h1>
            <p>記事の導入部分や概要</p>
            <p>{`ジャンル: ${category}`}</p>
            <p>{`タイトル: ${title}`}</p>
          </section>

          <section>
            <h2>サブセクションのタイトル1</h2>
            <p>サブセクションの内容1</p>
          </section>

          <section>
            <h2>サブセクションのタイトル2</h2>
            <p>サブセクションの内容2</p>
          </section>

        </article>
      </div>
    </>
  );
}
