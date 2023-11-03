import React from 'react';
import styles from '@/styles/components/shared/sidebar.module.css';
// import Link from 'next/link';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function Sidebar() {
  const categories = [
    { name: 'react' },
    { name: 'vue.js' },
    { name: 'next.js' },
  ];
  const tags = [
    { name: 'web' },
    { name: 'ssg' },
    { name: 'develop' },
    { name: 'react' },
  ];


  return (
    <div className={styles.side}>
      <section>
        <h2>カテゴリー</h2>
        <div className="flex flex-wrap md:inline-grid md:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <Link key={`${category.name}-${index}`} href={`/category/${category.name}`}>
              <Button  radius="full">
                {category.name}
              </Button>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <h2>タグ</h2>
        <div className="flex flex-wrap md:inline-grid md:grid-cols-3 gap-4">
          {tags.map((tag, index) => (
            <Link key={`${tag.name}-${index}`} href={`/tag/${tag.name}`}>
              <Button  radius="full">
                {tag.name}
              </Button>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <h2>カテゴリー</h2>
        <p>sidebar</p>
      </section>
      <section>
        <h2>カテゴリー</h2>
        <p>sidebar</p>
      </section>
    </div>
  );
}
