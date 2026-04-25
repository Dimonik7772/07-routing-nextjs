import { getNotes } from '@/lib/api';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import NotesClient from './Notes.client';

type NotesByIdCategoryProps = {
  params: Promise<{ slug: string[] }>;
};

const NotesByCategory = async ({ params }: NotesByIdCategoryProps) => {
  const { slug } = await params;
  const category = slug[0] === 'all' ? undefined : slug[0];
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['NotesByCategories', category],
    queryFn: () => getNotes(category),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient category={category} />
    </HydrationBoundary>
  );
};
export default NotesByCategory;
