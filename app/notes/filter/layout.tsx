import css from './@sidebar/SidebarNotes.module.css';
type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};
export default function NotesLayout({ children, sidebar }: Props) {
  return (
    <section className={css.section}>
      <aside>{sidebar}</aside>
      <div>{children}</div>
    </section>
  );
}
