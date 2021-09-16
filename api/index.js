import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://notes-app-dody.vercel.app/api",
});

export const getNotes = () => {
  return axiosInstance.get("/notes");
};

export const addNotes = (inputValues) => {
  return axiosInstance.post("/notes", inputValues);
};

export const updateNotes = (id, inputValues) => {
  return axiosInstance.put(`/notes/${id}`, inputValues);
};

export const deleteNotes = (id) => {
  return axiosInstance.delete(`/notes/${id}`);
};
