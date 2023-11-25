import { Card, CardBody, Divider, Image } from '@nextui-org/react';
import CategoryButton from '../buttons/categoryButton';
import UpdatedIcon from '../icons/updatedIcon';
import styles from '@/styles/components/article/articleCard.module.css';
import TagButton from '../buttons/tagButton';

interface Props {
  readonly title: string;
  readonly content: string;
  readonly category: string;
  readonly tags: Array<{ name: string }>;
}

export default function ArticleCard({ title, category, tags }: Props) {
  return (
    // <div className={styles.main}>
    <Card
      className={styles.hoge}
      isBlurred
      // className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className={styles.card_body}>
          <div className={styles.card_image}>
            <Image
              className={styles.image}
              alt="Album cover"
              // className="object-cover"
              // height="50px"
              shadow="md"
              src="/images/album-cover.png"
            // width={755}
            />
          </div>

          <div className={styles.card_main}>
            <div className="flex justify-between items-start">
              <h1 className="text-large font-medium mt-2">
                {title + 'テスト・テストテスト・テストテスト・テストテスト'}
              </h1>
            </div>

            <div className={styles.card_category_info}>
              <div>
                <h3>カテゴリー</h3>
                <CategoryButton name={category} />
              </div>
            </div>

            <div className={styles.card_updated_info}>
              <div className="flex justify-end">
                <UpdatedIcon />
                <p className="text-small text-foreground/50">2023-11-15</p>
              </div>
            </div>

            <Divider />

            <div className={styles.card_tag_info}>
              <h3>関連</h3>
              <div className={styles.card_tag_detail}>
                {
                  tags.length > 0 && (
                    tags.map(({ name }) => {
                      return (
                        <div key={name}>
                          <div>
                            <TagButton name={name} />
                          </div>
                        </div>
                      );
                    })
                  )
                }
              </div>

            </div>

          </div>
        </div>
      </CardBody>
    </Card>
    // </div>
  );
}
