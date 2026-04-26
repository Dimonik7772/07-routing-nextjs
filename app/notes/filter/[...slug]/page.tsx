import { getNotes } from '@/lib/api';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import NotesClient from './Notes.client';

type NotesByIdCategoryProps = {
  params: Promise<{ slug: string[] }>;
};

const NotesByCategory = async ({ params }: NotesByIdCategoryProps) => {
  const { slug } = await params;

  const tag = slug[0];
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', 1, '', tag],
    queryFn: () => getNotes(1, '', tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
};
export default NotesByCategory;
