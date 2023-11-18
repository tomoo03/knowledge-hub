import { Button } from '@nextui-org/react';
import Link from 'next/link';

interface Props {
  readonly name: string;
}

export default function CategoryButton({ name }: Props) {
  return (
    <Link href={`/category/${name}`}>
      <Button radius="full">{name}</Button>
    </Link>
  );
};
