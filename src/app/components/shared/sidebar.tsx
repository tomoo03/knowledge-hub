import React from 'react';
import styles from '@/styles/components/shared/sidebar.module.css';
// import Link from 'next/link';
import CategoryButton from '../buttons/categoryButton';
import TagButton from '../buttons/tagButton';

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
        <div>
          {categories.map((category, index) => (
            <CategoryButton
              key={`${category.name}-${index}`}
              name={category.name}
            />
          ))}
        </div>
      </section>
      <section>
        <h2>タグ</h2>
        <div>
          {tags.map((tag, index) => (
            <TagButton
              key={`${tag.name}-${index}`}
              name={tag.name}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
