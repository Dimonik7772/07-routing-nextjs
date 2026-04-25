import axios from "axios";
import type { Note, NoteFormValues } from "@/types/note";

axios.defaults.baseURL = "https://next-v1-notes-api.goit.study";
axios.defaults.headers.common["Authorization"] =
   `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`;

interface ApiResponse {
   notes: Note[];
   totalPages: number;
}
type Category = {
   id: string;
   name: string;
   description: string;
   createdAt: string;
   updateAt: string;
};

export async function fetchNotes(page: number = 1, search?: string) {
   const response = await axios.get<ApiResponse>("/notes", {
      params: {
         ...(search && { search }),
         page,
         perPage: 8,
      },
   });
   console.log(response);
   return response.data;
}

export const createNote = async (newNote: NoteFormValues) => {
   const response = await axios.post<Note>("/notes", newNote);
   return response.data;
};

export const deleteNote = async (noteId: string) => {
   const response = await axios.delete<Note>(`/notes/${noteId}`);
   return response.data;
};

export const getNoteById = async (noteId: string) => {
   const response = await axios.get<Note>(`/notes/${noteId}`);
   return response.data;
};

export const getNotes = async (categoryId?: string) => {
   const response = await axios.get<ApiResponse>("/notes", {
      params: {
         categoryId,
      },
   });
   return response.data;
};

export const getCategories = async () => {
   const res = await axios<Category[]>("/categories");
   return res.data;
};
