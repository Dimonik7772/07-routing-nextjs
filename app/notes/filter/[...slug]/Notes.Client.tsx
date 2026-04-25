'use client';

import { getNotes } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import Error from './error';
import Loader from '@/app/loading';
import { NoteList } from '@/components/NoteList/NoteList';

type NoteDetailsClientProps = {
  category?: string;
};
export default function NotesClient({ category }: NoteDetailsClientProps) {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ['NotesByCategories', category],
    queryFn: () => getNotes(category),
    refetchOnMount: false,
  });
  if (isLoading) return <Loader />;
  if (isError) return <Error error={error} />;
  return data ? <NoteList notes={data.notes} /> : null;
}
