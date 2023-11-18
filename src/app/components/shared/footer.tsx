import React from 'react';
import styles from '@/styles/components/shared/footer.module.css';
import { Link } from '@nextui-org/react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h3>リンク</h3>
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
      </div>
      <div>
        <h3>ソーシャルメディア</h3>
        <ul>
          <li><Link href="#">Facebook</Link></li>
          <li><Link href="#">Twitter</Link></li>
          <li><Link href="#">Instagram</Link></li>
        </ul>
      </div>
      <div>
        <p>&copy; 2023 <Link href="/">KnowledgeHub</Link>. All rights reserved.</p>
      </div>
    </footer>
  );
}
