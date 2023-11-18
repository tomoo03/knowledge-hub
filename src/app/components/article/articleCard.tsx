import { Card, CardBody, Divider, Image } from '@nextui-org/react';
import CategoryButton from '../buttons/categoryButton';
import UpdatedIcon from '../icons/updatedIcon';

interface Props {
  readonly title: string;
  readonly content: string;
  readonly category: string;
}

export default function ArticleCard({ title, content, category }: Props) {
  return (
    <Card
      isBlurred
      // className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div>
          <div>
            <Image
              alt="Album cover"
              // className="object-cover"
              // height="50px"
              shadow="md"
              src="/images/album-cover.png"
              // width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">
                  カテゴリー
                </h3>
                <CategoryButton name={category} />
                <h1 className="text-large font-medium mt-2">
                  {title}
                </h1>
              </div>
            </div>

            <Divider/>

            <div className="flex flex-col mt-3 gap-1">
              <div className="flex justify-end">
                <UpdatedIcon />
                <p className="text-small text-foreground/50">2023-11-15</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">

              <p>{content}</p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
