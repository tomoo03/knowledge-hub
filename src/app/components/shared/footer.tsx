import React from 'react';
import styles from '@/styles/components/shared/footer.module.css';
import { Link } from '@nextui-org/react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <Link href="#">リスト01</Link>
        </li>
        <li>
          <Link href="#">リスト02</Link>
        </li>
        <li>
          <Link href="#">リスト03</Link>
        </li>
      </ul>
    </footer>
  );
}
