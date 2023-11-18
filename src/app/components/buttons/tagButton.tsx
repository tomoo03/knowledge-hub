import { Button } from '@nextui-org/react';
import Link from 'next/link';

interface Props {
  readonly name: string;
}

export default function TagButton({ name }: Props) {
  return (
    <Link href={`/tag/${name}`}>
      <Button radius="full">{name}</Button>
    </Link>
  );
};
