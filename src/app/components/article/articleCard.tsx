interface Props {
  readonly title: string;
  readonly content: string;
}

export default function ArticleCard({ title, content }: Props) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{content}</p>
    </article>
  );
}
