export type Note = {
   id: string;
   title: string;
   content: string;
   createdAt: string;
   updatedAt: string;
   category: { name: "Work" | "Personal" | "Meeting" | "Shopping" | "Todo" };
};
export type NoteFormValues = {
   title: string;
   content: string;
   name: "Work" | "Personal" | "Meeting" | "Shopping" | "Todo";
};
