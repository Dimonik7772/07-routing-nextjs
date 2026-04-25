'use client';

import css from './ModalId.module.css';
import { useQuery } from '@tanstack/react-query';
import { getNoteById } from '@/lib/api';
import Loader from '@/app/loading';
import { useRouter } from 'next/navigation';

type Props = {
  id: string;
};
export default function NotePreviewClient({ id }: Props) {
  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['Note', id],
    queryFn: () => getNoteById(id),
  });
  const router = useRouter();
  const close = () => router.back();
  if (isError || !note) return null;
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      router.back();
    }
  };
  return (
    <div className={css.backdrop} role="dialog" aria-modal="true" onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button onClick={close} className={css.backBtn}>
          Close
        </button>
        {isLoading && <Loader />}
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{note.title}</h2>
            </div>
            <p className={css.tag}>{note.tag}</p>
            <p className={css.content}>{note.content}</p>
            <p className={css.date}>{note.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
