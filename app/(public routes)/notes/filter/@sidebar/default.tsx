'use client';

import css from './SidebarNotes.module.css';
import { getCategories } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export default function NotesSidebar() {
  const { data } = useQuery({
    queryKey: ['Note'],
    queryFn: getCategories,
  });
  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </Link>
      </li>
      {data?.map(category => (
        <li key={category.id} className={css.menuItem}>
          <Link href={`/notes/filter/${category.id}`} className={css.menuLink}>
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
